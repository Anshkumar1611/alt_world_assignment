import { AssignmentData } from "@/assets/data"

const AssignmentDetails = () => {
    return (
        <div>
            <div className="flex justify-between items-center px-1 py-2">
                <p className="text-xl font-bold">Sales BDE</p>
                <p className="text-xl font-bold text-green">Active</p>
            </div>
            {AssignmentData.map((link) => (
                <div key={link.id} className="flex justify-between items-center p-1">
                    <p className="text-sm font-semibold text-gray">{link.title}</p>
                    <p className={`text-sm font-semibold ${link.id===1?'text-link':"text-gray"}`}>{link.value}</p>
                </div>
            ))}
        </div>)
}

export default AssignmentDetails