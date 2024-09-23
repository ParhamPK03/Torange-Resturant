import { Link } from "react-router-dom";
import Pizza from  "../../public/images/pizza.686b50b7.webp";
import leaf from "../../public/images/leaf (1).svg";

const TopMain = () => {
  return (
    <div>
      <div className="bg-[#024c4c] md:h-[300px] lg:h-[440px] w-[91%] m-auto mt-10 rounded-3xl overflow-hidden">
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <img
              src={leaf}
              alt="Leaf decoration"
              className="rotate-[200deg] lg:flex hidden mt-48 object-cover lg:w-[100px] xs:w-[80px]"
            />
            <div className="flex flex-col gap-3 justify-start ml-4 mr-7 lg:mr-0">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#ffa600] rounded-full mt-1.5 ml-1"></span>
                <span className="text-gray-400 md:text-sm text-xs">سفارش میپذیریم</span>
              </div>
              <h1 className="lg:text-2xl text-white font-bold  sm:text-sm sh:text-3xl  ">
                تجربه غذایی لذیذ و به یادماندنی
              </h1>
              <p className="w-[48ch] text-gray-400 xs:leading-[25px] lg:leading-[35px] lg:text-sm text-xs hidden md:flex border-r pr-2 border-sky-700">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
                سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
              </p>
              <div className="flex justify-between">
                <Link to="/about">
                  <button className="text-[#024c4c] bg-green-200 md:w-[140px] md:h-10 rounded-lg font-bold text-xs w-[90px] h-7 md:text-sm ml-2">
                    اطلاعات رستوران
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img
              src={Pizza}
              alt="Pizza"
              className="xl:mt-3 lg:mt-16 xs:w-[220px] sm:w-[350px] md:w-[450px] xl:w-[600px] left-0 sh:w-[500px] "
            />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMain;
