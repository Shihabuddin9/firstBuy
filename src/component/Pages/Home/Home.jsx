import useTitle from "../../../hooks/UseTitle/UseTitle";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
import Header from "../Header/Header";

const Home = () => {
    useTitle("Home")
    return (
        <div className="md:mx-10 mx-5">
            <Header></Header>
            <ExploreMenu></ExploreMenu>
            <FoodDisplay></FoodDisplay>
        </div>
    );
};

export default Home;