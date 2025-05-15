// import styles from './Comentarios.module.css';
import styles from './Comentarios2.module.css'

import aspas from '../../img/aspas.svg'

// import arrow from '../../img/arrow.svg'

export function Comentarios2() {
    return (
        <div className={styles.container}>
            <div className={styles.carrossel}>
                <div className={styles.item}>
                    <div className={styles.imagem}>
                        <img src={aspas} alt="Aspas decorativas" />
                    </div>

                    <div className={styles.info}>
                        <h1>Título do Comentário</h1>
                        <p>Texto do comentário</p>
                    </div>

                    <div className={styles.pessoa}>
                        <h1>Nome da Pessoa</h1>
                        <p>Nome da Empresa</p>
                    </div>
                </div>
            </div>

            {/* <div className="buttons">
                        <button><img src={arrow} alt="Left" /></button>
                        <button><img src={arrow} alt="Right" /></button>
                    </div> */}
        </div>
        
    )
}
