import { useState, useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import MyMap from "../Components/MyMap";
import Swal from "sweetalert2";
const MapSectionFooter = () => {
  const { isLoggedIn } = useContext(StoreContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("انتقاد"); 
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (name.length < 3) {
      return "نام باید حداقل 6 کاراکتر باشد.";
    }
    if (phone.length !== 11) {
      return "شماره تماس باید 11 رقم باشد.";
    }
    if (!subject || !message) {
      return "لطفاً تمامی فیلدها را پر کنید.";
    }
    return null;
  };

  const handleSubmit = () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: 'error',
        title: 'خطا!',
        text: 'برای ارسال پیام باید وارد شده باشید.',
        confirmButtonText: 'باشه',
        confirmButtonColor: '#3085d6'
      });
      return;
    }

    const errorMessage = validateForm();
    if (errorMessage) {
      Swal.fire({
        icon: 'error',
        title: 'خطا!',
        text: errorMessage,
        confirmButtonText: 'باشه',
        confirmButtonColor: '#3085d6'
      });
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        Swal.fire({
          icon: 'success',
          title: 'موفقیت!',
          text: 'پیام شما با موفقیت ثبت گردید.',
          confirmButtonText: 'باشه',
          confirmButtonColor: '#3085d6'
        });
      }, 2000);
    }
  };

  return (
    <div className="relative">
  <div className={`max-w-[95%] w-full min-h-[556px] py-10 bg-white rounded-2xl flex flex-col md:flex-row justify-between mx-auto px-4 md:px-10 pt-8 ${isSubmitting ? "opacity-50" : "opacity-100"}`}>
    <div className="w-full md:w-auto">
      <h1 className="text-2xl font-bold text-gray-600">با ما در ارتباط باشید.</h1>
      <div className="flex flex-wrap items-center gap-3 mt-6">
        <div className="flex flex-col gap-3">
          <span className="text-gray-500 ">نام و نام خانوادگی:</span>
          <input
            type="text"
            placeholder="پوریا پورخانی"
            className="bg-gray-100 outline-none rounded-md w-full md:w-[358px] h-[47px] pr-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-gray-500">شماره تماس:</span>
          <input
            type="number"
            placeholder="09118385506"
            className="bg-gray-100 outline-none rounded-md w-full md:w-[358px] h-[47px] pr-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <span className="text-gray-500">موضوع درخواستی:</span>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="subject"
              value="انتقاد"
              checked={subject === "انتقاد"}
              onChange={(e) => setSubject(e.target.value)}
              className="form-radio"
            />
            <span>انتقاد</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="subject"
              value="پیشنهاد"
              checked={subject === "پیشنهاد"}
              onChange={(e) => setSubject(e.target.value)}
              className="form-radio"
            />
            <span>پیشنهاد</span>
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <span className="text-gray-500">موضوع پیام:</span>
        <textarea
          placeholder="متن پیام را وارد کنید"
          className="bg-gray-100 outline-none rounded-md  h-[101px] ml-3 pr-3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-end">
        <button
          className="h-[40px] w-[119px] ml-3 bg-[#183D3D] text-sm font-bold rounded-lg mt-7 text-white"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          ارسال پیام
        </button>
      </div>
    </div>
    <div className="w-full md:w-[518px] h-[502px]  overflow-hidden rounded-md z-10 mt-6 md:mt-0">
      <MyMap />
    </div>
  </div>
</div>

  );
};

export default MapSectionFooter;
