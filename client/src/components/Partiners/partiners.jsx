// Basic Imports
import React, { useEffect, useState } from "react";
import './slick.css';
import apiAxios from "../../services/api-axios";
import styles from "./partiners.module.css"
// import BoxMember from "./boxMember";

// Carousel Dependences
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Partiners(){

  // Arrows
  function NextArrowCenter(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrowCenter(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }

  // Load Members Data
  const [partiners, setPartiners] = useState([]);

  const loadData = async () => {
    const res = await apiAxios.get('parceiros');
    setPartiners(res.data);

  };

  useEffect(()=>{
    loadData();
  }, []);

  // Montar carrocel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowCenter />,
    prevArrow: <PrevArrowCenter />,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true
  };
  // Estilizar

  // Front
  return(
    <div id="partiners" className={styles.container}>
      <p>Apoiadores</p>
      <div className={styles.carousel}>

        <div className={styles.text}>
          <p className={styles.name}></p>
          <p className={styles.description}></p>
        </div>

        <div className="carousel">
          <Slider className="slider" {...settings}>
            {partiners.map( (partiner) => {
              return (
                <img className="logo" src={partiner.Imagem.url} alt={partiner.Nome} />
                );
              })}
          </Slider>
        </div>

      </div>


    </div>
  );
};


export default Partiners;
