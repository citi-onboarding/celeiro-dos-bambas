import React, { useState, useEffect  } from "react";
import styles from "./navBar.module.css";
import apiAxios from "../../services/api-axios";
import { contactImage, iconHeart } from '../../assets'

function NavBar( {menu, setMenu} ) {
  const [navbar, setNavBar] = useState([]);
  const [Logo, setLogo] = useState([]);

  const loadNavBar = async () => {
    const res = await apiAxios.get('navbar');
    setNavBar(res.data);
    setLogo(res.data.Logo.url);

  };

  useEffect(
    () => {loadNavBar()}, [],
  );

  return (
    <div>

      <header className="fontNavbar" id={styles.Navbar}>
          <nav className={`container ${styles.Menu}`}>
            <div className={styles.LogoNav}>
            <a href= "#Banner" ><img className={styles.LogoImg} src = {Logo} alt="Logo Celeiro"/></a>
            </div>

            <div className={styles.UlButton}>
            <ul className={styles.NavBarList}>
              <li ><a className = {styles.Impac} href= "#Impacto" >Impacto</a></li>
              <li><a className = {styles.Mem} href= "#Membros" >Membros</a></li>
              <li ><a className = {styles.Parc} href= "#Parceiro" >Parceiros</a></li>
              <li ><a className = {styles.Contat} href= "#Contato" >Contato</a></li>
            </ul>
             <a className={styles.buttonDonateNav} href="https://celeirodebambas.portalsolidario.com.br/">Doe Agora <img className={styles.iconHeart} src={iconHeart} alt="emoji de coração" /></a>
             </div>
          </nav>



      </header>
    </div>
  );
}

export default NavBar;
