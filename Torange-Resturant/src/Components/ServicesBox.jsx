const ServicesBox = () => {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-10 justify-center ">
      <div className="flex flex-col gap-1 items-center">
        <img src="/images/services/Group-61.png" className="w-[100px] h-[100px]" alt="" />
        <h3 className="text-lg font-bold text-gray-600">رزرو آنلاین</h3>
        <div className="mt-4 flex flex-col items-center">
        <p className="text-gray-500 ">در ترخون به صورت انلاین سفارش بده و</p>
        <p className="text-gray-500 ">در سریع ترین زمان تحویل بگیر</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-center">
      <h3 className="text-lg font-bold text-gray-600">خدمات تحویل</h3>
        <div className="mt-4 flex flex-col items-center">
        <p className="text-gray-500 ">در سریع ترین زمان و با بهترین بسته</p>
        <p className="text-gray-500 ">بندی سفارشتو تحویل بگیر</p>
        </div>
        <img src="/images/services/Group-62.png" className="w-[100px] h-[100px] mt-4" alt="" />
      </div>

      <div className="flex flex-col gap-1 items-center">
        <img src="/images/services/Group-63.png" className="w-[100px] h-[100px]" alt="" />
        <h3 className="text-lg font-bold text-gray-600">خدمات بیرون بر</h3>
        <div className="mt-4 flex flex-col items-center">
        <p className="text-gray-500 ">در اپلیکیشن ترخون میتونی سفارشتو به</p>
        <p className="text-gray-500 ">صورت بیرون بر ثبت کنی</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-center">
      <h3 className="text-lg font-bold text-gray-600">خدمات پذیرایی</h3>
        <div className="mt-4 flex flex-col items-center">
        <p className="text-gray-500 ">خیلی سریع میتونی سفارشتو ثبت کنی و</p>
        <p className="text-gray-500 ">از خدمات پذیرایی رستوران استفاده کنی</p>
        </div>
        <img src="/images/services/Group-64.png" className="w-[100px] h-[100px] mt-4" alt="" />
      </div>

    </div>
  )
}

export default ServicesBox
