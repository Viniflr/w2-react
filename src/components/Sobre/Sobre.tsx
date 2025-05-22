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
                        <p>
                            Atuamos com inteligência financeira e foco no resultado, transformando
                            dados em decisões. Oferecemos soluções em controladoria, planejamento financeiro,
                            consultoria empresarial e tributária. <br /> <br />
                            Com mais de 20 anos de experiência nosso DNA combina expertise técnica, criatividade
                            e resultados concretos, garantindo eficiência e competitividade para empresas de todos os portes. <br /> <br />
                            Proporcionamos clareza ao empresário que vai além da contabilidade, aliando estratégia
                            de negócio com performance na rentabilidade.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
