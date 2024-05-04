import Button from "../button/Button"
import { IoIosAdd } from "react-icons/io";

const NewAssignment = () => {
  return (
    <>
      <div className="px-4 py-2 bg-secondary rounded-2xl w-64">
        <div className="py-3 ">
          <Button className="w-auto"><IoIosAdd size={25} /></Button>
        </div>
        <p className="text-white font-semibold py-1">New Assignment ?</p>
        <p className="text-white text-xs py-1 leading-5">Select from pre-defined questions to have a quick turnaround.</p>
        <div className="py-2">
          <Button className="w-full" >Create New Assignment</Button>
        </div>
      </div>
    </>
  )
}

export default NewAssignment