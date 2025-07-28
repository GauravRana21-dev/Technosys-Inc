import React from "react";

interface PoliciesBlockInterface {
  title: string;
  description: string;
  end?: string;
}

const PoliciesBlock = ({ title, description, end }: PoliciesBlockInterface) => {
  return (
    <>
      <div className="mb-10">
        <h3 className="font-bold my-5">{title}</h3>
        <p>{description}</p>
      </div>
      {end === "true" ? "" : <hr className="my-10" />}
    </>
  );
};

export default PoliciesBlock;


