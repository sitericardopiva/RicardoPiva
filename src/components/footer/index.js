"use client";


import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer({foto}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container} style={{ width: "33%", float: "left", textAlign: "right", paddingRight: "10px" }}>
          <h1 style={{ margin: 0 }}>Endereço</h1>
          <h2>Rua Fulano Ciclano de Beltrano, 1234</h2>
          <h2>emailexemplo@dominio.com.br</h2>
          <h2>5551 987654321</h2>
        </div>
        <div className={styles.container} style={{ width: "67%", float: "right" }}>
          <h1 style={{ margin: 0, textAlign: "left" }}>Localização</h1>
          <div className={styles.map} style={{ paddingLeft: "10%", paddingRight: "10%" }}>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=UFRGS Campus Vale, Porto Alegre, RS`}
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
        