// Basic Imports
import React, { useEffect, useState } from "react";
import './Members.css';
import apiAxios from "../../services/api-axios";

// Carousel Dependences
import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function Members(){

  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const loadData = async () => {
    const {data} = await apiAxios.get('membros');
    console.log(data)
    setAvatar(data[0].Avatar.url);
    setName(data[0].Nome);
    setRole(data[0].Cargo);
  };

  useEffect(()=>{
    loadData();
  });

  // Montar carrocel

  // Estilizar

  return(
    <div>
      <h1>Olá</h1>
      <p>{name}</p>
      <img src={avatar} alt="" />
      <p>{role}</p>
    </div>
  );
};


export default Members
