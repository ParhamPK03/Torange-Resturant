import { useContext } from "react"
import { StoreContext } from "../Context/StoreContext"
import FoodItem from "../Components/FoodItem"

const FoodBoxInfoes = ({category}) => {

  const {Food_list} = useContext(StoreContext);

  return (
    <div className="flex flex-wrap gap-10 justify-center my-20">
      {Food_list.map((item,index) =>{
          if (category==="All" || category===item.category) {
            
            return <FoodItem  key={index} id={item._id} title={item.title} text={item.text} oldprice={item.oldprice} newprice={item.newprice} offs={item.offs} img={item.img} />
          }
        })}
    </div>
  )
}

export default FoodBoxInfoes
