import Navbar from "../../Shared/Navbar/Navbar";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Header></Header>
            <ExploreMenu></ExploreMenu>
        </div>
    );
};

export default Home;