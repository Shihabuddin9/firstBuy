import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Context/Context";

const Navbar = () => {
    const { createLogOut, user } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)

    const Links = <>
        <li> <NavLink to='/'>Home</NavLink></li>
        <li><NavLink className='md:mx-5' to='/menu'>Menu</NavLink></li>
        <li> <NavLink to='/mobileApp'>Mobile app</NavLink></li>
        <li><NavLink className='md:ml-5' to='/errorPage'>Error Page</NavLink></li>
    </>

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogOut = () => {
        createLogOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <div className="dropdown">
                    <div onClick={toggleMenu} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <div className={`fixed left-0 top-0 z-30 flex h-screen w-full bg-white shadow-lg transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <ul onClick={toggleMenu} tabIndex={0} className="menu menu-sm dropdown-content mt-10 ml-5 z-[1] p-2">
                            {Links}
                        </ul>
                        <button onClick={toggleMenu} className="top-5 text-3xl absolute right-10">X</button>
                    </div>
                </div>

                <Link to='/' className="text-xl font-serif"><span className="text-3xl text-red-700">F</span>irstBuy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className=" md:text-2xl">
                    <CiSearch className="cursor-pointer" />
                </div>
                <div className="md:mx-5 mx-2 md:text-2xl">
                    <FaCartPlus className="cursor-pointer" />
                </div>
                {
                    user ?
                        <Link onClick={handleLogOut} to='/signIn' className="border rounded-full px-3 py-0.5 hover:bg-slate-100 duration-700">Sign Out</Link>
                        :
                        <Link to='/signIn' className="border rounded-full px-3 py-0.5 hover:bg-slate-100 duration-700">Sign in</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;