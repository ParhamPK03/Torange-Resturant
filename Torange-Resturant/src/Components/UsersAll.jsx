import UsersBox from "./UsersBox"
import {user} from "../assets/Item_Infoes"
const UsersAll = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
      {user.map((item,index) =>{
          {
            
            return <UsersBox  key={index} id={item._id} name={item.name} text={item.text} img={item.img} />
          }
        })}
    </div>
  )
}

export default UsersAll
