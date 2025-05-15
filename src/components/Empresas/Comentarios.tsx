import { useEffect, useState } from 'react'
import styles from './Comentarios.module.css'

import aspas from '../../img/aspas.svg'
import arrow from '../../img/arrow.svg'

export function Comentarios() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/comentarios.json')
            .then((response) => response.json())
            .then(setData)
            .catch((error) => console.error('Erro ao carregar os dados:', error));
    }, [])

    if (!data || data.length === 0) return <p>Carregando...</p>;

    return (
        <div className={styles.carrossel}>
            {data.map((item) => {
                const { id, titulo, texto, pessoa, empresa } = item;
                return (
                    <div className={styles.container} key={id}>
                        <div className={styles.imagem}>
                            <img src={aspas} alt="Aspas decorativas" />
                        </div>

                        <div className={styles.info}>
                            <h1>{titulo}</h1>
                            <p>{texto}</p>
                        </div>

                        <div className={styles.pessoa}>
                            <h1>{pessoa}</h1>
                            <p>{empresa}</p>
                        </div>
                    </div>
                );
            })}
            <div className={styles.buttons}>
                <button><img src={arrow} alt="Left" /></button>
                <button><img src={arrow} alt="Right" /></button>
            </div>

        </div>

    );
}
