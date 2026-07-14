import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const company = typeof body?.company === "string" ? body.company.trim() : "";
    const role = typeof body?.role === "string" ? body.role.trim() : "";
    const budget = typeof body?.budget === "string" ? body.budget.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const pageUrl = typeof body?.pageUrl === "string" ? body.pageUrl : "";
    const honeypot = typeof body?.honeypot === "string" ? body.honeypot : "";

    if (honeypot) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    const errors: string[] = [];
    if (!name) errors.push("Name is required.");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("A valid email is required.");
    if (!company) errors.push("Company is required.");
    if (!role) errors.push("Role or reason is required.");
    if (!message) errors.push("Message is required.");

    if (errors.length) {
      return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
    }

    if (!resend) {
      console.error("Email delivery not configured: Missing RESEND_API_KEY");
      return NextResponse.json(
        {
          error:
            "Message could not be sent right now. Please email me directly at dhaneshpatel1234@gmail.com.",
        },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "dhaneshpatel1234@gmail.com";
    const subject = `New dhaneshpatel.com inquiry from ${name} - ${company}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Role / Reason: ${role}`,
      `Budget / Opportunity Type: ${budget || "Not provided"}`,
      `Message: ${message}`,
      `Page URL: ${pageUrl}`,
      `Timestamp: ${new Date().toISOString()}`,
      `User Agent: ${request.headers.get("user-agent") || "unknown"}`,
    ].join("\n\n");

    await resend.emails.send({
      from: "Dhanesh Patel <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to send message." },
      { status: 500 }
    );
  }
}
