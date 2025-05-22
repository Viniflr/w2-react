import { useEffect, useRef, useState } from 'react';
import styles from './Resultados.module.css';

function useCountUp(targetNumber: number, start = 0, duration = 1500, trigger = false) {
    const [count, setCount] = useState(start);
    const ref = useRef<number | null>(null);
    const startTimestamp = useRef<number | null>(null);

    useEffect(() => {
        if (!trigger) return;

        const step = (timestamp: number) => {
            if (!startTimestamp.current) startTimestamp.current = timestamp;
            const progress = timestamp - startTimestamp.current;
            const progressRatio = Math.min(progress / duration, 1);

            // Easing linear (constante)
            const easedProgress = 1 - Math.pow(1 - progressRatio, 3);

            const currentCount = Math.round(easedProgress * (targetNumber - start) + start);
            setCount(currentCount);

            if (progress < duration) {
                ref.current = requestAnimationFrame(step);
            } else {
                setCount(targetNumber);
            }
        };

        ref.current = requestAnimationFrame(step);

        return () => {
            if (ref.current) cancelAnimationFrame(ref.current);
            startTimestamp.current = null;
        };
    }, [trigger, targetNumber, start, duration]);

    return count;
}

export function Resultados() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // só precisa disparar uma vez
                }
            },
            {
                threshold: 0.5, // 50% da seção visível
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const valor1 = useCountUp(25_000_000, 0, 2500, isVisible);
    const valor2 = useCountUp(4_000_000, 0, 2500, isVisible);
    const valor3 = useCountUp(17_000_000, 0, 2500, isVisible);

    // Função pra formatar em reais simplificado (ex: R$ 25M)
    function formatMoney(num: number) {
        if (num >= 1_000_000) return `R$ ${(num / 1_000_000).toFixed(0)}M`;
        if (num >= 1_000) return `R$ ${(num / 1_000).toFixed(0)}K`;
        return `R$ ${num}`;
    }

    return (
        <section className={styles.wrapper} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h3>
                        <span>+</span> {formatMoney(valor1)}
                    </h3>
                    <p>Em volume financeiro sob gestão anual</p>
                </div>

                <div className={styles.card}>
                    <h3>
                        <span>+</span> {formatMoney(valor2)}
                    </h3>
                    <p>Em economia tributária gerada para clientes por ano</p>
                </div>

                <div className={styles.card}>
                    <h3>
                        <span>+</span> {formatMoney(valor3)}
                    </h3>
                    <p>Captados em recursos para financiamento, expansão e fluxo de caixa</p>
                </div>
            </div>
        </section>
    );
}
