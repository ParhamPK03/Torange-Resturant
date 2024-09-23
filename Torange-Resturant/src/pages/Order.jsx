import { useState } from "react";
import Login_Signup from "../Components/Login_Signup";

const Order = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-[98%] h-[738px] rounded-2xl bg-[#f1f1f1] border-1 border-gray-300 my-8 m-auto shadow-sm flex flex-col items-center gap-16">
      <div>
        <img src="/images/need_to_login.svg" className="w-[380px] h-[436px] mt-16" alt="" />
      </div>
      <div>
        <p className="text-xl font-bold text-[#646464] -mt-5">ابتدا وارد شوید!</p>
      </div>
      <div>
        <button
          className="bg-[#183d3d] w-[216px] h-[54px] text-white rounded-xl text-lg font-bold"
          onClick={openModal}
        >
          ورود / ثبت نام
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Login_Signup closeModal={closeModal} />
        </div>
      )}
    </div>
  );
}

export default Order;
