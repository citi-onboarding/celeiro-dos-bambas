# CITi Onboarding - Strapi Boilerplate

<p align="center">
    <img src="https://raw.githubusercontent.com/jrmmendes/citi-doc-utils/master/citi_black.png">
</p>
<p align="center">
    <img src="https://img.shields.io/badge/staging%20branch-develop-ffffff.svg">
    <img src="https://img.shields.io/badge/production%20branch-main-101010.svg">
</p>

This repository contains a basic Strapi application which is quickly and easily deployable on Heroku.

## Requirements

To deploy this project on Heroku, you'll need:

- An Heroku account (Free)
- A Cloudinary account for hosting your assets (Free)

## Database

This project will use the [postgresql Heroku addons](https://elements.heroku.com/addons/heroku-postgresql). The database configuration can be found in the `config/database.js` file. Using the existing configuration means that you project will also use the production postgresql database when running locally on your machine.
You will need to have the same `DATABASE_URL` that the addon will create on your Heroku project if you want to use the postresql database locally.

- Create an `.env` file at the root of your project containing the following code:

```
DATABASE_URL=...
```

## Upload

This project will upload your assets on your Cloudinary account. The configuration can be found in the `config/plugins.js` file. Using the existing configuration means that you project will also use the cloudinary upload provider when running locally on your machine.
You will need to have the same `CLOUDINARY_NAME`, `CLOUDINARY_KEY` and `CLOUDINARY_SECRET` variables in an `.env` file locally on your machine.

- Create an `.env` file at the root of your project containing the following code:

```
CLOUDINARY_NAME=...
CLOUDINARY_KEY=...
CLOUDINARY_SECRET=...
```

If you want to upload your assets on your computer when running locally on your machine, please comment the content of your `config/plugins.js` file.
You can also create a `config/env/production/plugins.js` file containing the cloudinary provider and delete your `config/plugins.js`. This way you'll have two different upload providers depending on the environment.

---

[Link to deploy](https://strapi-citi.herokuapp.com/)
