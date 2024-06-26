import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root'
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AppDownload from "../Pages/AppDownload/AppDownload";
import Menu from "../Pages/Menu/Menu";
import SignIn from "../Pages/Login/signIn/SignIn";
import SignUp from "../Pages/Login/SignUp/SignUp";
import Cart from "../Pages/Cart/Cart";
import PlaceOrder from "../Pages/PlaceOrder/PlaceOrder";
import MyOrders from "../Pages/MyOrders/MyOrders";
import PrivateRoutes from "./PrivateRoutes";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/mobileApp',
                element: <AppDownload></AppDownload>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/placeOrder',
                element: <PlaceOrder></PlaceOrder>
            },
            {
                path: '/myOrders',
                element: <PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>
            }
        ],
    },
])


export default Router;