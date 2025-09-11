import Link from "next/link";
import { FaRegCalendar, FaDownload } from "react-icons/fa";
import styles from "./artigos.module.css";

export default function Artigos({ items = [] }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.titleText}>Artigos</h2>

      {items.length === 0 && (
        <p className={styles.empty}>Nenhum artigo publicado ainda.</p>
      )}

      {items.map((item) => {
        const hasAttachment =
          Array.isArray(item.attachments) && item.attachments.length > 0;
        const firstAttachment = hasAttachment ? item.attachments[0] : null;

        return (
          <div key={item.slug} className={styles.card}>
            <h3>
              <Link href={`/artigos/${item.slug}`}>{item.title}</Link>
            </h3>

            {item.summary && <p>{item.summary}</p>}

            <span className={styles.date}>
              <FaRegCalendar />{" "}
              Data:{" "}
              {item.date
                ? new Date(item.date).toLocaleDateString("pt-BR")
                : "—"}
            </span>

            <div className={styles.actions}>
              <Link href={`/artigos/${item.slug}`} className={styles.buttonOutline}>
                Ler artigo
              </Link>

              {firstAttachment && (
                <a href={firstAttachment.file} download className={styles.button}>
                  <FaDownload size={16} /> Baixar
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
