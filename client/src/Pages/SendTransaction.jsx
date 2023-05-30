import { useContext } from "react";
import { ConnectWalletButton, TransactionFormField, TransactionLoading } from "../Components";
import { TransactionContext } from "../context/transactionsContext";
import { warningToast } from "../utils/toasts";

const SendTransaction = () => {
    const {
        formData,
        handleChange,
        currentWallet,
        connectWallet,
        sendTransaction,
        isLoading,
    } = useContext(TransactionContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const { addressTo, amount, keyword, message } = formData

        if (!addressTo || !amount || !keyword || !message) {
            warningToast('Please check the inputs')
        }

        sendTransaction()
    }

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="white-glassmorphisms card-bg-gradient flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 my-5">

                <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] card-bg-gradient rounded-[10px]">
                    <h1 className="font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
                        Send a gift
                    </h1>
                </div>
                <ConnectWalletButton
                    currentWallet={currentWallet}
                    connectWallet={connectWallet}
                />

                <form onSubmit={() => { }} className="w-full mt-[65px] flex flex-col gap-[30px]">
                    <div className="flex flex-wrap gap-[40px]">
                        <TransactionFormField
                            labelName="Address To *"
                            placeholder="0x..."
                            inputType="text"
                            value={formData.addressTo}
                            handleChange={(e) => handleChange(e, 'addressTo')}
                        />
                        <TransactionFormField
                            labelName="Amount *"
                            placeholder="amount (ETH)"
                            inputType="number"
                            value={formData.amount}
                            handleChange={(e) => handleChange(e, 'amount')}
                        />
                    </div>
                    <div className="flex flex-wrap gap-[40px]">
                        <TransactionFormField
                            labelName="Keyword *"
                            placeholder="Keyword (Gif)"
                            inputType="text"
                            value={formData.keyword}
                            handleChange={(e) => handleChange(e, 'keyword')}
                        />
                    </div>

                    <TransactionFormField
                        labelName="Message *"
                        placeholder="Write your message"
                        isTextArea
                        value={formData.message}
                        handleChange={(e) => handleChange(e, 'message')}
                    />


                    <div className="flex justify-center items-center mt-[10px]">
                        {
                            isLoading ? (
                                <TransactionLoading />
                            ) : (
                                <button
                                    type="button"
                                    className={`font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bg-[#1dc071]`}
                                    onClick={handleSubmit}
                                >
                                    Send
                                </button>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SendTransaction;