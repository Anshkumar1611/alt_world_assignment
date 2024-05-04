import { users } from "@/assets/data"
import calculatePercent from "@/utils/calculatePercent"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

const CandidatesTable = ({ selectedUserID, setSelectedUserID }: { selectedUserID: number; setSelectedUserID: Dispatch<SetStateAction<number>> }) => {
  return (
    <div>
      {users.map((user) => {
        const { name, email } = user.profile
        const { behavioural, communication, situation_handling } = user.scores
        const percent = calculatePercent(behavioural, communication, situation_handling)
        
        return (
          <div key={user.id} className={`flex justify-between items-center px-4 hover:bg-primary hover:cursor-pointer ${selectedUserID == user.id && 'bg-primary'}`} onClick={() => setSelectedUserID(user.id)}>
            <div className="flex justify-center items-center gap-2 p-2">
              <div className="w-10 h-10 relative">
                <Image src="/profile.jpg" fill alt="profile" className="rounded-xl object-cover" />
              </div>
              <div>
                <p className="font-bold">{name}</p>
                <p className="text-gray text-sm">{email}</p>
              </div>
            </div>
            <div>
              <p className={`font-bold ${percent >= 50 ? "text-green" : percent >= 30 ? "text-golden" : "text-orange"} text-xl`}>
                {calculatePercent(behavioural, communication, situation_handling)} %
              </p>
            </div>
          </div>
        )
      })}
    </div>)
}

export default CandidatesTable