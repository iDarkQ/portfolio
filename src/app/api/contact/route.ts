import { z } from "zod";
import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

class RequestError extends Error {
    status: number;
    constructor(message: string, status = 400) {
        super(message);
        this.status = status;
    }
}

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email format"),
    message: z.string().min(1, "Message is required"),
});

export const POST = async (request: Request) => {
    try {
        let body;
        try {
            body = await request.json();
        } catch {
            throw new RequestError("Invalid JSON body", 400);
        }

        const { name, email, message } = contactSchema.parse(body);

        if (
            !process.env.SMTP_HOST ||
            !process.env.SMTP_PORT ||
            !process.env.SMTP_USER ||
            !process.env.SMTP_PASS
        ) {
            throw new RequestError("Email forwarding is not set up", 500);
        }

        const transporter: Transporter = nodemailer.createTransport(
            new SMTPTransport({
                host: process.env.SMTP_HOST,
                port: parseInt(process.env.SMTP_PORT, 10),
                secure: process.env.SMTP_PORT === "465",
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            })
        );

        const mailOptions = {
            from: `Portfolio Contact <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            subject: `New contact message from ${name}`,
            text: `You have received a new message from ${name} (${email}):\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return new Response(null, { status: 200 });
    } catch (err) {
        const status = err instanceof RequestError ? err.status : 500;
        const message =
            err instanceof RequestError
                ? err.message
                : err instanceof z.ZodError
                    ? err.message
                    : "Internal Server Error";

        return new Response(JSON.stringify({ error: message }), {
            status,
            headers: { "Content-Type": "application/json" },
        });
    }
};