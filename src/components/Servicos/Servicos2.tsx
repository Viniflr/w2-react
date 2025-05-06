import { Check } from 'lucide-react'
import styles from './Servicos.module.css'

const beneficios = [
    {
        titulo: "Lorem Ipsum dolor sit amet",
        itens: [
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
        ]
    },
    {
        titulo: "Lorem Ipsum dolor sit amet",
        itens: [
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
        ]
    },
    {
        titulo: "Lorem Ipsum dolor sit amet",
        itens: [
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
        ]
    },
    {
        titulo: "Lorem Ipsum dolor sit amet",
        itens: [
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
            "Lore Ipsum dolor sit",
        ]
    }
]

export function Servicos2() {
    return (
        <section className={styles.beneficiosContainer}>
            <h3 className={styles.beneficiosTitulo}>
                Nossos serviços tem quatro ..... :
            </h3>

            <div className={styles.beneficiosGrid}>
                {beneficios.map((beneficio, idx) => (
                    <div key={idx} className={styles.beneficioCard}>
                        <h4>{beneficio.titulo}</h4>
                        <ul>
                            {beneficio.itens.map((item, i) => (
                                <li key={i}>
                                    <Check size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
