import { shortenAddress } from "../../utils/shortenAddress";
import TransactionGif from "./TransactionGif";

const TransactionCard = (transaction) => {
    return (
        <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[350px] 2xl:max-w-[400px] sm:min-w-[270px] sm:max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl">
            <div className="flex flex-col items-center w-full mt-3">
                <div className="w-full mb-6 p-2">

                    <a href={`https://sepolia.etherscan.io/address/${transaction.addressFrom}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base">
                            From: <span className="underline text-blue-300">{shortenAddress(transaction.addressFrom)}</span>
                        </p>
                    </a>

                    <a href={`https://sepolia.etherscan.io/address/${transaction.addressTo}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base">
                            To: <span className="underline text-blue-300">{shortenAddress(transaction.addressTo)}</span>
                        </p>
                    </a>

                    <p className="text-white text-base">
                        Amount: {transaction.amount} ETH
                    </p>

                    <br />
                    <p className="text-white text-base mb-3">
                        Message: {transaction.message.slice(0, 25)}...
                    </p>

                </div>
                <TransactionGif
                    keyword={transaction.keyword}
                />

                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className="text-[#37c7da] font-bold">
                        {transaction.timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TransactionCard;