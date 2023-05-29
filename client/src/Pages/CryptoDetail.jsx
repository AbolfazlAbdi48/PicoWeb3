import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { IoLogoUsd } from "react-icons/io";
import { FaWater } from "react-icons/fa";
import { GiPodiumWinner, GiWaterDrop } from "react-icons/gi";
import { CryptoStatisticCard } from "../Components";

Chart.register(...registerables);

const CryptoDetail = () => {
    const labels = ['1', '2', '3', '4', '5', '6', '7']
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    return (
        <section className="felx w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">

                <div className="flex flex-wrap justify-center items-center mt-10">
                    <div className="flex flex-col items-center justify-center mb-10">
                        <img src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg" alt="logo" className="w-[40px] mr-4 mb-1" />

                        <h2 className="text-white text-3xl text-center my-2">
                            Bitcoin (BTC)
                        </h2>
                    </div>
                    <div className="w-full">
                        <Line data={data} />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center mt-10">
                    <CryptoStatisticCard
                        color="bg-[#8945f8]"
                        title="Price to USD"
                        icon={<IoLogoUsd fontSize={17} className="text-white" />}
                        subtitle="$ 27,000"
                    />
                    <CryptoStatisticCard
                        color="bg-[#f84550]"
                        title="Rank"
                        icon={<GiPodiumWinner fontSize={17} className="text-white" />}
                        subtitle="1"
                    />
                    <CryptoStatisticCard
                        color="bg-[#2952E3]"
                        title="24h Volume"
                        icon={<GiWaterDrop fontSize={17} className="text-white" />}
                        subtitle="27000"
                    />
                    <CryptoStatisticCard
                        color="bg-[#A24B82]"
                        title="Market Cap"
                        icon={<FaWater fontSize={17} className="text-white" />}
                        subtitle="0.5"
                    />
                </div>
            </div>
        </section>
    )
}

export default CryptoDetail;