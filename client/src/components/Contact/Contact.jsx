import React, { useState, useEffect } from "react";
import { contactImage, iconHeart } from '../../assets'

import styles from "./Contact.module.css";
import apiAxios from '../../services/api-axios';


function Contact(){

  const [emailCeleiro, setEmailCeleiro] = useState('');
  const [emailClient, setEmailClient] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async () => {

  }

  const loadEmailCeleiro = async () => {
    const res = await apiAxios.get("contact")
    setEmailCeleiro(res.data.Email)
  }

  useEffect(() => {
    loadEmailCeleiro();
  }, []);

  // Front
  return (
    <div className={styles.Contact}>
    <div className={styles.allContent}>
      <div className={styles.leftArea}>
        <div className={styles.image}>
          <img className={styles.backImage} src={contactImage} alt="Doe Agora" />
        </div>
        <div className={styles.donate}>
          <p className={styles.textDonate}>Faça parte dessa transformação</p>
          <a className={styles.buttonDonate} href="">Doe Agora <img className={styles.iconHeart} src={iconHeart} alt="emoji de coração" /></a>
        </div>
        <div className={styles.blueBox}></div>
      </div>

      <div className={styles.verticalLine}></div>

      {/* Forms */}
      <div className={styles.rightArea}>
        <h3 className={styles.titleMessage}>Entre em contato conosco</h3>
        <form className={styles.form} onSubmit={sendEmail} >
          <label className={styles.descriptionMessage} for="email">Seu Email</label>
          <input className={styles.email} type="text" id="email" name="email" value={emailClient} required
           onChange={(e) => { setEmailClient(e.target.value); }} />
          <label className={styles.descriptionMessage} for="message">Escreva sua mensagem</label>
          <textarea className={styles.message} id="message" name="message" rows="6" value={message} required
           onChange={(e) => { setMessage(e.target.value); }} ></textarea>
          <div className={styles.submitMessageButtonArea}>
            <button className={styles.submitMessageButton} type="submit" >Enviar</button>
          </div>
        </form>
      </div>
    </div>

  </div>
  );
}

export default Contact;
