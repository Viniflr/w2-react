import styles from './Footer.module.css';

import logo from '../../img/logow2.svg'
import linkedin from '../../img/linkedin-branco.svg'
import instagram from '../../img/insta.svg'
import ponteiro from '../../img/local-branco.svg'
import telefone from '../../img/telefone-branco.svg'
import email from '../../img/email-branco.svg'

export function Footer() {
    return (
        <footer>
            <div className={styles.footer}>

                <div className={styles.principal}>
                    <div className={styles.logo_texto}>
                        <img src={logo} alt="Logo W2 Finance" />
                        <p>Soluções financeiras que impulsionam o crescimento do seu negócio</p>
                    </div>

                    <div className={styles.link}>
                        <div className={styles.visao_geral}>
                            <h1>Visão Geral</h1>

                            <a href="#home">Home</a>
                            <a href="#sobre">Quem somos</a>
                            <a href="#servicos">Serviços</a>
                            <a href="#time">Nosso Time</a>
                        </div>

                        <div className={styles.servicos}>
                            <h1>Serviços</h1>

                            <a href="#">Controladoria</a>
                            <a href="#">Consultoria</a>
                            <a href="#">Tributário</a>
                            <a href="#">Financeiro</a>
                        </div>

                        <div className={styles.endereco_contato}>
                            <div className={styles.endereco}>
                                <h1>Endereço</h1>

                                <div className={styles.info}>
                                    <img src={ponteiro} alt="" />
                                    <p>Av. Frei Matias Teves, 285</p>
                                </div>
                            </div>

                            <div className={styles.contato}>
                                <h1>Contato</h1>

                                <div className={styles.info}>
                                    <div className={styles.icons}>
                                        <img src={telefone} alt="" />
                                        <img src={email} alt="" />
                                    </div>
                                    <div className={styles.texto}>
                                        <p>(81) 90000-0000</p>
                                        <p>email@gmail.com</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.final}>
                    <div className={styles.sociais}>
                        <a href=""><img src={instagram} alt="" /></a>
                        <a href=""><img src={linkedin} alt="" /></a>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.texto_final}>
                        <p>© 2025 W2 Finance. Todos os direitos reservados.</p>
                        <p>Desenvolvido por: </p>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}