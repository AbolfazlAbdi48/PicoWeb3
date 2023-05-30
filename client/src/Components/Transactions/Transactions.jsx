import TransactionCard from "./TransactionCard";

const Transactions = () => {
    return (
        <div className="flex flex-col md:p-12 py-12 px-4">
            <h1 className="text-white text-3xl text-center my-2">
                Latest Gifts
            </h1>

            <div className="flex flex-wrap justify-center items-center mt-10">
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
            </div>
        </div>
    )
}

export default Transactions;