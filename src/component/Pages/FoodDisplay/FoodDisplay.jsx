import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/Context/Context";
import FoodCart from "../FoodCart/FoodCart";

const FoodDisplay = () => {
    const { displayFood, allFoods, setDisplayFood } = useContext(AuthContext)

    useEffect(() => {
        setDisplayFood(allFoods)
    }, [allFoods])
    return (
        <div>
            <hr className="mb-10" />
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    displayFood?.map(food => <FoodCart key={food.id} food={food}></FoodCart>)
                }
            </div>
        </div>
    );
};

export default FoodDisplay;