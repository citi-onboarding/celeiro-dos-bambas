import React from "react"; //obrigatorio
import styles from './Banner.module.css';  //importa a folha de estilos que tem que estar na mesma pasta
import { bannerimage, mask} from '../../assets'

function Banner() {


  return (
      <div className={styles.container}>
          <img className={styles.backImageMask} src={mask} alt = "mascara da foto" />
          <img className={styles.backImageBanner} src={bannerimage} alt="Foto das crianças e voluntários do Celeiro de Bambas" />
          <spam className = {styles.text}>
            <p className={styles.title}>Celeiro de Bambas</p>
            <p className={styles.subTitle}>Desenvolvendo as potencialidades do ser humano.</p>
          </spam>
      </div>
  );
}


export default Banner;


