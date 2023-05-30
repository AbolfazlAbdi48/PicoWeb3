import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import { contractABI, contractAddress } from "../utils/constant";
import { infoToast, successToast, warningToast } from "../utils/toasts";

export const TransactionContext = createContext()

const { ethereum } = window;

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer)

    return transactionsContract;
}

export const TransactionProvider = ({ children }) => {
    const [currentWallet, setCurrentWallet] = useState("")
    const [formData, setFormData] = useState({
        addressTo: '',
        amount: '',
        keyword: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [transactions, setTransactions] = useState([])

    const navigate = useNavigate()

    const handleChange = (e, name) => {
        setFormData(prevState => ({ ...prevState, [name]: e.target.value }))
    }

    const getAllTransactions = async () => {
        try {
            if (!ethereum) return warningToast('Please install MetaMask wallet !')

            const transactionsContract = createEthereumContract()
            setIsLoading(true)
            const getAvailableTransactions = await transactionsContract.getAllTransactions()
            setIsLoading(false)

            const structruedTransactions = getAvailableTransactions.map(transaction => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                keyword: transaction.keyword,
                message: transaction.message,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
            }))

            setTransactions(structruedTransactions)

        } catch (error) {
            console.log(error)
        }
    }

    const checkWalletConnected = async () => {
        try {
            if (!ethereum) return warningToast('Please install MetaMask wallet !')

            const accounts = await ethereum.request({ method: 'eth_accounts' })

            if (accounts.length) {
                setCurrentWallet(accounts[0])
                getAllTransactions()
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
            getAllTransactions()
            successToast('Wallet Successfuly connected!')
        } catch (error) {
            console.log(error)
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return warningToast('Please install MetaMask wallet !')
            if (!currentWallet) return warningToast('Please connect a MetaMask wallet.')

            const { addressTo, amount, keyword, message } = formData;
            const transactionsContract = createEthereumContract()
            const parsedAmount = ethers.utils.parseEther(amount)

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentWallet,
                    to: addressTo,
                    gas: '0x5208',
                    value: parsedAmount._hex
                }]
            })

            const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword)

            setIsLoading(true)
            infoToast('Transaction is sending, please wait .')

            await transactionHash.wait()

            setIsLoading(false)
            successToast('Transaction successfully sent.')
            navigate('/transactions')

            setFormData({
                addressTo: '',
                amount: '',
                keyword: '',
                message: ''
            })
            getAllTransactions()

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
            connectWallet,
            formData,
            handleChange,
            sendTransaction,
            isLoading,
            transactions
        }}>
            {children}
        </TransactionContext.Provider>
    )
}