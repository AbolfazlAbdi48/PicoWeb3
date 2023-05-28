import { Cryptocurrencies, Services, Transactions } from "../Components";

const Home = () => {
    return (
        <>
            <Services />
            <Cryptocurrencies />
            <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-services">
                <Transactions />
            </div>
        </>
    )
}

export default Home;