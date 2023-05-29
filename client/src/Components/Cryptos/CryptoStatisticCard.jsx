import ServiceCard from "../Services/ServiceCard";

const CryptoStatisticCard = ({ color, icon, subtitle, title }) => {
    return (
        <div className="flex flex-1 min-w-[240px] max-w-[290px] py-2 flex-col">
            <div className="flex flex-col items-center w-full mt-3">
                <div className="w-full mb-6 p-2 justify-between items-between flex flex-col">

                    <ServiceCard
                        color={color}
                        icon={icon}
                        title={title}
                        subtitle={subtitle}
                    />

                </div>
            </div>
        </div>
    )
}

export default CryptoStatisticCard;