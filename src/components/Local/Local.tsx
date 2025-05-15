import ponteiro from '../../img/ponteiro-local.svg'
import pessoaRodando from '../../img/pessoa-rodando.svg'
import empresa from '../../img/empresa.svg'

import styles from './Local.module.css'

export function Local() {
    return (
        <div className={styles.geral}>
            <h1>Onde estamos <span>localizados</span></h1>
            <div className={styles.endereco}>
                <div className={styles.info}>
                    <img src={ponteiro} alt="" />
                    <p>Ilha do Leite, Recife-PE - Brasil</p>
                </div>
                <div className={styles.info}>
                    <img src={pessoaRodando} alt="" />
                    <p>Av. Frei Matias Teves, 285</p>
                </div>
                <div className={styles.info}>
                    <img src={empresa} alt="" />
                    <p>Empresarial Graham Bell, 2º andar</p>
                </div>
            </div>
        </div>
    )
}