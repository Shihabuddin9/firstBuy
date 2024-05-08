import './Header.css'
import headerImg from '../../../assets/header-img/header-img.jpg'
const Header = () => {
    return (
        <div className="mt-5">
            <div className="relative">
                <img className="rounded-2xl mx-auto w-full header-img-size" src={headerImg} alt="" />
                <div className="absolute inset-0 md:left-16 left-4 md:top-48 top-20">
                    <div className="text-white md:w-2/3">
                        <h2 className="text-sm md:text-xl lg:text-2xl xl:text-4xl font-semibold">I would love to order my favorite food!</h2>
                        <p className="md:my-5 text-sm lg:text-base xl:text-lg hidden md:block">Explore diverse cuisines, discover top-rated restaurants, and satisfy your cravings with our curated selection of mouthwatering dishes.</p>
                        <button className="btn btn-sm lg:btn-md xl:btn-lg btn-outline btn-info mt-5 md:mt-0 duration-700">View Menu</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;