import styles from './Empresas.module.css'

// Array com os logos
const logos = [
    { src: "/src/img/stellantis.svg", alt: "Stellantis" },
    { src: "/src/img/fca.svg", alt: "FCA" },
    { src: "/src/img/capital.svg", alt: "Capital" },
    { src: "/src/img/Jeep.svg", alt: "Jeep" },
    { src: "/src/img/Flamboyant.svg", alt: "Flamboyant" },
    { src: "/src/img/logo-verzani.svg", alt: "Verzani & Sandrini" },
    { src: "/src/img/Hile.svg", alt: "Hile" },
];

export function Empresas () {
    return (
        <section className={styles.empresasContainer}>
            <h2 className={styles.empresasTitulo}>
                Reconhecido por empresas e empresários <span>em todo o país</span>
            </h2>
            <div className={styles.empresasSlider}>
                <div className={styles.empresasTrack}>
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className={`${styles.empresaLogo} ${logo.alt === "Capital" ? styles.capitalLogo : ""}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};