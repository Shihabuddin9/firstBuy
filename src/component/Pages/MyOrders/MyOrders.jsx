import useTitle from "../../../hooks/UseTitle/UseTitle";

const MyOrders = () => {
    useTitle('My Orders')
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div>
                <h1 className="text-2xl font-bold">No Orders</h1>
            </div>
        </div>
    );
};

export default MyOrders;