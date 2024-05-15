import { useContext } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { AuthContext } from "../../Provider/Context/Context";
import { IoBagAddOutline } from "react-icons/io5";

const FoodCart = ({ food }) => {
    const { id, name, price, description, category, image } = food
    const { addToCart, removeFromCart, cartItems, } = useContext(AuthContext)

    return (
        <div>
            <div className="flex flex-col justify-center items-center bg-gray-50">
                <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500">
                    <a href="#">
                        <img src={image} alt="Product image" className="h-52 w-72 object-cover" />
                    </a>
                    <div className="px-4 py-4 w-72">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">${price}</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <div className="ml-auto">
                                {
                                    !cartItems[id] ?
                                        <IoBagAddOutline onClick={() => addToCart(id)} className="bi bi-bag-plus text-2xl cursor-pointer" />
                                        :
                                        <div className="flex justify-center items-center">
                                            <button onClick={() => removeFromCart(id)}><AiFillMinusCircle className="text-xl text-red-500" /></button>

                                            <span className="mx-2.5">{cartItems[id]}</span>

                                            <button onClick={() => addToCart(id)}><IoIosAddCircle className="text-xl text-green-500" /></button>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;