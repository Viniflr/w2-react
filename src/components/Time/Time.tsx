import styles from './Time.module.css'

import pessoa from '../../img/pessoa-time.svg'
import linkedin from '../../img/logo-linkedin.svg'
import fotoGrupo from '../../img/foto-grupo.svg'

export function Time() {
    return (
        <section id='time' className={styles.container_geral}>
            <div className={styles.titulo}> 
                <h1>Nosso <span>Time</span></h1>
            </div>
            
            <div className={styles.pessoa_geral}>
                <div className={styles.pessoa}>
                    <img className={styles.foto} src={pessoa} alt="Foto de *Nome*" />
                    <div className={styles.info}>
                        <h1>Nome da Pessoa</h1>
                        <p>Cargo</p>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <img src={linkedin} alt="" />
                        </a>
                    </div>
                </div>

                <div className={styles.pessoa}>
                    <img className={styles.foto} src={pessoa} alt="Foto de *Nome*" />
                    <div className={styles.info}>
                        <h1>Nome da Pessoa</h1>
                        <p>Cargo</p>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <img src={linkedin} alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <img className={styles.foto_grupo} src={fotoGrupo} alt="" />
        </section>
    )
}