import styles from './Resultados.module.css';

export function Resultados() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h3>R$ 540M</h3>
                    <p>Lorem ipsum dolor</p>
                </div>

                <div className={styles.card}>
                    <h3>R$ 540M</h3>
                    <p>Lorem ipsum dolor</p>
                </div>

                <div className={styles.card}>
                    <h3>R$ 540M</h3>
                    <p>Lorem ipsum dolor</p>
                </div>
            </div>
        </section>
    );
}
