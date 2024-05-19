import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Context/Context";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    const { createLogOut, user, totalItemsInShoppingCart, allFoods, setDisplayFood, searchText, setSearchText } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [getInput, setGetInput] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    if (searchText && location.pathname !== '/' && location.pathname !== '/menu') {
        navigate('/')
    }

    const handleHomeLinkClick = (targetRoute) => {
        if (['/', '/menu', '/mobileApp', '/myOrders', '/errorPage'].includes(targetRoute)) {
            setSearchText('');
        }
    };

    const Links = <>
        <li onClick={() => handleHomeLinkClick('/')}> <NavLink to='/'>Home</NavLink></li>
        <li onClick={() => handleHomeLinkClick('/menu')}><NavLink className='md:mx-5 my-5 md:my-0' to='/menu'>Menu</NavLink></li>
        <li onClick={() => handleHomeLinkClick('/mobileApp')}> <NavLink to='/mobileApp'>Mobile app</NavLink></li>
        <li onClick={() => handleHomeLinkClick('/myOrders')}><NavLink className='md:mx-5 my-5 md:my-0' to='/myOrders'>My orders</NavLink></li>
        <li onClick={() => handleHomeLinkClick('/errorPage')}><NavLink className='' to='/errorPage'>Error Page</NavLink></li>
    </>

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsSearch(!isSearch)
    }

    const handleLogOut = () => {
        createLogOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setSearchText(getInput);
            toggleSearch()
        }

    };

    const handleSearchQuery = () => {
        setSearchText(getInput);
    }

    const combineHandle = () => {
        handleSearchQuery()
        toggleSearch()
    }

    useEffect(() => {
        if (searchText) {
            setDisplayFood(
                allFoods.filter(food => {
                    return Object.values(food).join().toLowerCase().includes(searchText.toLowerCase())
                })
            )
        } else {
            setDisplayFood(allFoods)
        }
    }, [searchText])

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
                {/* search */}
                <label className={`input items-center fixed left-0 top-0 z-30 flex h-2/4 w-full bg-white shadow-lg transition-transform duration-500 ease-in-out ${isSearch ? 'translate-y-0 ' : '-translate-y-full'}`} >

                    <input onKeyPress={handleKeyPress} type="text" name='search' onChange={(e) => setGetInput(e.target.value)} className="grow" placeholder="Search" />

                    <svg onClick={combineHandle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className=" opacity-70 cursor-pointer w-10 h-10 hover:text-green-500 border-white border hover:border hover:border-gray-300 transition-border duration-300 ease-in-out p-2"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    <p className="ml-10 cursor-pointer text-xl p-2 font-semibold text-red-400 border border-white hover:border hover:border-gray-300 transition-border duration-300 ease-in-out" onClick={toggleSearch}><IoCloseOutline /></p>

                </label>
                <div onClick={toggleSearch} className=" text-2xl">
                    <CiSearch className="cursor-pointer" />
                </div>

                <div className="md:mx-5 mx-4 md:text-2xl">
                    {totalItemsInShoppingCart > 0 ?
                        <Link className="relative" to='/cart'> <FaCartPlus className="text-green-600" />
                            <span className={`absolute -top-3 -right-3 text-xl md:text-base  bg-red-400 md:px-2 px-1.5 rounded-full transition-transform duration-500 ease-in-out`}>{totalItemsInShoppingCart}</span>
                        </Link>
                        :
                        <Link to='/cart'> <FaCartPlus className="text-xl md:text-base" /></Link>
                    }
                </div>

                {
                    user ?
                        <Link onClick={handleLogOut} to='/signIn' className="border rounded-full px-1 md:px-3 md:py-0.5 hover:bg-slate-100 duration-700">Sign Out</Link>
                        :
                        <Link to='/signIn' className="border rounded-full px-1 md:px-3 md:py-0.5 hover:bg-slate-100 duration-700">Sign in</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;