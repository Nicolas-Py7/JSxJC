import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, plugins } from 'chart.js'
import { color } from 'chart.js/helpers'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)

function GraficoJuros({dados}) {
    const data = {
            labels: dados.periodos,
            datasets: [
            {
                label: 'Juros Simples',
                data: dados.valoresSimples,
                borderColor: '#60A5FA',
                backgroundColor: '#60A5FA',
                borderWidth: 3,
                pointRadius: 3
            },

            {
                label: 'Juros Compostos',
                data: dados.valoresCompostos,
                borderColor: '#2563EB',
                backgroundColor: '#2563EB',
                borderWidth: 3,
                pointRadius: 3
            }
        ]
    }

    const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
        legend: {
            display: true,
            labels: {
                color: '#FFFFFF'
            }
        },

        title: {
            display: true,
            text: 'Comparação entre Juros Simples e Compostos',
            color: '#FFFFFF',
            font: {
                size: 18,
                weigth: 'bold'
            }
        }
    },

    scales: {
        x: {
            ticks: {
                color: '#CBD5E1'
            },
            grid: {
                color: '#334155'
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

    return(
        <div className='grafico'>
            <Line data={data} options={options} />
        </div>
    )
}

export default GraficoJuros