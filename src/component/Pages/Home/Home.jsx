import { useContext } from "react";
import useTitle from "../../../hooks/UseTitle/UseTitle";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
import Header from "../Header/Header";
import { AuthContext } from "../../Provider/Context/Context";

const Home = () => {
    const { searchText } = useContext(AuthContext)
    useTitle("Home")
    return (
        <div className="md:mx-10 mx-5">
            {
                searchText ? "" : <Header></Header>
            }

            <ExploreMenu></ExploreMenu>
            <FoodDisplay></FoodDisplay>
        </div>
    );
};

export default Home;