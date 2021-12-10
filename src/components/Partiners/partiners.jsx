// Basic Imports
import React, { useEffect, useState } from "react";
import './slick.css';
import apiAxios from "../../services/api-axios";
import styles from "./partiners.module.css"
import {vector11} from "../../assets/index"
import Card from "./Card/Card";

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
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrowCenter(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  // Load Members Data
  const [partiners, setPartiners] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);

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
    customPaging: dots => (
      <div
        style={{
          backgroundColor: "#C4C4C4",
          borderRadius: "5.5px",
          width: "19px",
          height: "11px"
        }}
      >
      </div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowCenter />,
    prevArrow: <PrevArrowCenter />,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    afterChange: (current) => {
      setName(partiners[current].Nome);
      setDescription(partiners[current].Papel);
    }

  };

  return(
  <div className={styles.main} id="Parceiro">

    <div id="partiners" className={styles.container}>
      <p className={styles.title}>Apoiadores</p>
      <img src={vector11}
          alt=""
          width="323px"
          height="19px" />
      <div className={styles.carousel}>

        <div className={styles.text}>
          <p className={styles.name}>{name}</p>
          <p className={styles.description}>{description}</p>
        </div>

        <div className="carousel">
          <Slider {...settings}>
            {partiners.map( (partiner) => {
              return (
                <Card avatar={partiner.Imagem.url}></Card>
                );
              })}
          </Slider>
        </div>

      </div>


    </div>
  </div>
  );
};


export default Partiners;
