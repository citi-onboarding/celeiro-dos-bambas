import React, { useState, useEffect } from "react";
import { contactImage, iconHeart } from '../../assets'

import styles from "./Contact.module.css";
import apiAxios from '../../services/api-axios';


function Contact(){

  const [emailClient, setEmailClient] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async (event) => {
    try {
      event.preventDefault()
      await apiAxios.post("emails", {emailClient, message})
      alert(`E-mail enviado com sucesso!`)
      setEmailClient('')
      setMessage('')
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }

  // Front
  return (
    <div id="Contato" className={styles.Contact}>
    <div className={styles.allContent}>
      <div className={styles.leftArea}>
        <div className={styles.image}>
          <img className={styles.backImage} src={contactImage} alt="Doe Agora" />
        </div>
        <div className={styles.donate}>
          <h2 className={styles.textDonate}>Faça parte dessa transformação</h2>
          <a className={styles.buttonDonate} href="https://celeirodebambas.portalsolidario.com.br/">Doe Agora <img className={styles.iconHeart} src={iconHeart} alt="emoji de coração" /></a>
        </div>
        <div className={styles.blueBox}></div>
      </div>

      <div className={styles.verticalLine}></div>

      {/* Forms */}
      <div className={styles.rightArea}>
        <h2 className={styles.titleMessage}>Entre em contato conosco</h2>
        <form className={styles.form} onSubmit={sendEmail} >
          <label className={styles.descriptionMessage} for="email">Seu Email</label>
          <input className={styles.email} type="text" id="email" name="email" value={emailClient} required
           onChange={(e) => { setEmailClient(e.target.value); }} />
          <label className={styles.descriptionMessage} for="message">Escreva sua mensagem</label>
          <textarea className={styles.message} id="message" name="message" rows="7" value={message} required
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
