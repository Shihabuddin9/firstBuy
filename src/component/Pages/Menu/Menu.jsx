import ExploreMenu from "../ExploreMenu/ExploreMenu";
import FoodDisplay from "../FoodDisplay/FoodDisplay";

const Menu = () => {
    return (
        <div className="md:mx-10 mx-5">
            <ExploreMenu></ExploreMenu>
            <FoodDisplay></FoodDisplay>
        </div>
    );
};

export default Menu;