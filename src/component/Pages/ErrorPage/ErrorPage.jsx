import { Link } from "react-router-dom";
import notFound from '../../../assets/Error-page/404.png'
import { FaHome } from "react-icons/fa";
import './ErrorPage.css'
import useTitle from "../../../hooks/UseTitle/UseTitle";

const ErrorPage = () => {
    useTitle('Error Page')
    return (
        <div className='pt-28 pb-14 flex md:justify-evenly flex-col md:flex-row items-center mx-2 md:mx-0'>
            <div>
                <h1 className='lg:text-9xl md:text-7xl text-4xl font-bold'>404</h1>
                <h2 className='text-gray-900 font-semibold md:text-4xl text-xl'>Oops! Page Not Found</h2>
                <p className='my-3'>We are sorry, but the page you were looking for does not exist.</p>
                <Link to="/"><button className='bg-orange-600 hover:bg-orange-700 duration-500 text-white px-3 py-2 text-sm flex'><FaHome></FaHome> <span className='ml-2'> Go To Home</span></button></Link>
            </div>
            <div>
                <img className="lg:w-80 md:w-60 w-40" src={notFound} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;