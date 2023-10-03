import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { Suspense, useEffect, useState } from "react";

import useMobileDetect from "./useMobileDetect";

import './index';

const Tech = () => {

  const isMobile = useMobileDetect();
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 technology-container' key={technology.name}>
          {/* Conditionally render the image if the device is mobile */}
          {/* {isMobile ? ( */}
            <img src={technology.icon} alt={technology.name} />
          {/* ) : (
            <BallCanvas icon={technology.icon} />
          )} */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");