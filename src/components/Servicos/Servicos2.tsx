import { Check } from 'lucide-react'
import styles from './Servicos.module.css'

const beneficios = [
    {
        titulo: "Tributário",
        itens: [
            "Simulação de regimes fiscais e enquadramento ideal",
            "Descontos em tributos federais através de créditos precatórios",
            "Revisão de encargos sobre folha e retenções indevidas",
            "Recuperação de créditos tributários federais (PIS, COFINS, IR e CSLL)",
            "Suporte técnico em conformidade com normas da Receita Federal",
        ]
    },
    {
        titulo: "Controladoria",
        itens: [
            "Estruturação e análise do DRE",
            "Apuração de margens por produto",
            "Monitoramento de custos e indicadores",
            "Viabilidade econômica de novos investimentos",
            "Implementação de sistemas de custos e orçamento",
            "Integração de dados para gestão estratégica",
        ]
    },
    {
        titulo: "Financeiro",
        itens: [
            "Integração Financeiro x Contábil",
            "Monitoramento de fluxo de caixa",
            "Análise de liquidez e estrutura de capital",
            "Captação de recursos em fundos de investimento",
            "Suporte para tomada de decisão financeira",
            "Precificação e ponto de equilíbrio",
        ]
    },
    {
        titulo: "Consultoria Empresarial",
        itens: [
            "Diagnóstico estratégico e operacional",
            "Revisão de procedimentos produtivos e administrativos",
            "Apoio na estruturação de áreas como PCP, Controladoria e Financeiro",
            "Redesenho de layout de procedimentos (fluxo físico e informacional)",
            "Plano de ação com metas mensuráveis e prazos definidos",
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
