import { Link } from "react-router-dom";

const NavbarItem = ({ title, to }) => {
    return (
        <li className="mx-4">
            <Link to={to}>
                {title}
            </Link>
        </li>
    )
}

export default NavbarItem;