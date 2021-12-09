import React, { useEffect, useState } from "react";
import styles from "./Impact.module.css";
import apiAxios from '../../services/api-axios';
import {crianças, crianças2, cobrinha, ornamento1, ornamento2, elipse1, elipse2,starTop,starTop2,starBottom,starBottom2,vector1,vector2,vector3,vector4} from "../../assets";


function Impact(){
  const [impact, setImpact] = useState([]);
  const [TitleRight, setRightTitle] = useState([]);
  const [TitleLeft, setLeftTitle] = useState([]);
  const [DescriptionRight, setRightDescription] = useState([]);
  const [DescriptionLeft, setLeftDescription] = useState([]);
  const [Number1, setBlueNumber] = useState([]);
  const [DescriptionNumber1, setBlueText] = useState([]);
  const [Number2, setOrangeNumber] = useState([]);
  const [DescriptionNumber2, setOrangeText] = useState([]);
  const [FotoGrande, setBigPhoto] = useState([]);
  const [FotoPequena, setSmallPhoto] = useState([]);


  const loadImpact = async () => {
    const res = await apiAxios.get('change');
    setImpact(res.data);
    setRightTitle(res.data.TitleRight);
    setRightDescription(res.data.DescriptionRight);
    setLeftTitle(res.data.TitleLeft);
    setLeftDescription(res.data.DescriptionLeft);
    setBlueNumber(res.data.Number1);
    setBlueText(res.data.DescriptionNumber1);
    setOrangeNumber(res.data.Number2);
    setOrangeText(res.data.DescriptionNumber2);
    setBigPhoto(res.data.FotoGrande[0].url);
    setSmallPhoto(res.data.FotoPequena.url);
  };


  useEffect(
    () => {loadImpact()}, [],
  );



  return(
  <div id="Impacto" className = {styles.impact}>
    <div className= {styles.above_global}>
      <div className= {styles.global_impact}>
       <div className= {styles.infogra}>
          <div className= {styles.commun}>
                <img className= {styles.vector1} src = {vector1} alt="Azul decorativo"></img>
                <img className= {styles.vector2} src = {vector2} alt="Azul decorativo"></img>
                <img className= {styles.vector3} src = {vector3} alt="Azul decorativo"></img>
                <img className= {styles.vector4} src = {vector4} alt="Azul decorativo"></img>
                <img className= {styles.starTop} src = {starTop} alt="Estrela decorativa"></img>
                <img className= {styles.starTop2} src = {starTop2} alt="Estrela decorativa"></img>
                <h1 className= {styles.title_commun}> {Number1} </h1>
                 <p className= {styles.text_commun}> {DescriptionNumber1}</p>
          </div>
          <div className= {styles.family}>
                <img className= {styles.starBottom} src = {starBottom} alt= "Estrela decorativa"></img>
               <img className= {styles.starBottom2} src = {starBottom2} alt="Estrela decorativa"></img><h1 className= {styles.title_family}> {Number2}</h1> <p className= {styles.text_commun}> {DescriptionNumber2}</p>
         </div>
       </div>

       <div className= {styles.bloco_direito} >
        <h1 className = {styles.title_direito}>{TitleRight}</h1>
        <p className = {styles.description_direito}>{DescriptionRight}
        </p>

    </div>

    <div className= {styles.bloco_esquerdo} >
       <h1 className = {styles.title_esquerdo}>Como <span>impactamos</span> as comunidades</h1>
       <p className = {styles.description_esquerdo}>
         {DescriptionLeft}
       </p>

    </div>

       <div className= {styles.photos}>
         <img className= {styles.cobrinha} src = {cobrinha} alt = "Enfeite cobrinha"></img>
         <img className= {styles.ornamento1} src = {ornamento1} alt = "Enfeite"></img>
         <img className= {styles.ornamento2} src = {ornamento2} alt = "Enfeite"></img>
         <img className= {styles.elipse1} src = {elipse1} alt = "Elipse"></img>
         <img className= {styles.elipse2} src = {elipse2} alt = "Elipse 2"></img>
         <div className= {styles.criançasDiv}>
            <img className= {styles.big_kid} src = {FotoGrande} alt = "Foto grande de crianças"></img>
         </div>
         <div className= {styles.crianças2Div}>
              <img className= {styles.small_kid} src = {FotoPequena} alt="Foto pequena de crianças"></img>
        </div>
       </div>

     </div>
    </div>
   </div>


  );
};

export default Impact;
