import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import logo from "../../assets/logo/picologo.png"
import NavbarItem from "./NavbarItem";

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const navbarItems = [
        { title: 'Home', to: '/' },
        { title: 'Cryptos', to: '/cryptocurrencies' },
        { title: 'Gift', to: '/gift' },
        { title: 'Transactions', to: '/transactions' },
        { title: 'Guid', to: '/guid' },
    ]

    return (
        <nav className="text-white w-full flex md:justify-center justify-between items-center p-4">
            <section className="md:flex-[0.5] flex-initial justify-center items-center">
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-32" />
                </Link>
            </section>
            <section>
                <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                    {
                        navbarItems.map((item, index) => (
                            <NavbarItem
                                key={index}
                                title={item.title}
                                to={item.to}
                            />
                        ))
                    }
                </ul>
                <section className="flex relative">
                    {
                        menuToggle ? (
                            <AiOutlineClose
                                className="md:hidden text-white cursor-pointer"
                                fontSize={28}
                                onClick={() => setMenuToggle(false)}
                            />
                        ) : (
                            <HiMenuAlt4
                                className="md:hidden text-white cursor-pointer"
                                fontSize={28}
                                onClick={() => setMenuToggle(true)}
                            />
                        )
                    }

                    {
                        menuToggle && (
                            <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-start rounded-md blue-glassmorphism">
                                <li className="text-xl w-full my-2">
                                    <AiOutlineClose onClick={() => setMenuToggle(false)} />
                                </li>
                                {
                                    navbarItems.map((item, index) => (
                                        <NavbarItem
                                            key={index}
                                            title={item.title}
                                            to={item.to}
                                        />
                                    ))
                                }
                            </ul>
                        )
                    }
                </section>
            </section>
        </nav>
    )
}

export default Navbar;