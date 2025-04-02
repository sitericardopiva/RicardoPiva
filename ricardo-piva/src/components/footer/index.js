"use client";


import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer({foto}) {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <h1>Endereço</h1>
          <h2>Rua Fulano Ciclano de Beltrano, 1234</h2>
          <h2>emailexemplo@dominio.com.br</h2>
          <h2>5551 987654321</h2>
        </div>
        <div className={styles.container}>
          <h1>Localização</h1>
          <div className={styles.map}>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Rua+Fulano+Ciclano+de+Beltrano,1234`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
        