import { useState } from 'react'
import './App.css'
import { calcularJuros } from './scripts/scripts.js'
import Cabecalho from './components/Cabecalho.jsx'
import Formulario from './components/Formulario.jsx'
import GraficoJuros from './components/GraficoJuros.jsx'

function App() {
  const [capitalInicial, setCapitalInicial] = useState('')
  const [taxaJuros, setTaxa] = useState('')
  const [tempoJuros, setTempo] = useState('')
  const [unidadeTaxa, setUnidadeTaxa] = useState('meses')
  const [unidadeTempo, setUnidadeTempo] = useState('meses')
  const [dadosGrafico, setDadosGrafico] = useState(null)

  function calcular() {
    const resultado = calcularJuros(
      capitalInicial,
      taxaJuros,
      tempoJuros,
      unidadeTempo,
      unidadeTaxa
    )

    setDadosGrafico(resultado)
  }

  return (
    <div className="app">
      <Cabecalho />

      <Formulario 
      capitalInicial={capitalInicial}
      setCapitalInicial={setCapitalInicial}
      taxaJuros={taxaJuros}
      setTaxa={setTaxa}
      tempoJuros={tempoJuros}
      setTempo={setTempo}
      unidadeTaxa={unidadeTaxa}
      setUnidadeTaxa={setUnidadeTaxa}
      unidadeTempo={unidadeTempo}
      setUnidadeTempo={setUnidadeTempo}
      calcular={calcular} />

      {dadosGrafico && <GraficoJuros dados={dadosGrafico} />}
      
    </div>
  )
}

export default App