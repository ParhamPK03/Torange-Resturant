import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const SuggestFoodBox = ({ id, title, text, newprice, img }) => {
    
    const {addToCart} = useContext(StoreContext);
    
    return (
        <div className="relative w-[300px] h-[450px] bg-white rounded-xl shadow-sm flex flex-col gap-1 p-2 items-center mx-auto">
            <div>
                <img src={img} className="w-[172px] h-[175px] mt-9" alt={title} />
            </div>
            <div>
                <p className="text-xl font-bold text-gray-700">{title}</p>
            </div>
            <div>
                <p className="clamp-text text-gray-500 text-md font-[500] mt-2">{text}</p>
            </div>
            <div>
                <p className="text-lg font-bold text-gray-600 mt-3">{newprice} تومان</p>
            </div>
            <div>
                <button
                    onClick={()=>addToCart(id)}
                    className="w-[254px] h-[54px] bg-[#ededed] text-[#909090] font-bold text-md mt-2 rounded-xl"
                >
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    );
};

export default SuggestFoodBox;
