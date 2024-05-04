import NewAssignment from "../ui/card/NewAssignment"
import { FaHome } from "react-icons/fa";
import { LuSquareStack } from "react-icons/lu";
import HorizontalRow from "../ui/horizontalrow/HorizontalRow";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-4 font-bold items-center">
                <LuSquareStack size={25} />
                <p>Hi,AltWorld</p>
            </div>
            <HorizontalRow/>
            <div className="flex gap-2 items-center">
                <FaHome className="text-secondary bg-white p-1 w-8 h-8 flex justify-center items-center rounded-full" size={20} />
                <span className="font-bold text-sm">Dashboard</span>
            </div>
            <section><NewAssignment /></section>
        </div>
    )
}

export default Sidebar