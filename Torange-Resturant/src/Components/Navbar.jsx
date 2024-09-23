import { FaHome } from 'react-icons/fa';
import { MdShoppingBag } from 'react-icons/md';
import { IoHeartOutline } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import R_logo from "../../public/images/Frame-229.svg";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { SiCodechef } from "react-icons/si";
const Navbar = () => {
  const { getTotalCartAmount, isLoggedIn, logout } = useContext(StoreContext);
  const navigate = useNavigate();
  const { totalCount } = getTotalCartAmount(); 

  

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='relative'>
      <div className='bg-[#024c4c] w-[93%] h-[90px] m-auto mt-10 rounded-3xl'>
        <div className='flex items-center justify-between'>
          <div className="flex items-center">
            <Link to='/'>
              <img src={R_logo} alt="Logo" className='w-[120px] mr-5 mt-4' />
            </Link>
            <div className='hidden lg:flex items-center gap-3 lg:gap-7 text-[#8cadae] text-2xl mt-6 mr-5 lg:mr-14'>
              <NavLink to="/" end className={({ isActive }) => isActive ? "text-white" : "text-[#8cadae]"}>
                <div className='flex flex-col items-center gap-1 cursor-pointer'>
                  <FaHome />
                  <span className='text-sm font-[500]'>خانه</span>
                </div>
              </NavLink>
              <NavLink to="/order" className={({ isActive }) => isActive ? "text-white" : "text-[#8cadae]"}>
                <div className='flex flex-col items-center gap-1 cursor-pointer'>
                  <MdShoppingBag />
                  <span className='text-sm font-[500]'>سفارشات</span>
                </div>
              </NavLink>
              <NavLink to="/likes" className={({ isActive }) => isActive ? "text-white" : "text-[#8cadae]"}>
                <div className='flex flex-col items-center gap-1 cursor-pointer'>
                  <IoHeartOutline />
                  <span className='text-sm font-[500]'>علاقه مندی ها</span>
                </div>
              </NavLink>
              <NavLink to="/cart"  className={({ isActive }) => isActive ? "text-white" : "text-[#8cadae]"}>
                <div className='flex flex-col items-center gap-1 cursor-pointer -mr-4'>
                  <div className='flex justify-center'>
                    {totalCount > 0 && (
                      <div className='bg-[#ffa600] text-white rounded-full text-[15px] w-4 h-4 -mt-2 flex items-center justify-center'>
                        <span className="text-[8px]">{totalCount}</span>
                      </div>
                    )}
                    <AiOutlineShoppingCart />
                  </div>
                  <span className='text-sm font-[500] mr-4'>سبد خرید</span>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center xs:ml-5 mt-4 md:ml-0">
              <div className="relative sm:flex hidden">
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="transition-all duration-500 cursor-pointer ease-in-out w-5 p-3 pl-10 border bg-[#024c4c] border-green-300 rounded-xl focus:outline-none focus:ring-2 hover:w-60 placeholder:text-green-300 placeholder:text-lg"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CiSearch className="h-5 w-5 text-green-300 ml-1" />
                </div>
              </div>
            </div>
            {isLoggedIn ? (
              <div onClick={handleLogout} className="bg-red-500 ml-7 mt-4 rounded-lg h-10 cursor-pointer flex">
                <span className="px-10 text-md text-white mt-1.5">خروج</span>
              </div>
            ) : (
              <Link to="/login_signup">
                <div className="bg-green-200 ml-7 mt-4 rounded-lg h-10 cursor-pointer md:flex hidden ">
                  <span className="px-10 text-md text-green-800 mt-1.5 ">ورود | ثبت نام</span>
                </div>
                  <SiCodechef className='md:hidden flex text-5xl text-green-200 mt-3 ml-3 cursor-pointer' />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex lg:hidden h-[90px] items-center shadow-sm fixed bottom-0 left-0 w-full bg-slate-50 border-t border-gray-300 text-white justify-around py-2 z-50">
      <NavLink to="/" end className={({ isActive }) => isActive ? "text-[#899292]" : "text-[#346365]"}>
                <div className='flex flex-col items-center gap-1 cursor-pointer'>
                  <FaHome className='text-2xl' />
                  <span className='text-sm font-[500]'>خانه</span>
                </div>
              </NavLink>
              <NavLink to="/order" className={({ isActive }) => isActive ? "text-[#899292]" : "text-[#346365]"}>
                <div className='flex flex-col items-center gap-1 cursor-pointer'>
                  <MdShoppingBag className='text-2xl' />
                  <span className='text-sm font-[500]'>سفارشات</span>
                </div>
              </NavLink>
              <NavLink to="/likes" className={({ isActive }) => isActive ? "text-[#899292]" : "text-[#346365]"}>
                <div className='flex flex-col items-center gap-1 cursor-pointer'>
                  <IoHeartOutline className='text-2xl' />
                  <span className='text-sm font-[500]'>علاقه مندی ها</span>
                </div>
              </NavLink>
              <NavLink to="/cart"  className={({ isActive }) => isActive ? "text-[#899292]" : "text-[#346365]"}>
                <div className='flex flex-col items-center gap-1 cursor-pointer -mr-4'>
                  <div className='flex justify-center'>
                    {totalCount > 0 && (
                      <div className='bg-[#ffa600] text-[#899292] rounded-full text-[15px] w-4 h-4 -mt-2 flex items-center justify-center'>
                        <span className="text-[8px]">{totalCount}</span>
                      </div>
                    )}
                    <AiOutlineShoppingCart  className='text-2xl'/>
                  </div>
                  <span className='text-sm font-[500] mr-4'>سبد خرید</span>
                </div>
              </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
