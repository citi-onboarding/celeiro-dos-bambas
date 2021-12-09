// Basic Imports
import React, { useEffect, useState } from "react";
import apiAxios from "../../services/api-axios";
import './Members.css';
import { horizontalLine } from "../../assets";
import BoxMember from "./boxMember";

// Carousel Dependences
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Members(){

  // Load Members Data
  const [members, setMembers] = useState([]);

  const loadData = async () => {
    const res = await apiAxios.get('membros');
    setMembers(res.data);
  };

  useEffect(()=>{
    loadData();
  }, []);

  // Arrows
  function NextArrowCenter(props) {
    return (
      <div
        className={props.className}
        onClick={props.onClick}
        id={props.id}
      />
    );
  }

  function PrevArrowCenter(props) {
    return (
      <div
        className={props.className}
        onClick={props.onClick}
        id={props.id}
      />
    );
  }

  // Montar carrocel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrowCenter className="Prev-CenterCarousel" />,
    prevArrow: <PrevArrowCenter />,
  };

  // Front
  return(
    <div id="members">
      <div class='topArea'>
        <h2 class='title'>Quem faz parte do celeiro</h2>
        <img class='horizontalLine' src={horizontalLine} alt="Sublinhado" />
      </div>

      <div className="carousel">
        <Slider className="slider" {...settings}>
          {members.map( (member) => {
            return (
              <BoxMember nome={member.Nome}
                         cargo={member.Cargo}
                         avatar={member.Avatar.url}/>
            );
          })}
        </Slider>
      </div>

      <div class="bottomArea">
        <p class="text">Venha fazer parte!</p>
        <div className="buttomArea">
          <button class="buttom">Voluntarie-se</button>
        </div>
      </div>
    </div>
  );
};


export default Members
