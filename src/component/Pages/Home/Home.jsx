import Navbar from "../../Shared/Navbar/Navbar";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="md:mx-10 mx-5">
            {/* <Navbar></Navbar> */}
            <Header></Header>
            <ExploreMenu></ExploreMenu>
            <FoodDisplay></FoodDisplay>
        </div>
    );
};

export default Home;