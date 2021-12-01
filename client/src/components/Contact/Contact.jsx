import React, { useState } from "react";

import { contactImage } from '../../assets'

import styles from "./Contact.module.css";

function Contact(){
  return (
    <div className={styles.Contact}>
    <div className={styles.allContent}>
      <div className={styles.leftArea}>
        <div className={styles.image}>
          <img className={styles.backImage} src={contactImage} alt="Doe Agora" />
        </div>
        <div className={styles.donate}>
          <p className={styles.textDonate}>Faça parte dessa transformação</p>
          <a className={styles.buttonDonate} href="">Doe Agora ♥</a>
        </div>
        <div className={styles.blueBox}></div>
      </div>

      <div className={styles.verticalLine}></div>

      <div className={styles.rightArea}>
        <h3 className={styles.titleMessage}>Entre em contato conosco</h3>
        <form className={styles.form} action="" method="post">
          <label className={styles.descriptionMessage} for="email">Seu Email</label>
          <input className={styles.email} type="text" id="email" name="email" value="" />
          <label className={styles.descriptionMessage} for="message">Escreva sua mensagem</label>
          <textarea className={styles.message} id="message" name="message" rows="5"></textarea>
          <div className={styles.submitMessageButtonArea}>
            <input className={styles.submitMessageButton} type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </div>

  </div>
  );
}

export default Contact;
