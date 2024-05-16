import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        console.log(name);
        // Clear all form fields
        e.target.reset();

        setTimeout(() => {
            navigate('/')
        }, 2000)
    }

    return (
        <div>
            <div className="flex min-h-screen bg-gray-100">
                <div className="m-auto">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-5 bg-white rounded-lg shadow">
                                <div className="flex">
                                    <div className="flex-1 py-5 pl-5 overflow-hidden">
                                        <svg className="inline align-text-top" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                            <g>
                                                <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                                                <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                                                <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                                            </g>
                                        </svg>
                                        <h1 className="inline text-2xl font-semibold leading-none">Sender</h1>
                                    </div>
                                </div>
                                <div className="px-5 pb-5">
                                    <input placeholder="Name" type="text" name='name' required className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />

                                    <input placeholder="Number" name='number' type="number" required className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />

                                    <input placeholder="Address" name="address" type="text" required className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    <div className="flex">
                                        <div className="flex-grow w-1/4 pr-2">
                                            <input placeholder="PLZ" name='plz' type="number" required className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /></div>
                                        <div className="flex-grow">

                                            <input placeholder="City" name="city" type="text" required className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /></div>
                                    </div>
                                    <div className="flex items-center pt-3"><input type="checkbox" className="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent" /><label htmlFor="safeAdress" className="block ml-2 text-sm text-gray-900">Save as default address</label></div>
                                </div>
                                <div className="flex">
                                    <div className="flex-1 py-5 pl-5 overflow-hidden">
                                        <svg className="inline align-text-top" width="21" height="20.5" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                            <g>
                                                <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                                                <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                                                <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                                            </g>
                                        </svg>
                                        <h1 className="inline text-2xl font-semibold leading-none">Receiver</h1>
                                    </div>
                                    <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
                                </div>
                                <div className="px-5 pb-5">
                                    <input placeholder="Name" name="name2" type="text" required className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />

                                    <input placeholder="Number" name="number2" type="number" required className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />

                                    <input placeholder="Address" name="address2" type="text" required className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    <div className="flex">
                                        <div className="flex-grow w-1/4 pr-2">
                                            <input placeholder="PLZ" type="number" name='plz2' required className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /></div>
                                        <div className="flex-grow">
                                            <input placeholder="City" type="text" name='city2' required className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /></div>
                                    </div>

                                </div>
                                <hr className="mt-4" />
                                <div className=" p-3">
                                    <button type="submit" className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Place order</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;