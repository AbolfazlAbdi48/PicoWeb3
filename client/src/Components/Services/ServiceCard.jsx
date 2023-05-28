const ServiceCard = ({ color, icon, title, subtitle }) => {
    return (
        <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
                {icon}
            </div>
            <div className="ml-5 flex flex-col flex-1 text-white">
                <h3 className="mt-2 text-lg">
                    {title}
                </h3>
                <p className="my-2 mbtext-sm md:w-9/12">
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard;