import styles from './Banner.module.css'
import logoEspecialista from '../../img/balao_chat.svg'

export function Banner() {
    return (
        <div className={styles.banner}>

            <h1> Soluções financeiras que <br />
                inpulsionam o crescimento <br />
                do <span>seu negócio</span> </h1>

            <div className={styles.info_banner}>
                <button className={styles.banner_button}>
                    Fale com Especialista
                    <img className={styles.logoEspecialista}  src={logoEspecialista} alt="" />
                </button>
            </div>

        </div>
    )
}