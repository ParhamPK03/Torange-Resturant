const RepresentationBox = ({ id, name, city, phone, phone2, img }) => {
  return (
    <div className="w-[306px] h-[300px] bg-white overflow-hidden duration-700 flex flex-col items-center rounded-xl cursor-pointer gap-4 relative group">
      <div className="transform group-hover:translate-y-[-84px] transition-transform duration-700 w-full flex flex-col items-center">
        <img src={img} className="rounded-t-xl w-full" alt={name} />
        <h2 className="text-xl text-gray-700 font-bold px-2  mt-3">{name}</h2>
        <span className="text-sm text-gray-600 font-bold px-3  mt-4">
          {phone} <span className="text-orange-400">|</span> {phone2}
        </span>
        <h4 className="text-gray-600 text-md font-bold px-3  mt-3">{city}</h4>
      </div>
      <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity  duration-300 absolute bottom-4">
        <button className="w-[256px] h-[46px] bg-[#183d3d] text-white rounded-xl text-md font-bold">
          اطلاعات بیشتر
        </button>
      </div>
    </div>
  );
};

export default RepresentationBox;
