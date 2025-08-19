'use client';

import styles from "./sobreMim.module.css";
import Image from "next/image";
export default function SobreMim({foto}){
    return(
        <>
        <div id="sobreMim" className ={styles.container}> 
            <div className={styles.wrapper}>
                <div className={styles.border}>
                    <div className={styles.imagem}>
                        <Image
                            src={foto}
                            fill
                            style={{ objectFit: "cover" }}
                            alt="Foto Ricardo"
                        />
                    </div>
                    <div className={styles.textcontent}>
                        <h1>Ricardo Piva</h1>
                        <p>
                            Bacharel em Direito pela Universidade Federal de Pelotas (2007).
                        </p>
                        <br/>
                        <p>
                            Profissional com ampla atuação em diversas áreas do Direito Cível, com destaque
                            para contenciosos envolvendo instituições financeiras, empresas de análises e
                            informações de crédito.
 
                        </p>
                        <br/>
                        <p>
                            Também tem marcada atuação na área jurídica relacionada ao ramo da construção
                            civil, prestando consultoria ativa nos diferentes segmentos, além de atuação na
                            resolução de conflitos relacionados a incorporadoras, construtoras, investidores,
                            mutuários e pessoas físicas em geral.


                        </p>
                        <br/>
                        <p>
                            Tem reconhecida e efetiva atuação junto aos tribunais do Rio Grande do Sul (RS),
                            Santa Catarina (SC) e Paraná (PR), bem como nos tribunais superiores,
                            especialmente Superior Tribunal de Justiça (STJ).

                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



