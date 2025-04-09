"use client";

import Image from "next/image";
import styles from "./inicio.module.css";
import logoText from "../../../public/uploads/rp-logo-text.png"

export default function Inicio(props) {
  return (
    <>
      <div className={styles.container}>
        <Image
          src={props.imagem}
          fill
          style={{ objectFit: "cover" }}
          alt="Imagem Inicio"
          className={styles.initImg}
        />
        <Image className={styles.title} src={logoText} />
      </div>
    </>
  );
}
