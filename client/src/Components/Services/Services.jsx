import { HiCurrencyEuro } from "react-icons/hi";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill, RiExchangeFill } from "react-icons/Ri";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <section className="flex md:flex-row flex-col w-full justify-center items-center gradient-bg-services">
            <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
                        Our Services
                    </h1>
                    <p className="text-white text-left mt-5 font-light md:w-9/10 w-11/12 text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, distinctio.
                    </p>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-start items-center">
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="Global stats"
                    icon={<HiCurrencyEuro fontSize={21} className="text-white" />}
                    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing."
                />
                <ServiceCard
                    color="bg-[#8945f8]"
                    title="Searchable"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing."
                />
                <ServiceCard
                    color="bg-[#f84550]"
                    title="Gif to your friends"
                    icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing."
                />
                <ServiceCard
                    color="bg-[#A24B82]"
                    title="Exchange"
                    icon={<RiExchangeFill fontSize={21} className="text-white" />}
                    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing."
                />
            </div>
        </section>
    )
}

export default Services;