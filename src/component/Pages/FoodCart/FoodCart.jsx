import { useContext } from "react";
import { IoMdAdd, IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { AuthContext } from "../../Provider/Context/Context";

const FoodCart = ({ food }) => {
    const { id, name, price, description, category } = food
    const { addToCart, removeFromCart, cartItems, } = useContext(AuthContext)

    return (
        <div className="border bg-slate-100 p-3 rounded relative hover:border-sky-500 cursor-pointer">
            <h2 className="font-semibold">{name}</h2>
            <h4 className="my-1 text-red-600">${price}</h4>
            <p className=" text-gray-600">{description.slice(0, 50)}</p>

            <div className="absolute top-3 right-7">
                {
                    !cartItems[id] ?
                        <button onClick={() => addToCart(id)}><IoMdAdd className="text-xl bg-white rounded-full hover:text-sky-700" /></button>
                        :
                        <div className="flex justify-center items-center">
                            <button onClick={() => removeFromCart(id)}><AiFillMinusCircle className="text-xl text-red-500" /></button>

                            <span className="mx-2.5">{cartItems[id]}</span>

                            <button onClick={() => addToCart(id)}><IoIosAddCircle className="text-xl text-green-500" /></button>
                        </div>
                }

            </div>
        </div>
    );
};

export default FoodCart;