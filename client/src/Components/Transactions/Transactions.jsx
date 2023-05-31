import { useContext, useEffect, useState } from "react";
import TransactionCard from "./TransactionCard";
import { TransactionContext } from "../../context/transactionsContext";
import { ConnectWalletButton, Loader } from "../";

const Transactions = () => {
    const { transactions, isLoading, currentWallet, connectWallet } = useContext(TransactionContext)
    const [filterBy, setFilterBy] = useState('all')
    const [transactionsList, setTransactionsList] = useState(transactions)

    const filterTransactions = () => {
        if (filterBy === 'all') {
            setTransactionsList(transactions)
        } else if (filterBy === 'received') {
            setTransactionsList(
                transactions.filter((transaction) => transaction.addressFrom.toLowerCase() == currentWallet.toLowerCase())
            )
        } else if (filterBy === 'given') {
            setTransactionsList(
                transactions.filter((transaction) => transaction.addressTo.toLowerCase() == currentWallet.toLowerCase())
            )
        }
    }

    useEffect(() => {
        filterTransactions()
    }, [filterBy, transactions])

    return (
        <>
            {isLoading && <Loader />}
            <div className="flex flex-col md:p-12 py-12 px-4">
                <h1 className="text-white text-3xl text-center my-2">
                    Latest Gifts
                </h1>

                {
                    currentWallet && (
                        <div className="mb-2 my-10 text-center">
                            <label htmlFor="" className="text-white text-base text-md">
                                Filter by : {" "}
                            </label>
                            <select
                                defaultValue={"All"}
                                onChange={(e) => setFilterBy(e.target.value)}
                                className="rounded-lg w-64 p-3 outline-none text-white border-none text-sm white-glassmorphism"
                            >
                                <option
                                    value={'all'}
                                    className="text-black"
                                >
                                    All
                                </option>
                                <option
                                    value={'given'}
                                    className="text-black"
                                >
                                    Gifts given
                                </option>
                                <option
                                    value={'received'}
                                    className="text-black"
                                >
                                    Gifts received
                                </option>
                            </select>
                        </div>
                    )
                }

                <div className="flex flex-wrap justify-center items-center mt-10">
                    <ConnectWalletButton
                        currentWallet={currentWallet}
                        connectWallet={connectWallet}
                    />
                    {
                        [...transactionsList]?.reverse().map((transaction, index) => (
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