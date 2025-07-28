import React from "react";
import teamMemberDetails from "@/constant/teamMember";
import TeamMember from "../team-member";

const TeamMemberContainer = () => {
  return (
    <div className="py-20">
      <h3 className="text-center py-10 font-bold text-4xl">
        Our Team Behind The Studio
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {teamMemberDetails.map((member, idx) => (
          <TeamMember key={idx} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamMemberContainer;
