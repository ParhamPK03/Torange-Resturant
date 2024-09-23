const UsersBox = ({ name, text, img }) => {
  return (
    <div className="group h-[228px] w-[406px] flex flex-col bg-white hover:bg-[#265e5e] cursor-pointer duration-300 items-center p-4 rounded-xl shadow-sm gap-2">
      <div><img src={img} alt="" /></div>
      <div><h3 className="font-bold text-gray-600 text-lg group-hover:text-white">{name}</h3></div>
      <div><p className="clamp-text text-sm text-gray-500 font-bold group-hover:text-white">{text}</p></div>
    </div>
  );
}

export default UsersBox;
