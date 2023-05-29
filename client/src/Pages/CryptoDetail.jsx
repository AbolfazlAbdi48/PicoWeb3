import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { IoLogoUsd } from "react-icons/io";
import { FaWater } from "react-icons/fa";
import { GiPodiumWinner, GiWaterDrop } from "react-icons/gi";
import { CryptoStatisticCard, Loader } from "../Components";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailQuery, useGetCryptoHistoryQuery } from "../app/apis/cryptoApi";
import { useState } from "react";

Chart.register(...registerables);

const CryptoDetail = () => {
    const { coinId } = useParams()
    const [timePeriod, setTimePeriod] = useState('24h')

    const { data: cryptoDetail, isFetching: detailFetching } = useGetCryptoDetailQuery(coinId)
    const { data: cryptoHistory, isFetching: historyFetching } = useGetCryptoHistoryQuery({ coinId, timePeriod })

    const chartLabels = []
    const chartData = []

    for (let i = 0; i < cryptoHistory?.data?.history?.length; i++) {
        chartLabels.push(new Date(cryptoHistory?.data?.history[i].timestamp * 1000).toLocaleString())
        chartData.push(cryptoHistory?.data?.history[i].price)
    }

    const data = {
        labels: chartLabels,
        datasets: [{
            label: 'Chart',
            data: chartData,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const timePeriodItems = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']

    return (
        <>
            {detailFetching || historyFetching ? <Loader /> : null}
            <section className="felx w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
                <div className="flex flex-col md:p-12 py-12 px-4">

                    <div className="flex flex-col items-center justify-center">
                        <img src={cryptoDetail?.data?.coin?.iconUrl} alt="logo" className="w-[40px] mr-4 mb-1" />

                        <h2 className="text-white text-3xl text-center my-2">
                            {cryptoDetail?.data?.coin?.name} ({cryptoDetail?.data?.coin?.symbol})
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center items-center mt-10">

                        <div className="mb-10">
                            <label htmlFor="" className="text-white text-base text-md">
                                Time : {" "}
                            </label>
                            <select
                                defaultValue={"24h"}
                                onChange={(e) => setTimePeriod(e.target.value)}
                                className="rounded-lg w-64 p-3 outline-none text-white border-none text-sm white-glassmorphism"
                            >
                                {
                                    timePeriodItems.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item}
                                            className="text-black"
                                        >
                                            {item}
                                        </option>
                                    ))
                                }
                            </select>
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
                            subtitle={
                                new Intl.NumberFormat(
                                    'en',
                                    { style: 'currency', currency: 'usd' }
                                ).format(cryptoDetail?.data?.coin?.price)
                            }
                        />
                        <CryptoStatisticCard
                            color="bg-[#f84550]"
                            title="Rank"
                            icon={<GiPodiumWinner fontSize={17} className="text-white" />}
                            subtitle={cryptoDetail?.data?.coin?.rank}
                        />
                        <CryptoStatisticCard
                            color="bg-[#2952E3]"
                            title="24h Volume"
                            icon={<GiWaterDrop fontSize={17} className="text-white" />}
                            subtitle={`${cryptoDetail?.data?.coin?.change} %`}
                        />
                        <CryptoStatisticCard
                            color="bg-[#A24B82]"
                            title="Market Cap"
                            icon={<FaWater fontSize={17} className="text-white" />}
                            subtitle={
                                `$${new Intl.NumberFormat(
                                    'en',
                                    { notation: 'compact' }
                                ).format(cryptoDetail?.data?.coin?.marketCap)}`
                            }
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CryptoDetail;