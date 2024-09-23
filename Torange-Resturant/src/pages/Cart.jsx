import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const Cart = () => {
    const { cartItems, Food_list, getTotalCartAmount, removeFromCart } = useContext(StoreContext);
    
   
    const deliveryFee = 15;
    
   
    const { totalAmount: totalCartAmount } = getTotalCartAmount();
    const totalAmountWithDelivery = totalCartAmount + deliveryFee;

    const cartKeys = Object.keys(cartItems);
    const hasItems = cartKeys.length > 0;

    return (
        <div>
            {hasItems ? (
                <div className="flex xl:flex-nowrap xs:flex-wrap  gap-10 my-10">
                    <table className="w-[70%] table-auto shadow-sm xl:mr-16 bg-white rounded-2xl xs:m-auto  ">
                        <thead>
                            <tr className="text-white text-md  font-bold ">
                                <th className="py-4 pr-12 text-right text-[#79cdcd]">تصویر</th>
                                <th className="py-4 pr-16 text-right text-[#79cdcd]">نام</th>
                                <th className="py-4 pr-5 text-right text-[#79cdcd]">تعداد</th>
                                <th className="py-4 pr-16 text-right text-[#79cdcd]">قیمت واحد</th>
                                <th className="py-4 pr-8 text-right text-[#79cdcd]">قیمت کل</th>
                                <th className="py-4 pr-8 text-right text-[#79cdcd]">عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartKeys.map(itemId => {
                                const item = Food_list.find(product => product._id === itemId);
                                const quantity = cartItems[itemId];
                                const unitPrice = item?.newprice || 0;
                                const totalPrice = unitPrice * quantity;

                                return (
                                    <tr key={itemId} className="border-b">
                                        <td className="p-4">
                                            <img src={item?.img} alt={item?.title} className="lg:w-28 lg:h-28 w-16 h-16 object-cover" />
                                        </td>
                                        <td className="p-4">{item?.title}</td>
                                        <td className="p-4 text-center">{quantity}</td>
                                        <td className="p-4 text-center">{unitPrice.toLocaleString()} تومان</td>
                                        <td className="p-4 text-center">{totalPrice.toLocaleString()},000 تومان</td>
                                        <td className="p-4 text-center">
                                            <button onClick={() => removeFromCart(itemId)} className="text-red-500 text-2xl">x</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="bg-white border border-gray-300 xl:ml-16 w-[700px] h-[250px] rounded-2xl xs:m-auto">
                        <h2 className="flex justify-center text-xl bg-[#4fc1c1] text-white font-bold py-2 rounded-t-2xl">صورت حساب</h2>
                        <div className="flex items-center justify-between px-4 pt-3">
                            <div className="flex flex-col items-start gap-4">
                                <span className="bg-[#3fa0a0] text-white p-2 rounded-lg">قیمت کل</span>
                                <span className="text-gray-600">هزینه ارسال</span>
                                <span className="text-lg text-gray-600">زمان تحویل</span>
                                <span className="bg-[#317b7b] text-white p-2 rounded-lg">مجموع</span>
                            </div>
                            <div className="flex flex-col items-end gap-4">
                                <span className="text-[#3fa0a0] text-lg">{totalCartAmount.toLocaleString()},000 تومان</span>
                                <span className="text-gray-600">{deliveryFee.toLocaleString()},000 تومان</span>
                                <span className="text-lg text-gray-600">25 دقیقه</span>
                                <span className="text-[#317b7b] text-lg">{totalAmountWithDelivery.toLocaleString()},000 تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-[98%] h-[678px] rounded-2xl bg-[#f1f1f1] border-1 border-gray-300 my-7 m-auto flex flex-col items-center gap-12">
                    <div><img src="/images/no_order.svg" className="w-[380px] h-[380px] mt-16" alt="No orders" /></div>
                    <div><p className="text-xl font-bold text-[#646464] -mt-5">هنوز محصولی اضافه نکردی !</p></div>
                    <div><button className="bg-[#183d3d] w-[267px] h-[51px] text-white rounded-xl text-lg font-bold"><a href="/">بازگشت به منو رستوران</a></button></div>
                </div>
            )}
        </div>
    );
};

export default Cart;
