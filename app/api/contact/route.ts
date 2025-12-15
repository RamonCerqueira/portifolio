import { NextResponse } from 'next/server';
import type { Transporter } from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name || '').trim();
    const email = String(body?.email || '').trim();
    const message = String(body?.message || '').trim();
    const subject = String(body?.subject || 'Solicitação de Desenvolvimento').trim();
    const services = Array.isArray(body?.services) ? body.services : [];
    const goals = Array.isArray(body?.goals) ? body.goals : [];
    const timeline = String(body?.timeline || '').trim();
    const company = String(body?.company || '').trim();
    const phone = String(body?.phone || '').trim();
    const references = String(body?.references || '').trim();
    const contactPref = String(body?.contactPref || '').trim();
    const availability = String(body?.availability || '').trim();
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, message: 'Dados inválidos' }, { status: 400 });
    }
    let transporter: Transporter | null = null;
    try {
      const nodemailer = await import('nodemailer');
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT || 465),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: (process.env.SMTP_PASS || '').replace(/\s+/g, ''),
        },
      });
    } catch {
      transporter = null;
    }
    const to = process.env.CONTACT_TO_EMAIL || 'ramonssa100@gmail.com';
    if (transporter) {
      await transporter.sendMail({
        from: `Portfolio <${process.env.SMTP_USER || 'no-reply@localhost'}>`,
        to,
        replyTo: email,
        subject: `${subject} — ${name}`,
        text:
`Nome: ${name}
Email: ${email}
Empresa: ${company}
Telefone: ${phone}
Serviços: ${services.join(', ')}
Objetivos: ${goals.join(', ')}
Prazo: ${timeline}
Referências: ${references}
Preferência: ${contactPref}
Disponibilidade: ${availability}

Mensagem:
${message}`,
        html:
`<p><strong>Nome:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Empresa:</strong> ${company || '-'}</p>
<p><strong>Telefone:</strong> ${phone || '-'}</p>
<p><strong>Serviços:</strong> ${services.join(', ') || '-'}</p>
<p><strong>Objetivos:</strong> ${goals.join(', ') || '-'}</p>
<p><strong>Prazo:</strong> ${timeline}</p>
<p><strong>Referências:</strong> ${references || '-'}</p>
<p><strong>Preferência de contato:</strong> ${contactPref || '-'}</p>
<p><strong>Disponibilidade:</strong> ${availability || '-'}</p>
<p><strong>Mensagem:</strong><br/>${message}</p>`,
      });
      return NextResponse.json({ ok: true, message: 'Enviado' });
    }
    console.log('Contact form payload:', body);
    return NextResponse.json({ ok: true, message: 'Recebido' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, message: 'Erro' }, { status: 500 });
  }
}
