import { useContext } from "react";
import { AuthContext } from "../../Provider/Context/Context";
import FoodCart from "../FoodCart/FoodCart";

const FoodDisplay = () => {
    const { allFoods } = useContext(AuthContext)
    return (
        <div className="grid grid-cols-4 gap-5">
            {
                allFoods.map(food => <FoodCart key={food.id} food={food}></FoodCart>)
            }
        </div>
    );
};

export default FoodDisplay;