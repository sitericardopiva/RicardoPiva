import styles from "./entreEmContato.module.css"

export default function EntreEmContato(props){
    return(

        <div className={styles.container}>
            <h1>Entre em Contato</h1>
            <div className={styles.smalltextbox}>
               <p>Nome</p> 
            </div>
            <div className={styles.smalltextbox}>
                <p>Telefone</p>
            </div>
            <div className={styles.smalltextbox}>
                <p>E-mail</p>
            </div>
            <div className={styles.bigtextbox}>
                <p>Mensagem</p>
            </div>
            <div className={styles.sendButton}>
            <p>ENVIAR</p>
            </div>
        </div>
    )
}