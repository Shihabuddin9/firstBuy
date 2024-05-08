import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const Links = <>
        <li> <NavLink to='/'>Home</NavLink></li>
        <li><NavLink className='mx-5' to='/menu'>Menu</NavLink></li>
        <li> <NavLink to='/mobileApp'>Mobile app</NavLink></li>
        <li><NavLink className='ml-5' to='/ContactUs'>Contact us</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-serif">FirstBuy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className=" md:text-2xl">
                    <CiSearch />
                </div>
                <div className="mx-5 md:text-2xl">
                    <FaCartPlus />
                </div>
                <Link to='/signIn' className="btn">Sign in</Link>
            </div>
        </div>
    );
};

export default Navbar;