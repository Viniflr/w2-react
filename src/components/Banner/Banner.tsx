import styles from './Banner.module.css';

import { MessageCircle } from 'lucide-react';

export function Banner() {
  return (
    <section id='home' className={styles.banner}>
        <div className={styles.content}>
            <h1>
                Soluções financeiras que <br />
                impulsionam o crescimento <br />
                do <span>seu negócio</span>
            </h1>

            <div className={styles.info_banner}>
                <button className={styles.banner_button}>
                    Fale com Especialista
                    <MessageCircle />
                </button>
            </div>
        </div>
    </section>
  );
}
