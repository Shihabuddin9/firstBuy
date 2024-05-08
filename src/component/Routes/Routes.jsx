import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root'
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {},
        ],
    },
])


export default Router;