import React, { useState, useEffect } from "react"; //obrigatorio
import styles from './Footer.module.css';  //importa a folha de estilos que tem que estar na mesma pasta
import { miniLogo, logoCeleiro , instagramButton, facebookButton, youtubeButton } from '../../assets/index'
//import apiAxios from "../../services/api-axios"


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

//   const [adress, setAdress] = useState();
// const [phone, setPhone] = useState();
// const [instagram, setInstagram] = useState();
// const [youtube, setYoutube] = useState();
// const [facebook, setFacebook] = useState();


// //  const loadData = async () => {
// //    const data = await apiAxios.get('Footer');
// //    setAdress(data.Endereco);
// //  };

//  useEffect(()=>{
//   setAdress('lugar');
//    //loadData();
//  },[]);

  const adress = 'rua dos bobos, n 0'
  const phone = '70707070';
  const instagram = 'instagram.com';
  const youtube = 'youtube.com';
  const facebook = 'fabebook.com';


  return (
    <div className={styles.main}>
      <div className={styles.container}>

        <div className={styles.information}>
          <img src={logoCeleiro} alt="logo do celeiro de bambas" />
          <h3 className='name'>ASSOCIAÇÃO CELEIRO DE BAMBAS</h3>
          <p className='adress' >{adress}</p>
          <p className='phone'>{phone}</p>
        </div>

        <div className={styles.socialMedia}>
          <p font-size='16px' >Nos siga nas redes sociais</p>
          <div className={styles.medias}>
            <a target="_blank" rel="noreferrer" href={instagram}><img src={instagramButton} alt="instagram" /></a>
            <a target="_blank" rel="noreferrer" href={youtube}><img src={youtubeButton} alt="linkedin" /></a>
            <a target="_blank" rel="noreferrer" href={facebook}><img src={facebookButton} alt="facebook" /></a>
          </div>
        </div>
      </div>

      <div className={styles.citiText}>
        {citiText()}
      </div>
    </div>
  )
}
  export default Footer;
