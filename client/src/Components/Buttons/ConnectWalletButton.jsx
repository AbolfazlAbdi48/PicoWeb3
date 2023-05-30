import { AiFillPlayCircle } from "react-icons/ai";

const ConnectWalletButton = ({ currentWallet, connectWallet }) => {
    return (
        <>
            {
                !currentWallet && (
                    <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] ease-in duration-300 font-bold"
                    >
                        <p className="text-white text-base font-semibold flex">
                            Connect Wallet
                            <AiFillPlayCircle
                                fontSize={18}
                                className="mx-2 mt-1"
                            />
                        </p>
                    </button>
                )
            }
        </>
    )
}

export default ConnectWalletButton;