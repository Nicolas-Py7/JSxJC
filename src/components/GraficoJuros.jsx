import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, plugins } from 'chart.js'
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
                borderWidth: 3,
                pointRadius: 3
            },

            {
                label: 'Juros Compostos',
                data: dados.valoresCompostos,
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
            display: true
        },

        title: {
            display: true,
            text: 'Comparação entre Juros Simples e Compostos'
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