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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.366943248119!2d-34.89901422424619!3d-8.06400268058175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab190050ad3a77%3A0x38b40893d93d72ed!2sEmpresarial%20Graham%20Bell!5e0!3m2!1sen!2sbr!4v1747376989637!5m2!1sen!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}