import React from "react";
import Image from "next/image";
import { users } from "@/assets/data";
import { User } from "@/types/user";
import Button from "../ui/button/Button";
import calculatePercent from "@/utils/calculatePercent";
import Score from "./Score";

const CandidateDetails = ({ selectedUserID }: { selectedUserID: number }) => {
  const selectedUser = users.find((user) => user.id === selectedUserID) as User;
  const { profile: {
    name, email
  }, } = selectedUser;
  const { about, experience, introduction, hobbies } = selectedUser;
  const { behavioural, communication, situation_handling } = selectedUser.scores;
  const percent = calculatePercent(behavioural, communication, situation_handling)
  const infos = [{ title: "about", desc: about }, { title: "experience", desc: experience }, { title: "introduction", desc: introduction }]
  return (
    <>
      <div className="flex gap-4 w-[68rem] p-4">

        <div className="flex flex-col gap-4 basis-1/2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 p-2">
              <div className="w-20 h-20 relative">
                <Image
                  src="/profile.jpg"
                  fill
                  alt="profile"
                  className="rounded-xl object-cover"
                />
              </div>
              <div>
                <p className="font-bold">{name}</p>
                <p className="text-gray text-sm">{email}</p>
              </div>
            </div>
            <div className={`font-bold ${percent >= 50 ? "text-green" : percent >= 30 ? "text-golden" : "text-orange"} text-4xl`}>
              {percent} %
            </div>
          </div>
          <div className="flex flex-row gap-4 p-4">
            <div className="flex flex-col gap-4 justify-center text-sm font-semibold text-gray">
              <p className="">Behavioural</p>
              <p className="">Communcation</p>
              <p className="">Situation handling</p>
            </div>
            <section className="flex flex-col gap-4 grow">
              <div className="flex gap-4 justify-between  items-center">
                <Score percent={(behavioural / 10) * 100} />
                <p className="basis-1/5">{behavioural}/10</p>
              </div>
              <div className="flex gap-4 justify-between  items-center">
                <Score percent={(communication / 10) * 100} />
                <p className="basis-1/5">{communication}/10</p>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <Score percent={(situation_handling / 10) * 100} />
                <p className="basis-1/5">{situation_handling}/10</p>
              </div>
            </section>
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
            <div className="py-8 px-4">
              <h4 className="text-xl font-semibold capitalize">hobbies</h4>
              {hobbies.map((hobby) => (<span key={hobby} className="text-gray text-sm pr-2">{hobby}</span>))}
            </div>
          </div>

          <div className="w-full px-4">
            <Button className="text-white bg-secondary font-semibold w-full">SHORTLIST</Button>
          </div>
        </div>
        <div className="basis-1/2 relative rounded-lg overflow-hidden">
          <Image className="object-cover " fill src="/profile.jpg" alt="profile" />
          <div className="p-4 bottom-0 items-center absolute flex flex-row justify-between w-full">
            <div>←</div>
            <div className="flex justify-center items-center flex-col">
              <div className="font-bold text-sm">Tell me about yourself</div>
              <div className="font-bold text-xs">Question 1 / 11</div>
            </div>
            <div>→</div>
          </div>
        </div>

      </div >
    </>
  );
};

export default CandidateDetails;
