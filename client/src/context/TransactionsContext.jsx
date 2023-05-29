import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constant";
import { successToast, warningToast } from "../utils/toasts";

export const TransactionContext = createContext()

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer)

    console.log({
        provider,
        signer,
        transactionsContract
    })
}

export const TransactionProvider = ({ children }) => {
    const [currentWallet, setCurrentWallet] = useState("")

    const checkWalletConnected = async () => {
        try {
            if (!ethereum) return warningToast('Please install MetaMask wallet !')

            const accounts = await ethereum.request({ method: 'eth_accounts' })

            if (accounts.length) {
                setCurrentWallet(accounts[0])

                // TODO: get all transactions.
            } else {
                warningToast('No accounts found !')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return warningToast('Please install MetaMask wallet !')

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

            setCurrentWallet(accounts[0])
            successToast('Wallet Successfuly connected!')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        checkWalletConnected()
    }, [])

    return (
        <TransactionContext.Provider value={{
            currentWallet,
            connectWallet
        }}>
            {children}
        </TransactionContext.Provider>
    )
}