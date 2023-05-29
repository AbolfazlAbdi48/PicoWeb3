import { Link } from "react-router-dom";

const CryptoCard = ({
    uuid,
    iconUrl,
    name,
    symbol,
    price,
    marketCap,
    volume
}) => {
    // bg-[#181918]
    return (
        <div className="card-bg-gradient m-4 flex flex-1 2xl:min-w-[350px] 2xl:max-w-[400px] min-w-[270px] max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl duration-500">
            <div className="flex flex-col items-center w-full mt-3">
                <div className="w-full mb-6 p-2 justify-center items-center flex flex-col">
                    <img src={iconUrl} alt="logo" className="w-[50px]" />

                    <p className="text-white text-base mt-5 text-3xl">
                        Name: {name} ({symbol})
                    </p>

                    <p className="text-white text-base mt-5">
                        Price: $ {price}
                    </p>

                    <p className="text-white text-base mt-5">
                        Mrket cap: $ {marketCap}
                    </p>

                    <p className="text-white text-base mt-5">
                        24h : {" "}
                        {
                            volume >= 0 ? (
                                <span className="text-green-500">
                                    +{volume} %
                                </span>
                            ) : (
                                <span className="text-red-500">
                                    {volume} %
                                </span>
                            )
                        }
                    </p>

                    <Link to={`/crypto/${uuid}`}
                        className="bg-transparent hover:bg-[#2952e3] border-2 border-[#2952e3] py-3 px-6 mx-4 rounded mt-4 text-white cursor-pointer hover:bg-[#2546bd] ease-in duration-200"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CryptoCard;