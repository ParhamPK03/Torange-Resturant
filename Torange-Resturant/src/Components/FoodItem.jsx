import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { CiHeart } from "react-icons/ci";

const FoodItem = ({ id, img, title, offs, oldprice, newprice, text }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(id);
    };

    const handleRemoveFromCart = (e) => {
        e.stopPropagation();
        removeFromCart(id);
    };

    return (
        <div>
            <div className="bg-white w-[420px] h-[270px] rounded-2xl shadow-sm cursor-pointer">
                <div className="flex gap-3 p-5">
                    <div>
                        <img src={img} alt="" className="w-[400px] h-[120px] mt-3 mr-3" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <p className="text-gray-600 font-[800] text-xl mt-3">{title}</p>
                            <CiHeart className="text-xl mt-4" />
                        </div>
                        <div>
                            <p className="clamp-text text-gray-500 text-md mt-2">{text}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-b-[3px] border-dashed"></div>
                </div>
                <div className="flex justify-between">
                    {
                        !cartItems[id]
                            ? <p onClick={handleAddToCart} className="bg-gray-300 w-12 h-10 mt-7 mr-4 text-xl text-gray-400 pr-4 pt-1 cursor-pointer rounded-md hover:bg-slate-700">+</p>
                            : <div className="flex gap-3 mr-1">
                                <p onClick={handleRemoveFromCart} className="bg-gray-300 w-10 h-8 mt-7 mr-4 text-xl text-gray-400 pr-4 cursor-pointer rounded-md hover:bg-slate-700">-</p>
                                <p className="mt-8 text-slate-800 pr-2">{cartItems[id]}</p>
                                <p onClick={handleAddToCart} className="bg-gray-300 w-10 h-8 mt-7 mr-4 text-xl text-gray-400 pr-3 cursor-pointer rounded-md hover:bg-slate-700">+</p>
                            </div>
                    }
                    <div className="flex flex-col">
                        <div className="flex gap-3">
                            <p className="text-sm text-gray-500 line-through mt-7 mr-1">{oldprice}</p>
                            {offs && <p className={`w-12 h-6 rounded-md mt-7 ml-3 pr-3 text-white ${offs ? "bg-[#ffa600]" : ""}`}>{offs}</p>}
                        </div>
                        <div>
                            <p className="text-lg font-[600] text-gray-600 ml-2">{newprice} تومان </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
