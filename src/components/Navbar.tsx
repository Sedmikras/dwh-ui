import Logo from "../assets/Logo.tsx";
import {logout} from "./pages/Logout.tsx";

const Navbar = () => {
    const handleLogout = () => {
        logout();
    }

    return (
        <nav className="bg-gray-800 w-screen h-20 flex flex-col">
            <div className="text-white h-10 flex-grow-0 flex-shrink-0 flex items-center">
                <div className={'flex items-center justify-center justify-self-start'}>
                    <Logo size={5}/>
                    <div className="text-white text-xl font-bold whitespace-nowrap">ETL Dashboard</div>
                </div>
                <div className={'flex items-center mr-auto'}>
                    <div className={''}>admin</div>
                    <ul onClick={handleLogout}>logout</ul>
                </div>
            </div>
            <div className={'text-white h-10 flex-grow-0 flex-shrink-0 flex justify-around'}>
                <li>Dashboard</li>
                <li>Stage</li>
                <li>Core</li>
                <li>Mart</li>
                <li>Operational</li>
                {/* Menu Items
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <NavLink
                            to="/public"
                            className={({isActive}) =>
                                isActive
                                    ? "text-blue-400 font-semibold"
                                    : "text-white hover:text-blue-400"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({isActive}) =>
                                isActive
                                    ? "text-blue-400 font-semibold"
                                    : "text-white hover:text-blue-400"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({isActive}) =>
                                isActive
                                    ? "text-blue-400 font-semibold"
                                    : "text-white hover:text-blue-400"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>*/}

                {/* Mobile Menu Button */}
                <div className="md:hidden text-white">☰</div>
            </div>
        </nav>
    );
};

export default Navbar;
