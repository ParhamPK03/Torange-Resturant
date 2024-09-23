

const Application = () => {
  return (
    <div className='flex gap-3 justify-between items-center md:mt-0 mt-40 '>
        <div className='xxxx:flex md:hidden flex flex-col justify-center gap-5'>
          <h1 className="text-white xl:text-4xl text-2xl font-bold mt-10 xxxxx:mt-0">دانلود <span className="text-[#A7D397]">اپلیکیشن</span> ترنج</h1>
          <p className="text-[#79acac]  text-sm xl:flex hidden xs:flex">با نصب اپلیکیشن ترنج راحت تر سفارشتو ثبت کن و <br />از غذات لذت ببر.</p>
        </div>
        <div className='grid  xs:grid-cols-1   md:grid-cols-2 gap-3'>
            <div className='flex items-center justify-evenly p-3 cursor-pointer w-[184px] h-[52px] bg-white text-gray-400 rounded-lg font-bold'>
              <span>دریافت از </span>
              <div>
                <span></span>
              <img src="/images/logos/Untitled-3.png" className='w-[50px] h-[50px]' alt="" />
              </div>
              </div>
              <div className='flex items-center cursor-pointer justify-evenly p-3 w-[184px] h-[52px] bg-white text-gray-400 rounded-lg font-bold'>
              <span>دریافت از </span>
              <div className="flex items-center gap-1 mr-1">
                <span className="font-bold text-gray-600">گوگل پلی</span>
              <img src="/images/logos/Untitled-1.png" className='w-[25px] h-[25px]' alt="" />
              </div>
              </div>
              <div className='flex items-center cursor-pointer justify-evenly p-3 w-[184px] h-[52px] bg-white text-gray-400 rounded-lg font-bold'>
              <span>دریافت از </span>
              <div className="flex items-center gap-1 mr-1">
                <span className="font-bold text-slate-800 text-lg">مایکت</span>
              <img src="/images/logos/Untitled-4.png" className='w-[30px] h-[30px]' alt="" />
              </div>
              </div>
              <div className='flex cursor-pointer items-center justify-evenly p-3 w-[184px] h-[52px] bg-white text-gray-400 rounded-lg font-bold'>
              <span>دریافت از </span>
              <div className="flex items-center gap-2 mr-2">
                <span className="text-gray-600 font-bold">مستقیم</span>
              <img src="/images/logos/Untitled-2.png" className='w-[30px] h-[30px]' alt="" />
              </div>
              </div>
            
        </div>
        <div><img src="/images/Group-75.svg" className="hidden md:flex" alt="" /></div>
      
    </div>
  )
}

export default Application
