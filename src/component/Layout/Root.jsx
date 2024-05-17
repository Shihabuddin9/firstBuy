import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;