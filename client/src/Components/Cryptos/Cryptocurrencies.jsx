import { useGetCryptosQuery } from "../../app/apis/cryptoApi";
import { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import { Loader } from "../";

const Cryptocurrencies = () => {
    const [cryptoCount, setCrtyptoCount] = useState(9)
    const { data: cryptosData, isFetching } = useGetCryptosQuery(cryptoCount)
    const [coins, setCoins] = useState()

    useEffect(() => {
        setCoins(cryptosData?.data?.coins)
    }, [cryptosData])

    return (
        <>
            {isFetching && <Loader />}
            <section className="felx w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
                <div className="flex flex-col md:p-12 py-12 px-4">
                    <h1 className="text-white text-3xl text-center my-2">
                        Crypto Currencies
                    </h1>

                    <div className="flex flex-wrap justify-center items-center mt-10">
                        {
                            coins && coins?.map((crypto) => (
                                <CryptoCard
                                    key={crypto.uuid}
                                    uuid={crypto.uuid}
                                    iconUrl={crypto.iconUrl}
                                    name={crypto.name}
                                    symbol={crypto.symbol}
                                    price={crypto.price}
                                    marketCap={crypto.marketCap}
                                    volume={crypto.change}
                                />
                            ))
                        }
                    </div>

                    <button type="button"
                        onClick={() => setCrtyptoCount(cryptoCount + 9)}
                        className="bg-transparent hover:bg-[#2952e3] border-2 border-[#2952e3] py-3 px-6 mx-4 rounded mt-4 text-white cursor-pointer hover:bg-[#2546bd] ease-in duration-200"
                    >
                        Load More
                    </button>
                </div>
            </section>
        </>
    )
}

export default Cryptocurrencies;