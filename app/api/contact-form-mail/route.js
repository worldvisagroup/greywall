import ContactFormEmailTemplate from "@/app/components/ContactFormEmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, phoneNumber, projectType, budget, propertyName } =
    await request.json();
  try {
    const data = await resend.emails.send({
      from: "The Grey Wall <info@thegreywallinteriors.com>",
      to: [`thegreywall7@gmail.com`],
      subject: "New Contact Form Submission",
      react: (
        <ContactFormEmailTemplate
          name={name}
          phoneNumber={phoneNumber}
          projectType={projectType}
          budget={budget}
          propertyName={propertyName}
        />
      ),
      // html: `
      //   <h1>New Contact Form Submission</h1>
      //   <p><strong>Name:</strong> ${name}</p>
      //   <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      //   <p><strong>Project Type:</strong> ${projectType}</p>
      //   <p><strong>Property Name:</strong> ${propertyName}</p>
      //   <p><strong>Budget:</strong> ${budget} Lac</p>
      //   <p>Thank you</p>
      // `,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
