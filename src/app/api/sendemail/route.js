// src/app/api/sendemail/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const { nome, email, mensagem } = body;
    
  if (!nome || !email || !mensagem) {
    return new Response(JSON.stringify({ message: 'Todos os campos são obrigatórios' }), {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_DESTINO,
      subject: `Nova mensagem de contato de ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    });

    return new Response(JSON.stringify({ message: 'Email enviado com sucesso!' }), {
      status: 200,
    });
    
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return new Response(JSON.stringify({ message: 'Erro ao enviar email' }), {
      status: 500,
    });
    
  }
  
}
