import RepresentationBox from "./RepresentationBox"
import {city} from "../assets/Item_Infoes"
const RepresentationAll = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
      {city.map((item,index) =>{
          {
            
            return <RepresentationBox  key={index} id={item._id} name={item.name} city={item.city} phone={item.phone} phone2={item.phone2} img={item.img} />
          }
        })}
    </div>
  )
}

export default RepresentationAll
