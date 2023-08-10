import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant,zoomInVariant } from "../utils/motion";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.div variants={fadeIn("","",0.1,1)} className="flex flex-col md:flex-row mx-auto w-full">

      <div className="w-full md:w-1/2 p-4">
      <p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] '
      >
        I'm an anspiring Full Stack Developer with an edge in Machine-Learning. I am currently 
        brushing up on my machine learning capabilites by working as a research assistant for SMU on computer vision models to identify malicious permission
        usage from andriod applicaitons.
      </p>
      </div>
      <div className="w-full md:w-1/2 p-4">

     
      <motion.img
      src="../../public/profile.jpg"
      className="h-full object-contain w-full md:w-1/2 p-4"
      variants={zoomInVariant}
      whileHover="zoomed"
      whileTap="unzoomed"
    />



      </div>
      </motion.div>

     
    </>
  );
};

export default SectionWrapper(About, "about");