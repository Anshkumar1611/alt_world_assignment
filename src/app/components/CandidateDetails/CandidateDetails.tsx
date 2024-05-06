import React from "react";
import Image from "next/image";
import { users } from "@/assets/data";
import { User } from "@/types/user";
import Button from "../ui/button/Button";
import calculatePercent from "@/utils/calculatePercent";
import Profile from "./profile/Profile";
import Percent from "./percent/Percent";
import Performance from "./performance/Performance";
import Questions from "./questions/Questions";
import Hobbies from "./hobbies/Hobbies";

const CandidateDetails = ({ selectedUserID }: { selectedUserID: number }) => {
  const selectedUser = users.find((user) => user.id === selectedUserID) as User;

  // Destructuring of required data from selectedUser
  const { profile: { name, email } } = selectedUser;
  const { about, experience, introduction, hobbies } = selectedUser;
  const { behavioural, communication, situation_handling } = selectedUser.scores;

  // calculating percent
  const percent = calculatePercent(behavioural, communication, situation_handling)

  // Infos Array
  const infos = [{ title: "about", desc: about }, { title: "experience", desc: experience }, { title: "introduction", desc: introduction }]

  return (
    <>
      <div className="flex gap-4 w-[68rem] p-4">

        <div className="flex flex-col gap-4 basis-1/2">
          <div className="flex justify-between items-center">
            <Profile name={name} email={email} />
            <Percent percent={percent} />
          </div>
          <div className="flex flex-row gap-4 p-4">
            <Performance behavioural={behavioural} communication={communication} situation_handling={situation_handling} />
          </div>
          <div>
            <div className="flex flex-col gap-8 p-4">
              {infos.map(info => (
                <div key={info.title} className="">
                  <h4 className="text-xl font-semibold capitalize">{info.title}</h4>
                  <p className="text-gray text-sm">{info.desc}</p>
                </div>
              ))}
            </div>
            <Hobbies hobbies={hobbies} />
          </div>
          <div className="w-full px-4">
            <Button className="text-white bg-secondary font-semibold w-full">SHORTLIST</Button>
          </div>
        </div>
        <div className="basis-1/2 relative rounded-lg overflow-hidden">
          <Image className="object-cover " fill src="/profile.jpg" alt="profile" />
          <Questions />
        </div>

      </div >
    </>
  );
};

export default CandidateDetails;
