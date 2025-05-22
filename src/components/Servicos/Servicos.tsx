import { ArrowRight } from 'lucide-react'
import styles from './Servicos.module.css'

const servicos = [
    {
        titulo: "Controladoria",
        descricao: "Monitoramento do desempenho econômico da empresa com foco em: margem, lucratividade, precificação, custos e indicadores de resultado.",
    },
    {
        titulo: "Financeiro",
        descricao: "Organização, segurança e integração das informações financeiras para tomada de decisões precisas sobre caixa e investimentos.",
    },
    {
        titulo: "Consultoria Empresarial",
        descricao: "Diagnóstico e estruturação de áreas-chave da empresa tais como: produção, logística, qualidade, custos e planejamento.",
    },
    {
        titulo: "Tributário",
        descricao: "Planejamento fiscal e recuperação de créditos com foco em conformidade legal e redução da carga tributária federal.",
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
