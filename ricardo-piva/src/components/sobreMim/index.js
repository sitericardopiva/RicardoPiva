'use client';

import styles from "./sobreMim.module.css";
import Image from "next/image";
export default function SobreMim({foto}){
    return(
        <>
        <div className={styles.container}> 
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
                            Lorem Ipsum is simply dummy text of the  <br />   
                            printing and typesetting industry. Lorem <br />
                            Ipsum has been the industry's standard <br />
                            dummy text . <br />
                            <br />
                            Ever since the 1500s, when an <br />
                            unknown printer took a galley of type and <br />
                            scrambled it to make a type specimen book. <br />
                            It has survived not only five <br />
                            centuries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}