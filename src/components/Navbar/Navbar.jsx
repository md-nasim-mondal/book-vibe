import { NavLink } from "react-router-dom";
import '../../App.css';
const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink  className={({isActive}) => isActive ? 'text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc] font-normal'} to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink  className={({isActive}) => isActive ? 'text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc] font-normal'}  to={'/listedBooks'}>Listed Books</NavLink>
            </li>
            <li>
                <NavLink  className={({isActive}) => isActive ? 'text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc] font-normal'}  to={'/pagesToRead'}>Pages to Read</NavLink>
            </li>
        </>
    );
    return (
        <div className="navbar bg-base-100 p-0 my-4 md:my-12 font-work-sans">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                </div>
                <a className=" btn-ghost text-xl md:text-3xl text-[#131313] font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2 md:gap-4">
                <a className="btn btn-outline bg-[#23BE0A] text-[#FFFFFF] rounded-lg md:text-lg font-medium">Sign In</a>
                <a className="btn btn-outline bg-[#59C6D2] text-[#FFFFFF] rounded-lg md:text-lg font-medium">Sign Up</a>
            </div>
        </div>
    );
}

export default Navbar;
