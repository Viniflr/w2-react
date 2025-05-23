import { Check } from 'lucide-react'
import styles from './Servicos.module.css'

const beneficios = [
    {
        titulo: "Controladoria",
        itens: [
            "Implementação de sistemas de custos e orçamento",
            "Estruturação e análise do DRE",
            "Apuração de margens por produto",
            "Monitoramento de custos e indicadores",
            "Viabilidade econômica de novos investimentos",
            "Integração de dados para gestão estratégica"
        ]
    },
    {
        titulo: "Financeiro",
        itens: [
            "Formação de preço e ponto de equilíbrio",
            "Integração Financeiro x Contábil",
            "Monitoramento de fluxo de caixa",
            "Análise de liquidez e estrutura de capital",
            "Captação de recursos em fundos de investimento",
            "Suporte para tomada de decisão financeira"
        ]
    },
    {
        titulo: "Consultoria Empresarial",
        itens: [
            "Diagnóstico preciso: estratégico e operacional",
            "Revisão de procedimentos produtivos e administrativos",
            "Apoio na estruturação de áreas como PCP, Controladoria e Financeiro",
            "Redesenho de layout de procedimentos (fluxo físico e informacional)",
            "Plano de ação com metas mensuráveis e prazos definidos",
        ]
    },
    {
        titulo: "Tributário",
        itens: [
            "Simulação de regimes fiscais e enquadramento ideal",
            "Descontos em tributos federais através de créditos precatórios",
            "Revisão de encargos sobre folha e retenções indevidas",
            "Recuperação de créditos tributários federais (PIS, COFINS, IR e CSLL)",
            "Suporte técnico em conformidade com normas da Receita Federal",
        ]
    }
]

export function Servicos2() {
    return (
        <section className={styles.beneficiosContainer}>
            <div className={styles.titulo}>
                <h1>Nossas <span>Especialidades</span></h1>
                <h3>Soluções práticas e integradas para os desafios do seu negócio</h3>
            </div>

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
