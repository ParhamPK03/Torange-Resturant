import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const MiddleMain = ({ id, title, newprice, img }) => {
    

    const {addToCart} = useContext(StoreContext);

    return (
        <div>
            <div className="flex flex-col gap-3 items-center">
                <img src={img} alt={title} className="lg:w-[150px] lg:h-[150px] xs:w-[100px] xs:h-[100px] object-cover" />
                <div><p className="lg:text-xl sm:text-md xs:text-sm font-bold text-white">{title}</p></div>
                <div><p className="lg:text-md xs:text-sm font-[500] text-white">{newprice} تومان</p></div>
                <div>
                    <button 
                        onClick={()=>addToCart(id)}
                        className="lg:w-[80px] lg:h-[50px] xs:w-[50px] lg:text-lg xs:text-sm xs:h-[30px] rounded-lg text-white bg-[#055b5f] cursor-pointer hover:bg-green-200 hover:text-slate-800"
                    >
                        سفارش
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MiddleMain;
