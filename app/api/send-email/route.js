import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, phone } = await request.json();

  try {
    const data = await resend.emails.send({
      from: 'The Grey Wall <info@thegreywallinteriors.com>',
      to: ['info@thegreywalinteriors.com'],
      subject: 'New Contact Form Submission Contact Us Form The Grey Wall',
      html: `
        <h1>New Contact Form Submission From The Grey Wall Contact Us Form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p>Thankyou</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}