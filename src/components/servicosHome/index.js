"use client";

import styles from "./servicosHome.module.css";
import Image from "next/image";

function Servico(servico) {
  return (
    <>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceName}>
          <h3>{servico.nome}</h3>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.serviceText}>{servico.descricao}</p>
        </div>
      </div>
    </>
  );
}

export default function ServicosHome({ titulo, servicos, logoServicos }) {
  return (
    <>
      <div id="areasAtuacao" className={styles.container}>
        <h2 className={styles.titleText}>{titulo}</h2>
        <div className={styles.serviceFrame}>
            {servicos &&
              servicos.map((servico, i) => <div key={i}>{Servico(servico)}</div>)}
        </div>
        <div className={styles.imagem}>
          <Image
            src={logoServicos}
            fill
            style={{ objectFit: "contain" }}
            alt="Logo Ricardo Piva"
          />
        </div>
      </div>
    </>
  );
}
