import styles from "./blogArtigos.module.css" 

function Artigo(servico) {
  
  return (
    <>
      <div className={styles.articleContainer}>
        <div className={styles.articleName}>
          Batata
        </div>
        <div className={styles.textContainer}>
          
        </div>
      </div>
    </>
  );
}

export default function BlogArtigo({artigos}) {
  return (
    <>
      <div id="areasAtuacao" className={styles.container}>
        <h2 className={styles.titleText}>Artigos</h2>
        <div className={styles.articleFrame}>
            {artigos &&
              artigos.map((artigo, i) => <div key={i}>{Artigo(artigo)}</div>)}
        </div>
      </div>
    </>
  );
}