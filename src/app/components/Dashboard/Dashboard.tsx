"use client"
import { useState } from "react"; 
import AssignmentDetails from '../AssignmentDetails/AssignmentDetails';
import Button from '../ui/button/Button';
import CandidatesTable from '../ui/table/CandidatesTable';
import CandidateDetails from "../CandidateDetails/CandidateDetails";
import { users } from "@/assets/data";

const Dashboard = () => {
    const [selectedUserID, setSelectedUserID] = useState(users[0].id);

  return (
    <main className="flex gap-4">
    <div className="bg-white w-[30rem] shrink-0 rounded-lg">
      <div className="p-2 ">
        <AssignmentDetails />
      </div>
      <div className="flex items-center gap-4 px-4 py-2">
        <Button className="w-auto drop-shadow-xl">To Review</Button>
        <Button className="w-auto hover:drop-shadow-xl">Shortlisted</Button>
      </div>
      <div>
        <div className="flex justify-between px-2">
          <p className="text-xs font-semibold text-gray p-3">CANDIDATE</p>
          <p className="text-xs font-semibold text-gray p-3">SCORE</p>
        </div>
       <CandidatesTable selectedUserID={selectedUserID} setSelectedUserID={setSelectedUserID}/>
      </div>
    </div>
    <div className="bg-white rounded-lg"><CandidateDetails selectedUserID={selectedUserID} /></div>
  </main>
  )
}

export default Dashboard