"use client";

import { FaCalendar, FaDownload, FaRegCalendar } from "react-icons/fa";
import styles from "./artigos.module.css";
import { useEffect, useState } from "react";

export default function Artigos() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const arr = [];
    fetch('/api/articles')
      .then(res => res.json())
      .then(json => {
        for (let i = 0; i < json.items.length; i++) {
          arr.push({
            title: json.items[i].fields.titulo,
            description: json.items[i].fields.descricao,
            date: json.items[i].fields.data.replaceAll("-", "/"),
            url: json.includes.Asset[i].fields.file.url,
          })
        }
        setArticles(arr);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.titleText}>Artigos</h2>
      <div className={styles.frame}>
        {articles.map((article, i) => {
          return (
            <div key={i} className={styles.card}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <span><FaRegCalendar />Data: {article.date}</span>
              <a href={article.url} target="_blank" download className={styles.button}><FaDownload size={16} /> Baixar</a>
            </div>
          )
        })}
      </div>
    </div>
  );
}