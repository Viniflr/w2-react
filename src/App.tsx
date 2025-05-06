import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Resultados } from './components/Resultados/Resultados'
import { Sobre } from './components/Sobre/Sobre'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Resultados />
      <Sobre />
    </div>
  )
}