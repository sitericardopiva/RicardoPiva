
import ReactMarkdown from "react-markdown";
import { loadArticleBySlug } from "@/lib/article-loader";
export const runtime = "nodejs";

export default async function ArtigoPage({ params }) {
  const data = await loadArticleBySlug(params.slug);

  if (!data) {
    return (
      <div className="container">
        <h1>Artigo não encontrado</h1>
        <p className="help">Verifique o endereço.</p>
      </div>
    );
  }

  const { meta, content } = data;

  return (
    <article className="container">
      <header style={{ marginBottom: 16 }}>
        <h1>{meta.title}</h1>
        {meta.summary && <p style={{ marginTop: 6 }}>{meta.summary}</p>}
        {meta.date && (
          <p className="help" style={{ marginTop: 8 }}>
            Publicado em {new Date(meta.date).toLocaleDateString("pt-BR")}
          </p>
        )}
        {meta.cover && (
          <div style={{ marginTop: 12 }}>
            <img src={meta.cover} alt="Capa" style={{ maxWidth: "100%", borderRadius: 8 }} />
          </div>
        )}
      </header>

      <div className="prose">
        <ReactMarkdown>{content || ""}</ReactMarkdown>
      </div>

      {meta.attachments.length > 0 && (
        <section style={{ marginTop: 24 }}>
          <h3>Anexos</h3>
          <ul>
            {meta.attachments.map((a, i) => (
              <li key={i}>
                <a href={a.file} download className="btn">
                  Baixar {a.file.split("/").pop()}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
