import CryptoCard from "./CryptoCard";

const Cryptocurrencies = () => {
    return (
        <section className="felx w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                <h1 className="text-white text-3xl text-center my-2">
                    Crypto Currencies
                </h1>

                <div className="flex flex-wrap justify-center items-center mt-10">
                    <CryptoCard />
                    <CryptoCard />
                    <CryptoCard />
                    <CryptoCard />
                    <CryptoCard />
                    <CryptoCard />
                </div>
            </div>
        </section>
    )
}

export default Cryptocurrencies;