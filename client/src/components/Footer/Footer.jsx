import React, { useState, useEffect } from "react"; //obrigatorio
import styles from './Footer.module.css';  //importa a folha de estilos que tem que estar na mesma pasta
import { miniLogo, logoCeleiro , instagramButton, facebookButton, youtubeButton } from '../../assets/index';
import apiAxios from "../../services/api-axios";



function citiText() {
  return(
    <div className={styles.citiText}>
      <p >
        Made with
        {' '}
        <strong>&lt; &#x0002F; &gt;</strong>
        {' '}
        and
        {' '}
        <strong>&hearts;</strong>
        {' '}
        by
        {' '}
        <img src={miniLogo} alt="logo-citi" />
      </p>
    </div>
  );
};

const Footer = () => {

const [adress, setAdress] = useState();
const [phone, setPhone] = useState();
const [instagram, setInstagram] = useState();
const [youtube, setYoutube] = useState();
const [facebook, setFacebook] = useState();

function changePhone(phone) {
  const prt1 = phone.slice(0,2);
  const prt2 = phone.slice(2,7);
  const prt3 = phone.slice(7,11);
  return ('('+prt1+') '+prt2+'-'+prt3)
}

 const loadData = async () => {
   const {data} = await apiAxios.get('footer');
   setAdress(data.Endereco);
   setPhone(changePhone(data.Telefone));
   setInstagram(data.Instagram);
   setYoutube(data.YouTube);
   setFacebook(data.Facebook);
 };

 useEffect(()=>{
   loadData();
 });

  return (
    <div className={styles.main}>
      <div className={styles.container}>

        <div className={styles.information}>
          <img src={logoCeleiro} alt="logo do celeiro de bambas" />
          <div>
            <h3 className='name'>ASSOCIAÇÃO CELEIRO DE BAMBAS</h3>
            <p className='adress' >{adress}</p>
            <p className='phone'>{phone}</p>
          </div>
        </div>

        <div className={styles.socialMedia}>
          <p className={styles.text} font-size='16px' >Nos siga nas redes sociais</p>
          <div className={styles.medias}>
            <a target="_blank" rel="noreferrer" href={instagram}><img src={instagramButton} alt="instagram" /></a>
            <a target="_blank" rel="noreferrer" href={youtube}><img src={youtubeButton} alt="linkedin" /></a>
            <a target="_blank" rel="noreferrer" href={facebook}><img src={facebookButton} alt="facebook" /></a>
          </div>
        </div>
      </div>

      <div className={styles.citiText}>
        <div></div>
        {citiText()}
      </div>
    </div>
  )
}

export default Footer;
