'use client';

import styles from "./sobreMim.module.css";
import Image from "next/image";
export default function SobreMim(props){
    return(
        <>
        <div className={styles.container}> 
            <div className={styles.imagem}> 
                <Image
                    src="/ricardo-piva/src/components/sobreMim/img-ricardo.png"
                    fill
                    style={{ objectFit: "cover" }}
                    alt="Ricardo Piva"
                />   
            </div> 

            <div className={styles.border}>
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
        </>
    )
}