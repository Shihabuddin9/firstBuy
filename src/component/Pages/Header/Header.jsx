import './Header.css'
import headerImg from '../../../assets/header-img/header-img.jpg'
const Header = () => {
    return (
        <div className="">
            <div className="relative">
                <img className="rounded-2xl mx-auto" src={headerImg} alt="" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white md:w-1/3">
                        <h2 className="text-sm md:text-xl lg:text-2xl xl:text-4xl font-semibold">I would love to order my favorite food!</h2>
                        <p className="md:my-5 text-sm lg:text-base xl:text-lg hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est numquam quaerat cum autem veniam veritatis eligendi quisquam voluptatem reiciendis libero?</p>
                        <button className="btn btn-sm lg:btn-md xl:btn-lg btn-outline btn-info mt-5 md:mt-0 duration-700">View Menu</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;