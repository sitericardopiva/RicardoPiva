import ServicosHome from "@/components/servicosHome";
import Inicio from "@/components/inicio";
import { handleJSONfiles } from "@/utils/jsonHandler";
import { handleJSONfile } from "@/utils/jsonHandler";
import React from "react";
import SobreMim from "@/components/sobreMim";
import EntreEmContato from "@/components/entreEmContato";


export default function Home() {
  const home = handleJSONfile(`./content/paginas/home.json`);
  const servicos = handleJSONfiles("./content/servicos");

  const tituloHome = home.inicioHome.titulo;
  const imagemHome = home.inicioHome.imagem;
  const imagemSobre = home.sobre.imagem;
  const logoServicos = home.servicos.logo;

  return (
    <>
      <Inicio titulo={tituloHome} imagem={imagemHome} />
      <SobreMim foto={imagemSobre} />
      <ServicosHome
        titulo={"ÁREAS DE ATUAÇÃO"}
        servicos={servicos}
        logoServicos={logoServicos}
      /> 
      <EntreEmContato/>
    </>
  );
}

// export async function getStaticProps() {

//   const home = handleJSONfile(`./content/paginas/home.json`);
//   const nav = handleJSONfile(`./content/navFooter/navbar.json`);
//   const foo = handleJSONfile(`./content/navFooter/footer.json`);
//   const posts = handleJSONfiles('./content/posts');
//   const servicos = handleJSONfiles('./content/servicos');
//   const contato = handleJSONfile(`./content/contato/contato.json`);

//   return {
//     props: { home, posts, nav, foo, servicos, contato },
//   };
// }
