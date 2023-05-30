import { TransactionFormField } from "../Components";

const SendTransaction = () => {
    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="white-glassmorphisms card-bg-gradient flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 my-5">

                <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] card-bg-gradient rounded-[10px]">
                    <h1 className="font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
                        Send a gift
                    </h1>
                </div>

                <form onSubmit={() => { }} className="w-full mt-[65px] flex flex-col gap-[30px]">
                    <div className="flex flex-wrap gap-[40px]">
                        <TransactionFormField
                            labelName="Address To *"
                            placeholder="0x..."
                            inputType="text"
                            value={'form.name'}
                            handleChange={(e) => { }}
                        />
                        <TransactionFormField
                            labelName="Amount *"
                            placeholder="amount (ETH)"
                            inputType="text"
                            value={'form.title'}
                            handleChange={(e) => { }}
                        />
                    </div>
                    <div className="flex flex-wrap gap-[40px]">
                        <TransactionFormField
                            labelName="Keyword"
                            placeholder="(Gif)"
                            inputType="text"
                            value={'form.target'}
                            handleChange={(e) => { }}
                        />
                    </div>

                    <TransactionFormField
                        labelName="Message *"
                        placeholder="Write your message"
                        isTextArea
                        value={'form.description'}
                        handleChange={(e) => { }}
                    />


                    <div className="flex justify-center items-center mt-[40px]">
                        <button
                            type="button"
                            className={`font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bg-[#1dc071]`}
                            onClick={() => { }}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SendTransaction;