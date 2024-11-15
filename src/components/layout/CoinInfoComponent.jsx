import React, { useEffect, useState } from 'react'
import { fetchCoinInfo } from '../services/coinInfoService'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const CoinInfoComponent = ({ uuid, initialTimePeriod }) => {
    const [coinData, setCoinData] = useState({ info: null, loading: true, error: null })
    const [timePeriod, setTimePeriod] = useState(initialTimePeriod || '3h')

    useEffect(() => {
        const getCoinInfo = async () => {
            setCoinData({ ...coinData, loading: true })
            try {
                const response = await fetchCoinInfo(uuid, timePeriod)
                setCoinData({ info: response.data, loading: false, error: null })
            } catch (error) {
                setCoinData({ info: null, loading: false, error: 'Error fetching coin info' })
            }
        }

        getCoinInfo()
    }, [uuid, timePeriod])

    if (coinData.loading) return <p>Loading coin info...</p>
    if (coinData.error) return <p>{coinData.error}</p>

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp * 1000);

        if (timePeriod === '3h' || timePeriod === '24h') {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else if (timePeriod === '7d' || timePeriod === '30d' || timePeriod === '3m' || timePeriod === '1y') {
            return date.toLocaleDateString([], { day: '2-digit', month: '2-digit' });
        } else {
            return date.toLocaleDateString();
        }
    };


    const chartData = {
        labels: coinData.info.history.slice().reverse().map((entry) => formatTimestamp(entry.timestamp)),
        datasets: [
            {
                data: coinData.info.history.slice().reverse().map((entry) => parseFloat(entry.price)),
                borderColor: 'black',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
            point: {
                pointRadius: 0,
                hoverRadius: 5,
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                mode: 'nearest',
                intersect: false,
                callbacks: {
                    label: (context) => {
                        const price = context.raw.toFixed(2)
                        return `<strong>Price:</strong> $${price}`
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        weight: 'bold',
                    },
                },
            },
            y: {
                ticks: {
                    font: {
                        weight: 'bold',
                    },
                },
            },
        },
    }

    const handleTimePeriod = (event) => {
        setTimePeriod(event.target.value)
    }

    return (
        <div className="h-full flex flex-col gap-2 bg-gray-200 px-4 py-4 rounded-lg min-w-full">
            <div className="flex justify-between items-center mb-4">
                <span className="text-left font-bold text-xl">Bitcoin Information {coinData.info.change}%</span>
                <select
                    value={timePeriod}
                    onChange={handleTimePeriod}
                    className="text-center py-2 border border-gray-300 rounded-lg ml-auto font-bold"
                >
                    <option className='font-bold' value='3h'>3h</option>
                    <option className='font-bold' value='24h'>24h</option>
                    <option className='font-bold' value='7d'>7d</option>
                    <option className='font-bold' value='30d'>30d</option>
                    <option className='font-bold' value='3m'>3m</option>
                    <option className='font-bold' value='1y'>1y</option>
                    <option className='font-bold' value='3y'>3y</option>
                    <option className='font-bold' value='5y'>5y</option>
                </select>
            </div>
            {coinData.info && (
                <div className="bg-gray-100 shadow-lg p-2 rounded-lg h-full">
                    <div className="mt-4 max-h-72">
                        <Line data={chartData} options={options} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CoinInfoComponent