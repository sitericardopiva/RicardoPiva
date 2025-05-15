"use client";

import Image from "next/image";
import styles from "./inicio.module.css";
import logoText from "../../../public/uploads/rp-text.png"
import imagem from "../../../public/uploads/rp-escritorio.jpg"
export default function Inicio() {
  return (
    <>
      <div id="inicio" className={styles.container}>
        <Image
          src={imagem}
          fill
          style={{ objectFit: "cover" }}
          alt="Imagem Inicio"
          className={styles.initImg}
        />
        <Image className={styles.title} src={logoText} id="hero-logo" />
      </div>
    </>
  );
}
