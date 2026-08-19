// Importa os recursos necessários do Chart.js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

// Importa o componente Line, que permite utilizar um gráfico de linha dentro do React
import { Line } from 'react-chartjs-2'


// Registra os recursos do Chart.js que serão utilizados no gráfico
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


function GraficoJuros({ dados }) {

    // O objeto data contém os dados que serão mostrados no gráfico
    const data = {

        // Define os valores do eixo X.
        labels: dados.periodos,

        // Cada objeto dentro de datasets representa uma linha diferente no gráfico
        datasets: [
            {
                label: 'Juros Simples', // Nome que aparece na legenda
                data: dados.valoresSimples, // Valores calculados para cada período
                borderColor: '#60A5FA',
                backgroundColor: '#60A5FA',
                borderWidth: 3, // Espessura da linha
                pointRadius: 3 // Tamanho dos pontos
            },

            {
                label: 'Juros Compostos',
                data: dados.valoresCompostos, // Valores calculados dos juros compostos
                borderColor: '#2563EB',
                backgroundColor: '#2563EB',
                borderWidth: 3,
                pointRadius: 3
            }
        ]
    }


    // define como o gráfico vai funcionar e como ele vai aparecer visualmente
    const options = {
        responsive: true, // Faz o gráfico se adaptar ao tamanho disponível
        maintainAspectRatio: false, // Permite que o tamanho seja controlado pelo CSS

        plugins: {
            legend: { 
                display: true,
                labels: { // Deixa o texto da legenda branco
                    color: '#FFFFFF'
                }
            },

            title: {
                display: true,
                text: 'Comparação entre Juros Simples e Compostos',
                color: '#FFFFFF',
                font: {
                    size: 18,
                    weight: 'bold'
                }
            }
        },


        // Configurações dos eixos X e Y
        scales: {
            x: {
                ticks: {
                    color: '#CBD5E1' // Cor dos números do eixo
                },
                grid: {
                    color: '#334155' // Cor das linhas da grade
                }
            },

            y: {
                ticks: {
                    color: '#CBD5E1'
                },

                grid: {
                    color: '#334155'
                }
            }
        }
    }


    // Renderiza o gráfico
    return (
        <div className='grafico'>
            <Line data={data} options={options} />
        </div>
    )
}


export default GraficoJuros