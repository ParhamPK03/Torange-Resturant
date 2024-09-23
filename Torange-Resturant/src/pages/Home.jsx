import { useState } from "react";
import MenuFoodBox from "../Components/MenuFoodBox";
import FoodBoxInfoes from "../Components/FoodBoxInfoes";
import TopMain from "../Components/TopMain";
import FoodSlider from "../Components/FoodSlider";
import SuggestFoodSlider from "../Components/SuggestFoodSlider";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Application from "../Components/Application";
import ServicesBox from "../Components/ServicesBox";
import UsersAll from "../Components/UsersAll";
import RepresentationAll from "../Components/RepresentationAll";
import ApplicationAll from "../Components/ApplicationAll";
import MapSectionFooter from "../Components/MapSectionFooter";
import Footer from "../Components/Footer";
import MyWebsite from "../Components/MyWebsite";

const Home = () => {
  const [category, setCategory] = useState("ساندویچ");

  return (
    <div className="min-h-[708vh] m-auto overflow-x-hidden">
      <TopMain/> 
      <div className="w-[86%] flex flex-wrap gap-2 justify-center my-10 m-auto xx:flex-nowrap xx:justify-start">
    <MenuFoodBox category={category} setCategory={setCategory} />
  
    </div>
      <div>
        <FoodBoxInfoes category={category} />
      </div>
      <div className="relative mt-3">
      <hr className="border-dashed  border-[#4c4c4c] absolute inset-x-0 top-1/2 transform -translate-y-1/2" />
       <p className="relative text-center bg-[#ebeaea] w-[190px] h-[30px] m-auto px-4 text-2xl font-bold text-gray-600">تخفیفات ویژه</p>
      </div>

      <div className="mt-20"> 
      <div className="w-[86%] bg-background-bg bg-no-repeat rounded-2xl m-auto bg-center bg-cover flex flex-col xs:h-[150px] lg:h-[250px]">
        <div className="w-[86%] m-auto -mt-16">
          <FoodSlider/>
        </div>
        </div>
      </div>

      <div className="relative mt-3">
      <hr className="border-dashed  border-[#4c4c4c]  absolute inset-x-0 top-1/2 transform -translate-y-1/2" />
       <p className="relative text-center bg-[#ebeaea] w-[190px] h-[30px] m-auto px-4 text-xl font-bold text-gray-600">پیشنهاد سرآشپز</p>
      </div>

    <div className="w-[86%] m-auto mt-16">
        <SuggestFoodSlider/>
        <Link to="/showall">
        <button className="flex items-center justify-center gap-2 w-[158px] h-[46px] bg-[#A7D39766] rounded-xl text-md font-bold text-[#183D3D] m-auto mt-10 hover:gap-4 duration-500">مشاهده همه <IoIosArrowRoundBack className="text-2xl bg-white outline-none rounded-md mt-1" /></button>
        </Link>
    </div>

    <div className="sm:mt-40 "> 
      <div className="w-[90%] bg-background-bg bg-no-repeat rounded-2xl m-auto bg-center bg-cover sm:flex hidden flex-col h-[300px]  md:h-[220px]">
        <div className="w-[86%] m-auto -mt-32">
          <Application/>
        </div>
        </div>
      </div>

      <div className="relative sm:mt-52 mt-10">
      <hr className="border-dashed  border-[#4c4c4c]  absolute inset-x-0 top-1/2 transform -translate-y-1/2" />
       <p className="relative text-center bg-[#ebeaea] w-[190px] h-[30px] m-auto px-4 text-2xl font-bold text-gray-600">خدمات ما</p>
      </div>

      <div className="w-[75%] m-auto mt-20">
        <ServicesBox/>
      </div>

      <div className="relative mt-16">
      <hr className="border-dashed  border-[#4c4c4c]  absolute inset-x-0 top-1/2 transform -translate-y-1/2" />
       <p className="relative text-center bg-[#ebeaea] w-[190px] h-[30px] m-auto px-4 text-2xl font-bold text-gray-600">نظرات مشتریان</p>
      </div>

      <div className="w-[90%] m-auto">
        <UsersAll />
      </div>

      <div className="relative mt-16">
      <hr className="border-dashed  border-[#4c4c4c]  absolute inset-x-0 top-1/2 transform -translate-y-1/2" />
       <p className="relative text-center bg-[#ebeaea] w-[220px] h-[30px] m-auto px-4 text-2xl font-bold text-gray-600">نمایندگی های ترنج</p>
      </div>

      <div className="w-[90%] mx-auto mt-16">
        <RepresentationAll/>
      </div>

      <div className="relative mt-28">
      <hr className="border-dashed  border-[#4c4c4c]  absolute inset-x-0 top-1/2 transform -translate-y-1/2" />
       <p className="relative text-center bg-[#ebeaea] w-[280px] h-[30px] m-auto px-4 text-2xl font-bold text-gray-600">راه های ارتباطی با ترنج</p>
      </div>

      <div className="w-[90%] mx-auto mt-16">
        <ApplicationAll/>
      </div>

      <div className="mt-16">
        <MapSectionFooter/>
      </div>

      <div className="flex justify-center mt-28">
        <Footer/>
      </div>

      <div>
        <MyWebsite/>
      </div>

    </div>
  );
};

export default Home;
