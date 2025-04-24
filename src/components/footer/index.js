"use client";

import styles from "./footer.module.css";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer({ foto }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return (
    <>
      <div className={styles.footer}>
        <div
          className={styles.container}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Align items to the left
            width: "33%",
            float: "left",
            paddingRight: "10px",
          }}
        >
          <h1 style={{ margin: 0, paddingBottom: "10px" }}>Endereço</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaMapMarkerAlt style={{ marginRight: "8px", fontSize: "1em" }} />
            <h2 style={{ margin: 0, fontSize: "0.9em" }}>
              Rua Felipe Neri, 296/298, sala 404, Auxiliadora, Porto Alegre/RS,
              90440-150
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaEnvelope style={{ marginRight: "8px", fontSize: "1em" }} />
            <h2 style={{ margin: 0, fontSize: "0.9em" }}>
              piva.ricardoadv@gmail.com
            </h2>
          </div>
        </div>
        <div
          className={styles.container}
          style={{ width: "67%", float: "right" }}
        >
          <h1 style={{ margin: 0, textAlign: "left" }}>Localização</h1>
          <div
            className={styles.map}
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
          >
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