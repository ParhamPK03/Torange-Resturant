import { IoIosArrowRoundBack } from "react-icons/io";

const ApplicationBox = ({text,img,title}) => {
  return (
    <div className='w-[293px] h-[125px] bg-white cursor-pointer hover:opacity-75  flex justify-between items-center px-5 rounded-2xl shadow-sm'>
      <div className="flex gap-4 ">
        <div><img src={img} alt="" className= "" /></div>
        <div className="flex flex-col">
            <h2> در <span className="text-[#183d3d] font-bold text-2xl ">{title}</span></h2>
            <p className="text-gray-500 mt-1 ">{text}</p>
        </div>
      </div>
      <div>
      <IoIosArrowRoundBack className="bg-gray-100 w-[36px] h-[36px] rounded-lg" />
      </div>
    </div>
  )
}

export default ApplicationBox

