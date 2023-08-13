import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { useEffect, useState } from "react";
import Typed from 'typed.js';

const Hero = () => {

  const el = React.useRef(null);

useEffect(() => {
  const typed = new Typed(el.current, {
    strings: [' Aspiring <i>AI &amp; Software Engineer.</i>'],
    typeSpeed: 30,
    backSpeed: 30,
    loop:true,
  });

  return () => {
    // Destroy Typed instance during cleanup to stop animation
    typed.destroy();
  };
}, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Yi Peng</span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
           I am a Junior at Singapore Management Univesity <br className='sm:block hidden' />

           <br></br>
            <span ref ={el} className="font-black text-[#915EFF] lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[25px] lg:leading-[98px] mt-4"></span>
          </p>
        </div>
      </div>

      <ComputersCanvas className="text-center"/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;