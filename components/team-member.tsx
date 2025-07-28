import Image from "next/image";
import React from "react";

interface TeamMemberInterface {
  name: string;
  imageUrl?: string;
  role: string;
}

const TeamMember = ({ name, imageUrl, role }: TeamMemberInterface) => {
  const validImageUrl =
    imageUrl?.trim() !== ""
      ? imageUrl
      : "https://frisk.websolutionus.com/uploads/custom-images/team-1-1.webp";

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-48 h-64 mb-3 overflow-hidden">
        <Image
          src={validImageUrl as string}
          alt={name}
          fill
          className="object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  )
};

export default TeamMember;
