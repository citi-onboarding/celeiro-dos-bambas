// Basic Imports
import React, { useEffect, useState } from "react";
import './Members.css';
import apiAxios from "../../services/api-axios";
import BoxMember from "./boxMember";

// Carousel Dependences
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Members(){

  // Arrows
  function NextArrowCenter(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrowCenter(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  // Load Members Data
  const [members, setMembers] = useState('');

  const loadData = async () => {
    const {data} = await apiAxios.get('membros');
    setMembers(data.data);
  };

  useEffect(()=>{
    loadData();
  });

  // Montar carrocel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <NextArrowCenter />,
    prevArrow: <PrevArrowCenter />,
  };
  // Estilizar

  return(
    <div id="members">
      <div class='topArea'>
        <h2 class='title'>Quem faz parte do celeiro</h2>
        <img class='line' src="#" alt="#" />
      </div>

      <div className="carousel">
        <Slider className="slider" {...settings}>
          {members.map((member) => {
            return (
              <BoxMember title="{member.Avatar}" text="{member.Nome}" link="{member.Cargo}"/>
            );
          })}
        </Slider>
      </div>

      <div className="bottomArea">
        <p className="text">Lorem ipsum</p>
        <button>Voluntarie-se</button>
      </div>
    </div>
  );
};


export default Members
