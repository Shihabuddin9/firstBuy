import { useContext } from "react";
import { IoMdAdd, IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { AuthContext } from "../../Provider/Context/Context";

const FoodCart = ({ food }) => {
    const { id, name, price, description, category, image } = food
    const { addToCart, removeFromCart, cartItems, } = useContext(AuthContext)

    return (
        <div className={`border md:border-0 py-7 rounded relative cursor-pointer
        ${cartItems[id] ? 'hover:shadow shadow-md' : 'hover:shadow-md'}
        `}>
            <div>
                <img className="p-5 w-60" src={image} alt="" />
            </div>
            <div className="mx-3">
                <h2 className="font-semibold text-center">{name}</h2>
                <h4 className="my-1 text-red-600 text-center">${price}</h4>
                <p className=" text-gray-600 text-center">{description.slice(0, 50)}</p>
            </div>

            <div className="absolute top-3 right-7">
                {
                    !cartItems[id] ?
                        <button onClick={() => addToCart(id)}><IoMdAdd className="text-xl bg-slate-200 rounded-full p-0.5 text-gray-600 hover:text-sky-700" /></button>
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