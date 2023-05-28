import { Link } from "react-router-dom";

const NavbarItem = ({ title, to, classProps }) => {
    return (
        <li className={`mx-4 ${classProps}`}>
            <Link to={to}>
                {title}
            </Link>
        </li>
    )
}

export default NavbarItem;