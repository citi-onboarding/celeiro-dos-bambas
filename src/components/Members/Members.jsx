// Basic Imports
import React, { useEffect, useState } from "react";
import apiAxios from "../../services/api-axios";
import './Members.css';
import { horizontalLine, share } from "../../assets";
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
        style={{ ...props.style, display: "block" }}
      />
    );
  }

  function PrevArrowCenter(props) {
    return (
      <div
        className={props.className}
        onClick={props.onClick}
        id={props.id}
        style={{ ...props.style, display: "block" }}
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
    prevArrow: <PrevArrowCenter />,
    nextArrow: <NextArrowCenter />,
  };

  // Front
  return(
    <div className="God" id="Membros">
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
            <a class="buttom" href="#Contato">Voluntarie-se <img class="shareImage" src={share} alt="emoji de compartilhamento" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Members
