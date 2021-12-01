import React from "react"; //obrigatorio
import styles from './Footer.module.css';  //importa a folha de estilos que tem que estar na mesma pasta
import { miniLogo, fundo, logoCeleiro , instagramButton, facebookButton, linkedinButton } from '../../assets/index'

function citiText() {


  return(
    <div className={styles.citiText}>
      <p font-size='16px' >
        Made with
        {' '}
        <strong>&lt; &#x0002F; &gt;</strong>
        {' '}
        and
        {' '}
        <strong>&hearts;</strong>
        {' '}
        by <img width='29px' src={miniLogo} alt="" />
      </p>
    </div>
  );
};

const Footer = () => {
  const adress = 'rua dos bobos';
  const phone = '70707070';

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.information}>
          <img src={logoCeleiro} alt="logo do celeiro de bambas" />
          <h3>ASSOCIAÇÃO CELEIRO DE BAMBAS</h3>
          <p>{adress}</p>
          <p>{phone}</p>
        </div>

        <div className={styles.socialMedia}>
          <p font-size='16px' >Nos siga nas redes sociais</p>
          <a target="_blank" href="instagram.com"><img src={instagramButton} alt="instagram" /></a>
          <a target="_blank" href="linkedin.com"><img src={linkedinButton} alt="linkedin" /></a>
          <a target="_blank" href="facebook.com"><img src={facebookButton} alt="facebook" /></a>
        </div>
      </div>

      {citiText()}

      {/* <img className={styles.fundo} src={fundo} alt="" /> */}
    </div>
  )
}
  export default Footer;
