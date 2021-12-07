import React from "react"; //obrigatorio
import styles from './Banner.module.css';  //importa a folha de estilos que tem que estar na mesma pasta
import { bannerimage, mask} from '../../assets'


function Banner() {

  return (
      <div className={styles.container}>
          <img className={styles.backImageMask} src={mask} alt = "mascara" />
          <img className={styles.backImageBanner} src={bannerimage} alt="Foto das crianças" />
          <spam className = {styles.text}>
            <p className={styles.title}>Celeiro de Bambas</p>
            <p className={styles.subTitle}>Desenvolvendo as potencialidades do ser humano.</p>
          </spam>
      </div>
  );

}


export default Banner;


