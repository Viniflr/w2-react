import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Resultados } from './components/Resultados/Resultados'
import { Sobre } from './components/Sobre/Sobre'
import { Solucao } from './components/Solucao/Solucao'
import { Servicos } from './components/Servicos/Servicos'
import { Servicos2 } from './components/Servicos/Servicos2'
import { Empresas } from './components/Empresas/Empresas'
import { Comentarios2 } from './components/Empresas/Comentarios2'
import { Time } from './components/Time/Time'
import { Divisao } from './components/Divisao/Divisao'
import { Local } from './components/Local/Local'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Banner />s
      <Resultados />
      <Sobre />
      <Solucao />
      <Servicos />
      <Servicos2 />
      <Empresas />
      <Comentarios2 />
      <Time />
      <Divisao />
      <Local />
    </div>
  )
}