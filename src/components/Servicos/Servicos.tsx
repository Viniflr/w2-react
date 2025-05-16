import { ArrowRight } from 'lucide-react'
import styles from './Servicos.module.css'

const servicos = [
    {
        titulo: "Controladoria",
        descricao: "Dificuldade em acompanhar e analisar a saúde financeira da empresa? Nós ajudamos você a ter dados claros para tomar decisões seguras.",
    },
    {
        titulo: "Consultoria empresarial",
        descricao: "Dificuldade para estruturar, expandir ou reverter cenários críticos? Nossa equipe analisa e orienta a melhor direção para o seu negócio.",
    },
    {
        titulo: "Tributário",
        descricao: "Problemas com tributos e falta de planejamento fiscal podem comprometer sua empresa. Atuamos para garantir conformidade e economia.",
    },
    {
        titulo: "Financeiro",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.incididunt ut labore et",
    },
]

export function Servicos() {
    return (
        <section id='servicos' className={styles.container}>
            <h2 className={styles.titulo}>
                Nossos <br /><span>Serviços</span>
            </h2>

            <div className={styles.grid}>
                {servicos.map((servico, idx) => (
                    <div key={idx} className={styles.card}>
                        <div>
                            <h3>{servico.titulo}</h3>
                            <p>{servico.descricao}</p>
                        </div>
                        <button>
                            Saiba mais <ArrowRight size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}
