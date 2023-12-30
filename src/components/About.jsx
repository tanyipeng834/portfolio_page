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
        className='mt-4 text-secondary text-[20px] max-w-3xl leading-[25px] '
      >
        I'm an aspiring Cloud/Devops Engineer I am currently 
        learning Infrastucture as Code by taking on the Terrafrom Associate Certification. I hope to be able 
        engineer complex systems using the cloud.
      </p>
      </div>
      <div className="w-full md:w-1/2 p-4">

     
      <motion.img
      src="/profile.jpg"
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