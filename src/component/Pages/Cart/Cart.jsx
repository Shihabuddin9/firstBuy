import { useContext } from "react";
import { AuthContext } from "../../Provider/Context/Context";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const Cart = () => {
    const { allFoods, cartItems, formattedPrice, totalItemsInShoppingCart, addToCart, removeFromCart, handleRemoved } = useContext(AuthContext)

    let Shipping = 10;
    let totalPrice = formattedPrice + Shipping
    const totalPriceAndShipping = totalPrice.toFixed(2)
    return (
        <div>
            {
                totalItemsInShoppingCart > 0 ?
                    <div className="bg-gray-100">
                        <div className="container mx-auto md:mt-10">
                            <div className="lg:flex shadow-md md:my-10 my-2">
                                <div className="lg:w-3/4 bg-white md:px-10 px-1 py-10">
                                    <div className="flex justify-between border-b pb-8">
                                        <h1 className="font-semibold md:text-2xl text-lg">Shopping Cart</h1>
                                        <h2 className="font-semibold md:text-2xl">{totalItemsInShoppingCart} {totalItemsInShoppingCart > 0 ?
                                            <span>{totalItemsInShoppingCart.length} {totalItemsInShoppingCart === 1 ? 'items' : 'item'}</span>
                                            :
                                            <span className="text-red-400">Empty shopping cart</span>
                                        }</h2>
                                    </div>
                                    <div className="flex mt-10 mb-5">
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                                        <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                                        <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                                    </div>
                                    {
                                        allFoods.map(food => {
                                            if (cartItems[food.id] > 0) {
                                                return (

                                                    <div key={food.id} className="flex items-center hover:bg-gray-100 md:-mx-8 ml-[-3rem] mr-0 md:px-6 py-5">
                                                        <div className="flex w-2/5">

                                                            <div className="w-16 md:w-20">
                                                                <img className="h-16 md:h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
                                                            </div>
                                                            <div className="flex flex-col justify-between md:ml-4 flex-grow">
                                                                <span className="font-bold text-sm"><img className="w-14" src={food.image} alt="" /></span>
                                                                <span className="text-red-500 text-xs">{food.name}</span>
                                                                <span onClick={() => handleRemoved(food.id)} className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer">Remove</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-center items-center w-1/5">
                                                            <FiMinus onClick={() => removeFromCart(food.id)} className=" text-gray-600 text-xl cursor-pointer" />

                                                            <input className="mx-2 border text-center w-8" type="text" value={cartItems[food.id]} />
                                                            <IoIosAdd onClick={() => addToCart(food.id)} className=" text-gray-600 text-2xl cursor-pointer" />
                                                        </div>
                                                        <span className="text-center w-1/5 font-semibold text-sm">${food.price}</span>
                                                        <span className="text-center w-1/5 font-semibold text-sm">${food.price * cartItems[food.id]}</span>
                                                    </div>
                                                )
                                            }
                                        })
                                    }


                                    <Link to='/menu' className="flex font-semibold text-indigo-600 text-sm mt-10">

                                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                        Continue Shopping
                                    </Link>
                                </div>

                                {/* side bar */}
                                <div id="summary" className="lg:w-1/4 px-8 py-10">
                                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                                    <div className="flex justify-between mt-10 mb-5">
                                        <span className="font-semibold text-sm uppercase">{totalItemsInShoppingCart > 0 ? 'items' : 'item'} {totalItemsInShoppingCart}</span>
                                        <span className="font-semibold text-sm">{formattedPrice}$</span>
                                    </div>
                                    <div>
                                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                        <select className="block p-2 text-gray-600 w-full text-sm">
                                            <option>Standard shipping - ${Shipping}.00</option>
                                        </select>
                                    </div>
                                    <div className="py-10">
                                        <label className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                                    </div>
                                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                                    <div className="border-t mt-8">
                                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                            <span>Total cost</span>
                                            <span>${totalPriceAndShipping}</span>
                                        </div>
                                        <Link to="/placeOrder"> <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Place order</button></Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    :
                    <div className="min-h-screen flex justify-center items-center">
                        <div className="space-y-20">
                            <p className="text-red-500 font-bold text-3xl  mt-20">Empty shopping cart</p>
                            <Link to='/menu' className="flex font-semibold text-indigo-600 text-sm">

                                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
            }

        </div>
    );
};

export default Cart;
