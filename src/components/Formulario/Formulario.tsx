import { useState } from 'react'
import styles from './Formulario.module.css'

import whatsapp from '../../img/logo-zap.svg'
import W from '../../img/W.svg'

export function Formulario() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        empresa: '',
        telefone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados enviados:', formData);
    };

  return (
    <section id='contato' className={styles.geral}>
        <div className={styles.info}>
            <h1>Fale <span>conosco!</span></h1>
            <p>Ao preencher o formulário você será automaticamente
                redirecionado para nosso WhatsApp.</p>
        </div>

        <form className={styles.form_container} onSubmit={handleSubmit}>
            <input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            value={formData.nome}
            onChange={handleChange}
            className={styles.input}
            required
            />

            <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
            />

            <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={formData.empresa}
            onChange={handleChange}
            className={styles.input}
            />

            <input
            type="tel"
            name="telefone"
            placeholder="Seu telefone"
            value={formData.telefone}
            onChange={handleChange}
            className={styles.input}
            />

            <button className={styles.button} type="submit">
                <img src={whatsapp} alt="" />
                Fale com Especialista
            </button>
        </form>

    </section>

    
  );
}
