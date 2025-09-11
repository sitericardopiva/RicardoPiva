"use client";

import styles from "./footer.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";
import logoIDE from "../../../public/uploads/IDE_logo.png";

export default function Footer() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <>
    <div className={styles.footer}>
      <div className={styles.container}>
        <h1>Endereço</h1>
        <div className={styles.icons}>
          <FaMapMarkerAlt  style={{ marginRight: "8px" }} size={28} />
          <h2>
            Rua Felipe Neri, 296/298, sala 404, Auxiliadora, Porto Alegre/RS,
            90440-150
          </h2>
        </div>
        <div className={styles.icons}>
          <FaEnvelope style={{ marginRight: "8px" }} size={28} />
          <h2>piva.ricardoadv@gmail.com</h2>
        </div>
        <div className={styles.icons}>
          <FaPhone style={{ marginRight: "8px" }} size={28} />
          <h2>(51) 99999-9999</h2>
        </div>
      </div>

      <div className={styles.container}>
        <h1>Localização</h1>
        <div className={styles.map}>
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Rua Felipe Neri, 296 - Auxiliadora, Porto Alegre, RS`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <div className={styles.developedBy}>
      <a href="https://idejr.com.br/" className={styles.developedByLink} target = "_blank">
        <div className={styles.developedByCover}>
          <Image
            src={logoIDE}
            alt="Logo da IDE Jr"
            className={styles.ideLogo}
          />
        </div>
        <p className = {styles.developedByText}>Desenvolvido por IDE - UFRGS</p>
    </a>
  </div>

  </>
  );
}
