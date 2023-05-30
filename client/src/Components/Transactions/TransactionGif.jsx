import { useEffect, useState } from "react";
import logo from "../../assets/loader.svg"

const APIKey = import.meta.env.VITE_GIPHY_TOKEN;

const TransactionGif = ({ keyword }) => {
    const [gif, setGif] = useState("")
    const [keywords, setKeyword] = useState(keyword)

    const fetchGif = async () => {
        try {
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${keywords.split(" ").join(" ")}&limit=1`
            );
            const { data } = await response.json();

            setGif(data[0]?.images?.downsized_medium.url);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchGif()
    }, [keywords])

    return (
        <img
            src={gif || logo}
            alt="gif"
            className="w-64 h-64 2xl:h-64 rounded-md shadow-lg object-cover"
        />
    )
}

export default TransactionGif;