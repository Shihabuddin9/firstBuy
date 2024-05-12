import { useContext } from "react";
import { AuthContext } from "../../Provider/Context/Context";
import FoodCart from "../FoodCart/FoodCart";

const FoodDisplay = () => {
    const { allFoods } = useContext(AuthContext)
    return (
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {
                allFoods.map(food => <FoodCart key={food.id} food={food}></FoodCart>)
            }
        </div>
    );
};

export default FoodDisplay;