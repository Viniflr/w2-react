import styles from './Sobre.module.css';
import fotocomBolinhas from '../../img/Imagem_bolinhas.svg';

export function Sobre() {
    return (
        <section id='sobre' className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.info_sobre}>
                    <img
                        className={styles.fotocomBolinhas}
                        src={fotocomBolinhas}
                        alt="Foto com bolinhas"
                    />
                    <div>
                        <h1>Sobre nós</h1>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
