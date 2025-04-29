import styles from './Header.module.css'
import Link from 'next/Link'

console.log(styles)

export function Header() {
    return (
        <header className={styles.header}>
            <nav className='nav-bar'>
                <Link href='/' className='nav-logo'>
                    <img src='/logo.png' alt='Logo' className='logo' />
                </Link>
                <strong>W2 finance</strong>

                <ul className='nav-list'>
                    <li>
                    </li>
                </ul>
            </nav>
        </header>
    );
}