import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Context/Context';

const ExploreMenu = () => {
    const { handleFilterFood } = useContext(AuthContext)
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem(index);
    };
    return (
        <div className="mt-10 mb-10 md:mb-10">
            <div className="md:w-3/5">
                <h2 className="text-xl md:text-2xl font-semibold">Discover Our Delectable Menu</h2>
                <p className="mt-4 text-sm text-gray-900">Indulge in culinary delights with our diverse menu featuring tantalizing dishes crafted to satisfy every palate and craving. Explore now!</p>
            </div>
            <div className="mt-10 md:mt-7">
                <ul className="grid grid-cols-3 md:flex md:justify-between md:gap-0 gap-5">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer border px-2 py-1 rounded text-center 
                                        ${activeItem === index ? 'bg-yellow-200 text-sky-400' : 'text-sky-400'} 
                                        hover:bg-yellow-200 hover:text-sky-400 `}
                            onClick={() => {
                                handleItemClick(index)
                                handleFilterFood(item)
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Define menu items array
const menuItems = [
    "All Foods", "Pasta", "Salad", "Rolls", "Desserts", "Sandwich",
    "Cake", "Veg", "Noodles"
];

export default ExploreMenu;
