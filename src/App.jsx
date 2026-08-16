import { useState } from 'react'
import './App.css'
import JurosComposto from './components/JurosComposto'
import JurosSimple from './components/JurosSimple'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="cabecalho">
        <h1></h1>
        <p>Site de Comparação entre Juros Simples e Compostos</p>
      </header>
      <section className="conteudo">
        <div className="Inputs">
          <label htmlFor="valorInicial">Valor Inicial:</label>
          <input type="number" id="valorInicial" name="valorInicial" />
        </div>

        <div className="Inputs">
          <label htmlFor="taxaJuros">Taxa de Juros:</label>
          <input type="number" id="taxaJuros" name="taxaJuros" />
        </div>

        <div className="Inputs">
          <label htmlFor="tempo">Tempo:</label>
          <input type="number" id="tempo" name="tempo" />
        </div>
      </section>

      <div className="botoes">
        <button id='JurosSimples'>Calcular Juros Simples</button>
        <button id='JurosCompostos'>Calcular Juros Compostos</button>
      </div>
      
    </div>
  )
}

export default App
