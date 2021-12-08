module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  }, // Adicionamos aqui a configuração do Nodemailer
  email: {
    provider: "nodemailer", // Definimos o tipo de provedor que encaminhará o email
    providerOptions: { // Aqui é onde configuramos o nodemailer
      host: "smtp.gmail.com", // O host será o "tipo" de email utilizado, no nosso caso o gmail com o protocolo smtp
      port: 587, // Aqui definimos a porta utilizada, nesse caso usamos como padrão a porta 587
      auth: {
        user: env('EMAIL_SMTP_USER'), // Pegamos aqui o usuário (email) colocado no .env
        pass: env('EMAIL_SMTP_PASS'), // Colocamos aqui a senha definida no .env
      },
		settings: {
				defaultFrom: "Celeiro de Bambas" // Nome padrão do email
      },
    },
  },
});
