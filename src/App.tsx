import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Resultados } from './components/Resultados/Resultados'
import { Sobre } from './components/Sobre/Sobre'
import { Solucao } from './components/Solucao/Solucao'
import { Servicos } from './components/Servicos/Servicos'
import { Servicos2 } from './components/Servicos/Servicos2'
import { Empresas } from './components/Empresas/Empresas'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Resultados />
      <Sobre />
      <Solucao />
      <Servicos />
      <Servicos2 />
      <Empresas />
    </div>
  )
}