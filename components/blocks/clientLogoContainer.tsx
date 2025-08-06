import React from "react";
import clientLogo from "@/constant/clientlogo";

import { Logos3 } from "./logos3";
const clientLogoContainer = ({heading} : {heading : string}) => {
  return <Logos3 heading={heading} {...clientLogo} />;
};

export default clientLogoContainer;
