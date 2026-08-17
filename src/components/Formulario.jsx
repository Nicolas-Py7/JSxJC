function Formulario({ capitalInicial, setCapitalInicial, taxaJuros, setTaxa,unidadeTaxa, setUnidadeTaxa, tempoJuros, unidadeTempo, setTempo, setUnidadeTempo, calcular }) {
    return(
        <div className="formulario">
            <div className="campo"> 
                <label>Capital inicial:</label>
                <input type="number" value={capitalInicial} onChange={(e) => setCapitalInicial(e.target.value)}/>
            </div>

            <div className="campo">
                <label>Taxa:</label>
                <input type="number" value={taxaJuros} onChange={(e) => setTaxa(e.target.value)}/>
            </div>

            <div className="campo">
                <label>Unidade da taxa:</label>
                <select value={unidadeTaxa} onChange={(e) => setUnidadeTaxa(e.target.value)}>
                    <option value="dias">Dias</option>
                    <option value="meses">Meses</option>
                    <option value="anos">Anos</option>
                </select>
            </div>

            <div className="campo">
                <label>Tempo:</label>
                <input type="number" value={tempoJuros} onChange={(e) => setTempo(e.target.value)}/>
            </div>

            <div className="campo">
                <label>Unidade de tempo:</label>
                <select value={unidadeTempo} onChange={(e) => setUnidadeTempo(e.target.value)}>
                    <option value="dias">Dias</option>
                    <option value="meses">Meses</option>
                    <option value="anos">Anos</option>
                </select>
            </div>


            <button onClick={calcular}>Calcular</button>
        </div>
        )
    }

export default Formulario