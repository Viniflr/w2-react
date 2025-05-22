import styles from './Empresas.module.css';

export function Empresas() {
    return (
        <section className={styles.empresasContainer}>
            <h2 className={styles.empresasTitulo}>
                Reconhecido por empresas e empresários <span>em todo o país</span>
            </h2>
            <div className={styles.empresasSlider}>
                <div className={styles.empresasTrack}>
                    {[...Array(14)].map((_, index) => (
                        <div key={index} className={styles.empresaTexto}>
                            Segmento
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
