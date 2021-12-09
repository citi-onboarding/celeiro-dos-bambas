import React, { useState, useEffect } from "react";
import styles from "./partiners.module.css";
import apiAxios from "../../services/api-axios";


const Partiners = () => {

  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [logo, setLogo] = useState([]);

  const loadData = async () => {
    const {data} = await apiAxios.get('parceiros');
    console.log(data)
    setName(data[0].Nome);
    setDescription(data[0].Papel);
    setLogo(data[0].Imagem.url);
  };

  useEffect(()=>{
    loadData();
  });

  return (
    <div className={styles.container}>
      <p>Apoiadores</p>

      <div className={styles.carousel}>

        <div className={styles.text}>
          <p className={styles.name}>{name}</p>
          <p className={styles.description}>{description}</p>
        </div>

        <div>
          <img className={styles.logo} src={logo} alt="logo do parceiro" />
        </div>

      </div>

    </div>
  )
};

export default Partiners;
