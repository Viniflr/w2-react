import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import logoWhite from '../../img/logow2.svg';
import logoBlack from '../../img/Logo-W2-blue.svg';
import logoEspecialista from '../../img/balao_chat.svg';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.nav_bar}>
        <img
          className={styles.logoW2}
          src={isScrolled ? logoBlack : logoWhite}
          alt="Logo W2"
        />

        <nav className={styles.nav_list}>
          <a href="#home">Home</a>
          <a href="#sobre">Quem somos</a>
          <a href="#">Serviços</a>
          <a href="#">Nosso Time</a>
          <a href="#">Contato</a>
        </nav>

        <div className={styles.fale_com_especialista}>
          <button className={styles.header_button}>
            Fale com Especialista
            <img
              className={styles.logoEspecialista}
              src={logoEspecialista}
              alt="Ícone especialista"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
