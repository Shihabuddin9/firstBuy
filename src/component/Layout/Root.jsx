import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="md:mx-10 mx-5">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;