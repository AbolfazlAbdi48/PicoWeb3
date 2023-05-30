import { Link } from "react-router-dom";
import logo from "../../assets/logo/picologo.png"

const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-transactions">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img src={logo} alt="logo" className="w-32" />
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        <Link to="/guid">Guid</Link>
                    </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        <Link to="/cryptocurrencies">Cryptos</Link>
                    </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        <Link to="/gift">Gift</Link>
                    </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        <Link to="/transactions">Transactions</Link>
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center flex-col mt-5 mb-3">
                <p className="text-white text-md text-center">Give me a star in github</p>
                <p className="text-sm text-center font-medium mt-2 bg-[#fefefe] p-2">
                    <a href="https://github.com/AbolfazlAbdi48/PicoWeb3" target="_blank">Github Repo</a>
                </p>
            </div>

            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
        </div>
    )
}

export default Footer;