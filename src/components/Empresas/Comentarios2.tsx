import { useEffect, useState, useRef } from 'react';
import styles from './Comentarios2.module.css';
import aspas from '../../img/aspas.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function Comentarios2() {
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFading, setIsFading] = useState(false); // controle do fade
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        fetch('/comentarios.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

    const totalPages = Math.ceil(data.length / 2);

    // Função que troca o slide com animação de fade
    const changeSlide = (newIndex: number) => {
        setIsFading(true); // inicia fade out

        setTimeout(() => {
            setActiveIndex(newIndex);
            setIsFading(false); // fade in
        }, 600); // tempo deve bater com o transition do CSS
    };

    const nextSlide = () => {
        changeSlide((activeIndex + 1) % totalPages);
    };

    const prevSlide = () => {
        changeSlide((activeIndex - 1 + totalPages) % totalPages);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 5000); // 5 segundos

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [activeIndex, data]); // dependência em activeIndex para resetar o intervalo

    const handleDotClick = (index: number) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        changeSlide(index);
    };

    if (!data || !data.length) return null;

    const startIndex = activeIndex * 2;
    const visibleItems = data.slice(startIndex, startIndex + 2);

    return (
        <div className={styles.container}>
            <div className={`${styles.carrossel} ${isFading ? styles.fadeOut : ''}`}>
                {visibleItems.map(({ id, titulo, texto, pessoa, empresa }) => (
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
                ))}
            </div>

            <div className={styles.controlsWrapper}>
                <div className={styles.dots}>
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <span
                            key={i}
                            className={`${styles.dot} ${i === activeIndex ? styles.active : ''}`}
                            onClick={() => handleDotClick(i)}
                        ></span>
                    ))}
                </div>

                <div className={styles.arrows}>
                    <button onClick={prevSlide} aria-label="Slide anterior" className={styles.arrow}>
                        <FiChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} aria-label="Próximo slide" className={styles.arrow}>
                        <FiChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}
