"use client";

import styles from "./footer.module.css";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h1>Endereço</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaMapMarkerAlt style={{ marginRight: "8px" }} />
          <h2>
            Rua Felipe Neri, 296/298, sala 404, Auxiliadora, Porto Alegre/RS,
            90440-150
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaEnvelope style={{ marginRight: "8px" }} />
          <h2>piva.ricardoadv@gmail.com</h2>
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
  );
}
