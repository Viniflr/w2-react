import styles from './Header.module.css'
import logoW2 from '../../img/logow2.svg'
import logoEspecialista from '../../img/balao_chat.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.nav_bar}>
                <img className={styles.logoW2} src={logoW2} alt="" />

                <div className={styles.nav_list}>
                    <a href="#">Home</a>
                    <a href="#">Quem somos</a>
                    <a href="#">Serviços</a>
                    <a href="#">Noso Time</a>
                    <a href="#">Contato</a>
                </div>

                <div className={styles.fale_com_especialista}>
                    <button className={styles.header_button}>
                        Fale com Especialista
                        <img className={styles.logoEspecialista}  src={logoEspecialista} alt="" />
                    </button>
                </div>

            </div>
        </header>
    );
}