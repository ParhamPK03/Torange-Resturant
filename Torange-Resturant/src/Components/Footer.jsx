import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#183D3D] w-[1350px] min-h-[500px] rounded-2xl shadow-sm">
       <div className="flex items-center justify-between mx-8 mt-8">
            <img src="/images/Frame-229.svg" alt="" />
            <span className="text-white font-bold">
             <span className="text-md font-bold"> تماس با ترنج </span> <span className="text-green-700">|</span> 32322485 <span className="text-[#FFA600]">_021</span>
            </span>
       </div>
       <div className="flex flex-wrap gap-3 justify-between my-10 mx-8">
       <div className="flex flex-col items-start">
        <h2 className="font-bold text-white mx-8 ">درباره ترنج</h2>
        <div className="flex flex-col items-start text-gray-400 mx-8 mt-3 leading-[30px] text-sm font-bold">
            <span>به رستوران ما خوش آمدید! ما با محیط دلنشین، غذاهای خوشمزه و خدمات عالی،</span>
            <span>تجربه‌ای لذت‌بخش برای شما فراهم می‌کنیم. همیشه خوشحال می‌شویم که شما را در</span>
            <span>میان مهمانانمان دیدار کنیم. با فضایی آرامش بخش و غذاهایی متنوع و لذیذ،</span>
            <span>رستوران ما مناسبترین انتخاب برای تمام لحظات شاد و لذت بخش شماست.</span>
        </div>
        <div className="flex items-center justify-between gap-36 mt-5 mr-8">
            <div><img src="/images/trust/image_2024-05-08_141417850.png" alt="" className="w-[150px] h-[150px]" /></div>
            <div><img src="/images/trust/image_2024-05-09_124035747.png" alt="" className="w-[150px] h-[150px]" /></div>
        </div>
       </div>
       
       <div className="flex flex-col items-start">
        <h2 className="font-bold text-white">لینک های مفید</h2>
        <div className="flex flex-col gap-3 mt-5">
            <Link to="/">
            <span className="text-gray-400 cursor-pointer font-bold hover:text-gray-300 duration-300">خانه</span>
            </Link>
            <Link to="/order">
            <span className="text-gray-400 cursor-pointer font-bold hover:text-gray-300 duration-300">سفارشات</span>
            </Link>
            <Link to="/likes">
            <span className="text-gray-400 cursor-pointer font-bold hover:text-gray-300 duration-300">علاقمندی</span>
            </Link>
            <Link to="/cart">
            <span className="text-gray-400 cursor-pointer font-bold hover:text-gray-300 duration-300">سبد خرید</span>
            </Link>
            <Link to="/about">
            <span className="text-gray-400 cursor-pointer font-bold hover:text-gray-300 duration-300">درباره ما</span>
            </Link>
        </div>
       </div>
       <div className="flex flex-col items-start gap-3">
        <h2 className="font-bold text-white">اطلاعات تماس با ترنج</h2>
        <div className="flex items-center gap-2 font-bold text-slate-100">
            <span><SlLocationPin /></span>
            <span>آدرس :</span>
        </div>
        <div className="flex items-center gap-2 font-bold text-slate-100">
            <span><MdOutlinePhoneInTalk /></span>
            <span>تلفن تماس :</span>
        </div>
        <div className="flex items-center gap-2 font-bold text-slate-100">
            <span><FaInstagram /></span>
            <span>آدرس اینستاگرام :</span>
        </div>
        <div className="flex items-center gap-2 font-bold text-slate-100">
            <span><CiClock2 /></span>
            <span>ساعات کاری کافه رستوران ترنج:</span>
        </div>
        <div className="flex flex-col items-start mt-1">
        <span className="text-gray-400 font-bold text-sm">همه روزه (بجز جمعه ها) : 8 صبح الی 3 بعد از ظهر و 4 عصر الی 11</span>
        <span className="text-gray-400 font-bold text-sm">شب جمعه ها: 4 عصر الی 11 شب</span>
        </div>
       </div>
       
       </div>
    </div>
  )
}

export default Footer
