import { Tooltip } from "@material-tailwind/react";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { SectionWrapper } from "../hoc";

const Experience = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      void controls.start("visible");
    }
  }, [controls, isInView]);

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-10 pt-10 md:px-28" id="work">
      <motion.div
        ref={ref}
        id="experience"
        className="flex max-w-6xl flex-wrap"
        variants={fadeLeft}
      >
        <motion.h1
          className="-mb-2 mt-12 text-l font-bold text-silverDark md:mb-4 md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          variants={fadeLeft}
        >
          Where I&apos;ve Worked
        </motion.h1>
        <div className="ml-4 py-8 md:ml-10">
          <ol className="relative border-l border-white  dark:border-white">
            <motion.li
              className="mb-10 pl-12"
              variants={fadeLeft}
              initial="hidden"
              animate={controls}
            >
              <div className="absolute -left-[18px] flex  bg-gray-200 dark:border-white dark:bg-gray-700 md:-left-8">
                 
                <img
                className="relative m-1 inline-flex h-6 w-6 md:h-12 md:w-auto object-contain"
                src="/scis.png"
                alt="SCIS"
              />
                
              </div>
              <time className="mb-2 mt-2 text-sm font-normal leading-none text-jet dark:text-jet lg:text-base xl:text-lg 2xl:text-xl">
                May 2023 - Aug 2023
              </time>
              <h3
                className="l:text-xl mt-2 text-lg font-semibold xl:text-2xl 2xl:text-3xl
              "
              >
                <a href="https://scis.smu.edu.sg//" target="_blank" className="hover:text-secondary">
                  SMU School Of Computing and Information Systems
                </a>
              </h3>
              <h3 className="l:text-xl text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                Research assistant
              </h3>

              <ul className="py-2 pl-6">
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    Extended an Open CV GUI Perceptual Grouping Library to extract GUI elements from a mobile interface
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    Trained a Decision Tree and Multi-label classification algorithm to predict human-percivable permissions on widgets of andriod applications
                  </p>
                </li>
              </ul>
              <div className="my-4 flex flex-wrap gap-1 py-2">
            

                <Tooltip
                  className="bg-silver"
                  content="Keras"
                  placement="bottom"
                >
                  <img
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/Keras.svg"
                    alt="Keras"
                  />
                </Tooltip>
                <Tooltip
                  className="bg-silver"
                  content="OpenCV"
                  placement="bottom"
                >
                  <img
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/opencv.svg"
                    alt="OpenCV"
                  />
                </Tooltip>
                <Tooltip
                  className="bg-silver"
                  content="sckit-learn"
                  placement="bottom"
                >
                  <img
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/scikit-learn.svg"
                    alt="Tailwind"
                  />
                </Tooltip>

                <Tooltip
                  className="bg-silver"
                  content="NumPy"
                  placement="bottom"
                >
                  <img
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/NumPy.svg"
                    alt="NumPy"
                  />
                </Tooltip>
              </div>
            </motion.li>
            <motion.li
              className="mb-10 pl-12"
              variants={fadeLeft}
              initial="hidden"
              animate={controls}
            >
              <div className="absolute -left-[18px] flex  bg-gray-200 dark:border-white dark:bg-gray-700 md:-left-8">
               
                 
                
                <img
                className="relative m-1 inline-flex h-6 w-6 md:h-12 md:w-12 object-contain"
                src="/tessaract.png"
                alt="tessaract.io"
              />
               
              </div>
              <time className="mb-2 mt-2 text-sm font-normal leading-none text-jet dark:text-jet lg:text-base xl:text-lg 2xl:text-xl">
                May 2023 - Aug 2023
              </time>
              <h3
                className="l:text-xl mt-2 text-lg font-semibold xl:text-2xl 2xl:text-3xl
              "
              >
                <a href="https://www.tessaract.io/en-gb/" target="_blank" className="hover:text-secondary">
                  Tessaract.io
                </a>
              </h3>
              <h3 className="l:text-xl text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                Product Optimization Intern
              </h3>

              <ul className="py-2 pl-6">
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  Programmed a Slack bot using Slack API and Beautiful Soup Library to extract data on the company’s infrastructure metrics  and send notifications to alert the relevant personnel.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  Developed automated testing scripts with Selenium and Unit Test Framework to reduce the required testing time from 40 to 5 minute
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                   	Developed data migration scripts in Python to migrate clients’ data from their legacy applications to the company’s database.
                  </p>
                </li>
              </ul>
              <div className="my-4 flex flex-wrap gap-1 py-2">
            

                <Tooltip
                  className="bg-silver"
                  content="Selenium"
                  placement="bottom"
                >
                  <img
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/Selenium.svg"
                    alt="Selenium"
                  />
                </Tooltip>
                <Tooltip
                  className="bg-silver"
                  content="Java"
                  placement="bottom"
                >
                  <img
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/Java.svg"
                    alt="OpenCV"
                  />
                </Tooltip>
                <Tooltip
                  className="bg-silver"
                  content="Python"
                  placement="bottom"
                >
                  <img
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/Python.svg"
                    alt="Python"
                  />
                </Tooltip>

              </div>
            </motion.li>


           
          </ol>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;