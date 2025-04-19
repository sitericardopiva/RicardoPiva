"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useRef, useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import classnames from "classnames";

export default function Navbar({ contato, nav }) {
  const navRef = useRef();
  const logoRef = useRef();
  const [solid, setSolid] = useState(false); // controla se a navbar é sólida ou transparente

  useEffect(() => {
  const hero = document.getElementById("inicio"); // seção do topo (Inicio.jsx)
  if (!hero) {
    setSolid(true);
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => setSolid(!entry.isIntersecting),
    { threshold: 0 }
  );

  observer.observe(hero);
  return () => observer.disconnect();
  }, []);


  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsiveNav");
    logoRef.current.classList.toggle("responsiveLogo");
  };

  return (
    <>
      <header className={`${styles.cabecalho} ${solid ? styles.solid : styles.transparent}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src={nav.logo}
            fill
            style={{ objectFit: "contain" }}
            alt="Logo"
          />
        </Link>
        <nav className={styles.navbar} ref={navRef}>
          <button
            className={classnames(styles.navBtn, styles.navLogoBtn)}
            ref={logoRef}
          >
            <Link href="/" className={styles.droplogo}>
              <Image src={nav.logo} width={95} height={95} alt="Logo" />
            </Link>
          </button>

          <h3 className={styles.anchorStuff} onClick={toggleNavbar}>
            <a href="#inicio">INÍCIO</a>
          </h3>
          <h3 className={styles.anchorStuff} onClick={toggleNavbar}>
            <a href="#sobreMim">SOBRE MIM</a>
          </h3>
          <h3 className={styles.anchorStuff} onClick={toggleNavbar}>
            <a href="#areasAtuacao">ÁREAS DE ATUAÇÃO</a>
          </h3>
          <h3 className={styles.anchorStuff} onClick={toggleNavbar}>
            <a href="#contato">CONTATO</a>
          </h3>


          <button
            className={classnames(styles.navBtn, styles.navCloseBtn)}
            onClick={toggleNavbar}
          >
            <FaTimes />
          </button>
          <div className={styles.links}>
            <button className={styles.navBtn} onClick={toggleNavbar}>
              <a href={contato.linkedin} target="_blank">
                <FaLinkedin className={styles.socialNetworks} />
              </a>
            </button>
            <button className={styles.navBtn} onClick={toggleNavbar}>
              <a href={`mailto:${contato.email}`} target="_blank">
                <FaEnvelope className={styles.socialNetworks} />
              </a>
            </button>
            <button className={styles.navBtn} onClick={toggleNavbar}>
              <a href={contato.instagram} target="_blank">
                <FaInstagram className={styles.socialNetworks} />
              </a>
            </button>
          </div>
        </nav>
        <button className={styles.navBtn} onClick={toggleNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}
