// import styles from './Comentarios.module.css';
import { useEffect, useState } from 'react';
import styles from './Comentarios2.module.css'

import aspas from '../../img/aspas.svg'

// import arrow from '../../img/arrow.svg'

export function Comentarios2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/comentarios.json')
          .then((response) => response.json())
          .then(setData);
      }, [])

    if(!data || !data.length) return null;

    return (
        <div className={styles.container}>
            <div className={styles.carrossel}>

                {data.map((item) => {

                    const {id, titulo, texto, pessoa, empresa} = item

                    return ( 
                        <div className={styles.item} key={id}>
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
            </div>
        </div>
        
    )
}
