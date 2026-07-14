import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY?.trim();
const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    let body: Record<string, unknown>;

    try {
      body = await request.json();
    } catch (error) {
      console.error("Contact form: invalid request body", error);
      return NextResponse.json(
        {
          error: "Message could not be sent right now. Please email me directly at dhaneshpatel1234@gmail.com.",
        },
        { status: 400 }
      );
    }

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const company = typeof body?.company === "string" ? body.company.trim() : "";
    const roleReason = typeof body?.roleReason === "string" ? body.roleReason.trim() : "";
    const budget = typeof body?.budget === "string" ? body.budget.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const pageUrl = typeof body?.pageUrl === "string" ? body.pageUrl : "";
    const website = typeof body?.website === "string" ? body.website.trim() : "";

    if (website) {
      return NextResponse.json({ success: true });
    }

    const errors: string[] = [];
    if (!name) errors.push("Name is required.");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("A valid email is required.");
    if (!message) errors.push("Message is required.");

    if (errors.length) {
      console.error("Contact form: invalid request body", { errors, name, email, message });
      return NextResponse.json(
        {
          error: "Message could not be sent right now. Please email me directly at dhaneshpatel1234@gmail.com.",
        },
        { status: 400 }
      );
    }

    if (!resendApiKey || !toEmail) {
      console.error("Contact form: missing environment variables", { resendApiKey: Boolean(resendApiKey), contactToEmail: Boolean(toEmail) });
      return NextResponse.json(
        {
          error: "Message could not be sent right now. Please email me directly at dhaneshpatel1234@gmail.com.",
        },
        { status: 500 }
      );
    }

    if (!resend) {
      console.error("Contact form: Resend client unavailable");
      return NextResponse.json(
        {
          error: "Message could not be sent right now. Please email me directly at dhaneshpatel1234@gmail.com.",
        },
        { status: 500 }
      );
    }

    const subject = `New dhaneshpatel.com inquiry from ${name}`;
    const html = [
      `<p><strong>Name:</strong> ${name}</p>`,
      `<p><strong>Email:</strong> ${email}</p>`,
      `<p><strong>Company:</strong> ${company || "Not provided"}</p>`,
      `<p><strong>Role / Reason:</strong> ${roleReason || "Not provided"}</p>`,
      `<p><strong>Budget / Opportunity Type:</strong> ${budget || "Not provided"}</p>`,
      `<p><strong>Message:</strong> ${message}</p>`,
      `<p><strong>Page URL:</strong> ${pageUrl || "Not provided"}</p>`,
      `<p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>`,
      `<p><strong>User Agent:</strong> ${request.headers.get("user-agent") || "unknown"}</p>`,
    ].join("");

    await resend.emails.send({
      from: "Dhanesh Patel <contact@dhaneshpatel.com>",
      to: [toEmail],
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form: Resend API failure", error);
    return NextResponse.json(
      {
        error: "Message could not be sent right now. Please email me directly at dhaneshpatel1234@gmail.com.",
      },
      { status: 500 }
    );
  }
}
