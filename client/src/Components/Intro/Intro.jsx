import { useContext } from "react";
import { SiEthereum } from "react-icons/Si";
import { BsInfoCircle } from "react-icons/Bs";
import { TransactionContext } from "../../context/transactionsContext";
import { shortenAddress } from "../../utils/shortenAddress";
import { ConnectWalletButton } from "../";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Intro = () => {
    const { currentWallet, connectWallet } = useContext(TransactionContext)

    return (
        <section className="w-full flex justify-center items-center">
            <section className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex flex-col flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-white text-3xl sm:text-5xl text-gradient py-1">
                        The global
                        <br />
                        crypto stats !
                    </h1>
                    <p className="text-white text-left mt-5 font-light md:w-9/10 w-11/12 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, eos.
                    </p>

                    <ConnectWalletButton
                        currentWallet={currentWallet}
                        connectWallet={connectWallet}
                    />

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`} >
                            Cryptocurrencies
                        </div>
                        <div className={`${commonStyles}`} >
                            Markets
                        </div>
                        <div className={`md:rounded-tr-2xl ${commonStyles}`} >
                            Gift
                        </div>
                        <div className={`md:rounded-bl-2xl ${commonStyles}`} >
                            Transactions
                        </div>
                        <div className={`${commonStyles}`} >
                            Web3.0
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`} >
                            Meta Mask
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col items-center justify-start w-full md:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-96 w-full my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                                {
                                    currentWallet ? (
                                        <p className="text-white font-light text-sm">
                                            {shortenAddress(currentWallet)}
                                        </p>
                                    ) : (
                                        <p className="text-white font-light text-sm">
                                            Please Connect Wallet
                                        </p>
                                    )
                                }
                                <p className="text-white font-semibold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Intro;