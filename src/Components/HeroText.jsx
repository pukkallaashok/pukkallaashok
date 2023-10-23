/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: HeroText.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {
  const name = "I'm Ashok";

  return (
    <div
      className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%] pb-6"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex  flex-col opacity-100 text-5xl sm:text-8xl"
          style={{ fontFamily: "serif" }}
        >
          <m.span
            initial={{ x: 0 }}
            whileInView={{ x: 10 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
          Hello!
          </m.span>
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="font-serif"
                  style={{ fontSize: "1.2em" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
          <h4 className="py-4 text-5xl">A Web Developer</h4>
        </m.h1>
        
      </LazyMotion>
    </div>
  );
};

export default HeroText;
