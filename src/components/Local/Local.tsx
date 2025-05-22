import ponteiro from '../../img/ponteiro-local.svg'
import pessoaRodando from '../../img/pessoa-rodando.svg'
import empresa from '../../img/empresa.svg'

import styles from './Local.module.css'

export function Local() {
    return (
        <div className={styles.geral}>
            <div className={styles.endereco}>
                <h1>Onde estamos <span>localizados</span></h1>

                <div className={styles.info}>
                    
                    <div className={styles.icons}>
                        <img src={ponteiro} alt="" />
                        <img src={pessoaRodando} alt="" />
                        <img src={empresa} alt="" />
                    </div>

                    <div className={styles.texto}>
                        <p>Ilha do Leite, Recife-PE - Brasil</p>
                        <p>Av. Frei Matias Teves, 285</p>
                        <p>Empresarial Graham Bell, 2º andar</p>
                    </div>
                </div>
            </div>

            <div className={styles.mapa}>
                <iframe src="https://www.google.com/maps/embed?pb=!4v1747949659426!6m8!1m7!1sow5InpyQjlF1cDFYFg0RiA!2m2!1d-8.063799695033566!2d-34.8961523618179!3f228.70860108652641!4f2.2049968213049596!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>              
            </div>

        </div>
    )
}