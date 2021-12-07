'use strict'

module.exports = {

   //Envia um email para o recipiente em sendTo com as informações que vem do body

  send: async (ctx) => { // Estamos definindo aqui a função send

    const { name, email, subject, message } = ctx.request.body; // esses são os campos que
// estão vindo do front atraves do objeto body (iremos ver isso posteriormente)

    const sendTo = process.env.EMAIL_SMTP_USER; // aqui definimos o email de destino, através
// do que colocamos no .env

    strapi.log.debug(`Trying to send an email to ${sendTo}`)

    try {
      const emailOptions = { // Aqui é onde definimos as configurações desejadas do email
        to: sendTo, // sendTo definido acima
        subject: subject, // campo "assunto" que vemos no email
        html:`
        <p>Nome: ${name}</p>
        <p>Email: ${email}</p>
        <p>Mensagem: ${message}</p>`,
			// Acima estamos definindo o corpo do email com html
      }

      await strapi.plugins['email'].services.email.send(emailOptions) // enviando o email através do strapi
      strapi.log.debug(`Email sent to ${sendTo}`)
      ctx.send({ message: 'Email sent' })

    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err) // exibindo erro caso aconteça
      ctx.send({ error: 'Error sending email' })
    }
  },
}
