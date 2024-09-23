import { TfiTimer } from "react-icons/tfi";


const FoodInfoes = ({img,newprice,title,text}) => {
  return (
    <div className="bg-white m-auto rounded-2xl w-[600px] h-[250px]">
        
        <div className="flex  justify-between pt- px-4">
            <div><img src={img} className="w-[350px] h-[180px] mt-5" alt="" /></div>
            <div className="mr-7">
                <div className="flex items-center justify-between text-gray-700 font-bold text-lg mt-">
                    <span>{title}</span>
                    <span>{newprice} تومان</span>
                </div>
                <div className="flex items-center gap-10 text-gray-600 mt-5">
                    <div><span className="text-sm">زمان آماده شدن:</span></div>
                    <div className="flex items-center"><span><TfiTimer /></span>
                    <span className="text-sm mr-2">20 دقیقه</span></div>
                    
                </div>
                <div className="flex flex-col items-start mt-10">
                    <span className="text-gray-600 font-bold text-md">محتویات :</span>
                    <span className="text-gray-500 text-md mt-3">{text}</span>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default FoodInfoes
