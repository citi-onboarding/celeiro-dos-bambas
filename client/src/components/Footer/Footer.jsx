import React from "react"; //obrigatorio
import styles from './Footer.module.css';  //importa a folha de estilos que tem que estar na mesma pasta
import { Logo } from '../../assets'

const Footer = () => {
  return (
    <div className={styles.minha}>
      <p>
        Made with
        {' '}
        <strong>&lt; &#x0002F; &gt;</strong>
        {' '}
        and
        {' '}
        <strong>&hearts;</strong>
        {' '}
        by <img src={Logo} alt="" />
      </p>
    </div>
  )
}

export default Footer;
