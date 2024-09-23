import { useState } from 'react';
import { Food_Menu } from "../assets/Item_Infoes";

const MenuFoodBox = ({ category, setCategory }) => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleClick = (title_menu) => {
    setSelectedBox(prev => prev === title_menu ? null : title_menu);
    setCategory(prev => prev === title_menu ? "All" : title_menu);
  };

  return (
    <>
      {
        Food_Menu.map((item, index) => {
          const isSelected = selectedBox === item.title_menu;
          return (
            <div 
              onClick={() => handleClick(item.title_menu)} 
              key={index} 
              className={` shadow-sm w-[140px] h-[130px] flex flex-col rounded-xl cursor-pointer relative 
                          ${isSelected ? "bg-green-300 border-2 border-dashed border-black delay-75 " : "bg-white"}`}
            >
              <img 
                className={`w-[55px] m-auto ${category === item.title_menu ? "active" : ""}`} 
                src={item.img} 
                alt={item.title_menu}
              />
              <span className="m-auto font-bold mb-2 text-sky-800">{item.title_menu}</span>
            </div>
          );
        })
      }
    </>
  );
};

export default MenuFoodBox;
