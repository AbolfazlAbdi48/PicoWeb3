import { useContext } from "react";
import TransactionCard from "./TransactionCard";
import { TransactionContext } from "../../context/transactionsContext";
import { ConnectWalletButton, Loader } from "../";

const Transactions = () => {
    const { transactions, isLoading, currentWallet, connectWallet } = useContext(TransactionContext)
    return (
        <>
            {isLoading && <Loader />}
            <div className="flex flex-col md:p-12 py-12 px-4">
                <h1 className="text-white text-3xl text-center my-2">
                    Latest Gifts
                </h1>

                <div className="flex flex-wrap justify-center items-center mt-10">
                    <ConnectWalletButton
                        currentWallet={currentWallet}
                        connectWallet={connectWallet}
                    />
                    {
                        [...transactions]?.reverse().map((transaction, index) => (
                            <TransactionCard
                                key={index}
                                {...transaction}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Transactions;