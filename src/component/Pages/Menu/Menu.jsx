import useTitle from "../../../hooks/UseTitle/UseTitle";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import FoodDisplay from "../FoodDisplay/FoodDisplay";

const Menu = () => {
    useTitle('Menu')
    return (
        <div className="md:mx-10 mx-5">
            <ExploreMenu></ExploreMenu>
            <FoodDisplay></FoodDisplay>
        </div>
    );
};

export default Menu;