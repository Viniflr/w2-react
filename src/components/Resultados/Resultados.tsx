import styles from './Resultados.module.css';

export function Resultados() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h3><span>+</span> R$ 25M</h3>
                    <p>Em volume financeiro sob gestão anual</p>
                </div>

                <div className={styles.card}>
                    <h3><span>+</span> R$ 4M</h3>
                    <p>Em economia tributária gerada para clientes por ano</p>
                </div>

                <div className={styles.card}>
                    <h3><span>+</span> R$ 17M</h3>
                    <p>Captados em recursos para financiamento, expansão e fluxo de caixa</p>
                </div>
            </div>
        </section>
    );
}
