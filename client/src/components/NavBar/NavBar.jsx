import React, { useState, useEffect  } from "react";
import styles from "./navBar.module.css";
import apiAxios from "../../services/api-axios";

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
      <input type="checkbox" className={styles.checkMode} id="check"/>
      <header className="fontNavbar" id={styles.Navbar}>
          <nav className={`container ${styles.Menu}`}>
            <div className={styles.LogoNav}>
              <img className={styles.LogoImg} src = {Logo} alt="Logo Celeiro"/>
            </div>

            <ul className={styles.NavBarList}>
              <li><a className = {styles.Select}>A associação</a></li>
              <li >Impacto</li>
              <li >Parceiros</li>
              <li >Contato</li>
              <li><a className={styles.buttonDonate} href="">Doe Agora ♥</a></li>
            </ul>


          </nav>



      </header>
    </div>
  );
}

export default NavBar;
