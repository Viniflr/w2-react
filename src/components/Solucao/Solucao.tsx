import styles from './Solucao.module.css';
import container1 from '../../img/container1.svg';
import container2 from '../../img/container2.svg';
import container3 from '../../img/container3.svg';
import container4 from '../../img/container4.svg';

export function Solucao() {
    return (
        <section>
    
            <div className={styles.titulo}>
                <h1>A <span>solução</span> para o seu negócio</h1>
                <h3>Conheça como podemos te ajudar!</h3>
            </div>    

            <div className={styles.geral_containers}>
                <div className={styles.container_cima}>
                    <div className='c1'>
                        <div className={styles.info_c1}>
                            <h1>Falta clareza sobre o lucro  da empresa?</h1>
                            <p>Organizamos seus dados financeiros e revelamos onde estão os gargalos.
                            </p>
                        </div>
                        <img className={styles.container1} src={container1} alt="" />
                    </div>

                    <div className='c2'>
                        <div className={styles.info_c2}>
                            <h1>Margem apertada e aumento dos custos?</h1>
                            <p>Ajudamos a revisar seus preços, reduzir desperdícios e recuperar rentabilidade.
                            </p>
                        </div>
                        <img className={styles.container2} src={container2} alt="" />
                    </div>
                </div>

                <div className={styles.container_baixo}>
                    <div className='c3'>
                            <div className={styles.info_c3}>
                                <h1>Carga tributária alta e falta de planejamento fiscal?</h1>
                                <p>Analisamos sua estrutura e buscamos oportunidades legais de ganhos.
                                </p>
                            </div>
                            <img className={styles.container3} src={container3} alt="" />
                        </div>

                        <div className='c4'>
                            <div className={styles.info_c4}>
                                <h1>Divergência entre Contabilidade e Financeiro?</h1>
                                <p>Reestruturamos processos e apoiamos a tomada de decisão com base análise dos números.
                                </p>
                            </div>
                            <img className={styles.container4} src={container4} alt="" />
                        </div>
                </div>
            </div> 

        </section>

        
    )
}