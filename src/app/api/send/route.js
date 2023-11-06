import { Resend } from 'resend';
import { NextResponse } from 'next/server';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
	const { email, subject, message } = await req.json();
	try {
		const data = await resend.emails.send({
			from: 'contact@eksiart.ru',
			to: 'eksiart-2@mail.ru',
			subject: subject,
			react: (
				<>
					<h2>{subject}</h2>
					<h3>{email}</h3>
					<p>{message}</p>
				</>
			),
		});
		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 })
	}
}
