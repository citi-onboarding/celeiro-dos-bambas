import React, { useState, useEffect }  from "react"; //obrigatorio
import styles from './Banner.module.css';  //importa a folha de estilos que tem que estar na mesma pasta
import {mask} from '../../assets'
import apiAxios from '../../services/api-axios';



function Banner() {

  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [image, setImage] = useState('');

  const loadData = async () => {
    const {data} = await apiAxios.get('banner');
    console.log(data);
    setTitle(data.Titulo);
    setSubTitle(data.Descricao)
    setImage(data.Imagem.url);
  };

  useEffect(()=>{
    loadData();
  },[]);

  return (
      <div id="Banner" className={styles.container}>
          <img className={styles.backImageMask} src={mask} alt = "mascara da foto" />
          <img className={styles.backImageBanner} src={image} alt="Foto das crianças e voluntários do Celeiro de Bambas" />
          <spam className = {styles.text}>
            <p className={styles.title}>{title}</p>
            <p className={styles.subTitle}>{subTitle}</p>
          </spam>
      </div>
  );
}


export default Banner;


