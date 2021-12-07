'use strict'

module.exports = {

  send: async (ctx) => {
    const { emailClient, message } = ctx.request.body;

    const sendTo = process.env.EMAIL_SMTP_USER;

    strapi.log.debug(`Trying to send an email to ${sendTo}`)

    try {
      const emailOptions = {
        to: sendTo,
        subject: "Contato pelo site Celeiro de Bambas",
        html:`
        <p>Email: ${emailClient}</p>
        <p>Mensagem: ${message}</p>`,
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
