const TransactionCard = () => {
    return (
        <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[350px] 2xl:max-w-[400px] sm:min-w-[270px] sm:max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl">
            <div className="flex flex-col items-center w-full mt-3">
                <div className="w-full mb-6 p-2">

                    <a href={`https://ropsten.etherscan.io/address/${'addressFrom'}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base">
                            From: {'shortenAddress(addressFrom)'}
                        </p>
                    </a>

                    <a href={`https://ropsten.etherscan.io/address/${'addressTo'}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base">
                            To: {'shortenAddress(addressTo)'}
                        </p>
                    </a>

                    <p className="text-white text-base">
                        Amount: {'amount'} ETH
                    </p>

                    {/* {
                        message && (
                            <>
                                
                            </>
                        )
                    } */}

                    <br />
                    <p className="text-white text-base mb-3">
                        Message: {'message'}
                    </p>

                </div>
                <img
                    src="https://i.gifer.com/origin/68/68b376b5408907275c063e2c719fd9d9_w200.gif"
                    alt="gif"
                    className="w-64 h-64 2xl:h-64 rounded-md shadow-lg object-cover"
                />

                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className="text-[#37c7da] font-bold">
                        {'timestamp'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TransactionCard;