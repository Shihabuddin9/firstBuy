import googleApp from '../../../assets/mobile-appp/download.jpg'
import playStoreApp from '../../../assets/mobile-appp/download.png'
const AppDownload = () => {
    return (
        <div className="text-center min-h-screen mt-16">
            <h3 className="text-3xl font-bold">For Better Experience Download</h3>
            <h2 className='my-4'><span className="text-3xl font-serif"><span className="text-4xl text-red-700">F</span>irstBuy</span></h2>
            <div className='flex justify-center items-center'>
                <img className='mr-5  w-28 cursor-pointer hover:transform hover:scale-105 hover:duration-500' src={googleApp} alt="" />
                <img className='w-28 cursor-pointer hover:transform hover:scale-105 hover:duration-500' src={playStoreApp} alt="" />
            </div>
        </div>
    );
};

export default AppDownload;