import {application} from "../assets/Item_Infoes"
import ApplicationBox from "../Components/ApplicationBox"

const ApplicationAll = () => {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-3 items-center justify-center">
      {application.map((item,index) =>{
          {
            
            return <ApplicationBox  key={index} id={item._id} text={item.text} title={item.title} img={item.img} />
          }
        })}
    </div>
  )
}

export default ApplicationAll
