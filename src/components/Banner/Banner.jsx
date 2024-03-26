import BannerImg from "../../assets/images/banner.png";

const Banner = () => {
    return (
        <div className="md:px-[10%] py-[12%] flex flex-col md:flex-row justify-between items-center gap-20 bg-[#1313130D] rounded-3xl">
            <div className="flex-1 text-center md:text-start">
                <h1 className="text-4xl md:text-[56px] font-bold text-[#131313] md:mb-12 leading-[84px]">
                    Books to freshen
                    <br />
                    up your bookshelf
                </h1>
                <button className="btn btn-outline bg-[#23BE0A] text-[#FFFFFF] rounded-lg md:text-lg font-medium">
                    View The List
                </button>
            </div>
            <div className="flex justify-center w-[66%] md:w-[30%]">
                <img src={BannerImg} alt="BookImg" />
            </div>
        </div>
    );
};

export default Banner;
