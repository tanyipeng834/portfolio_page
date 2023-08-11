
import { Tooltip } from "@material-tailwind/react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {zoomInVariant } from "../utils/motion";


const Works = () => {
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
    <div className="flex min-h-screen flex-col items-center justify-center px-10 md:px-28">
      <motion.div
        id="projects"
        className="flex max-w-6xl flex-wrap"
        ref={ref}
        variants={fadeLeft}
      >
        <motion.h1 className="-mb-2 mt-12 text-l font-bold text-silverDark md:mb-4 md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Things I&apos;ve Built
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
                <a
                  href="https://github.com/k3ithloh/BFG-SafeSpace"
                  target="_blank"
                >
                   <img
                    className="relative m-1 inline-flex h-6 w-12 md:h-12"
                    width="0"
                    height="0"
                    src="/scis.png"
                    alt="Ellipsis"
                   
                  />
                 
                </a>
              </div>
              <h3
                className="l:text-xl mt-2 text-lg font-semibold xl:text-2xl 2xl:text-3xl 
              "
              >
                <a
                  href="https://github.com/tanyipeng834/FreshGO" className="hover:text-secondary"
                  target="_blank"
                >
                 IS 213 Enterpise Soution Development
                </a>
              </h3>
              <div className=" flex flex-wrap items-center justify-start gap-x-1">
                <h3 className="l:text-xl text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                 FreshGo
                </h3>
              
              </div>

              <ul className="py-2 pl-6">
                <motion.img
                  className="relative inline-flex w-3/4 object-cover py-6 lg:w-1/2"
                  width={500}
                  height={500}
                  src="/esd.png"
                  alt="FreshGO"
                  variants={zoomInVariant}
                  whileHover="zoomed"
                  whileTap="unzoomed"
                />
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:w-3/4 lg:text-lg xl:text-xl 2xl:text-2xl">
                   Developed a Full Stack Mobile-Responsive Web Application with the Micorservices Architecture with machine learnin capabilites to optimize water
                   and fetrilizer usage
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:w-3/4 lg:text-lg xl:text-xl 2xl:text-2xl">
                   Attained the highest grade of A+ for the project and was voted best project in my class.
                  </p>
                </li>
               
                <div className="my-4 flex cursor-pointer flex-wrap gap-1 py-2">
                <Tooltip
                    className="bg-silver"
                    content="Vue.js"
                    placement="bottom"
                  >
                    <img
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/Vue.svg"
                      alt="Vue.js"
                    />
                  </Tooltip>
                  <Tooltip
                    className="bg-silver"
                    content="Node.js"
                    placement="bottom"
                  >
                    <img
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/Node.svg"
                      alt="Node.js"
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
                  <Tooltip
                    className="bg-silver"
                    content="Docker"
                    placement="bottom"
                  >
                    <img
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/Docker.svg"
                      alt="Docker"
                    />
                  </Tooltip>
                  <Tooltip
                    className="bg-silver"
                    content="Kong API Gateway"
                    placement="bottom"
                  >
                    <img
                      className="m-1 h-6 w-12 hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/kong.svg"
                      alt="Kong"
                    />
                  </Tooltip>
                  <Tooltip
                    className="bg-silver"
                    content="RabbitMQ"
                    placement="bottom"
                  >
                    <img
                      className="m-1 h-6 w-12 hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/RabbitMQ.svg"
                      alt="Docker"
                    />
                  </Tooltip>
                </div>
              </ul>
              <time className="mb-2 mt-2 text-xs font-normal italic leading-none text-jet dark:text-jet lg:text-sm xl:text-base 2xl:text-lg">
                July 2023
              </time>
            </motion.li>
            <motion.li
              className="mb-10 pl-12"
              variants={fadeLeft}
              initial="hidden"
              animate={controls}
            >
              <div className="absolute -left-[18px] flex  bg-gray-200 dark:border-white dark:bg-gray-700 md:-left-8">
              
                   <img
                    className="relative m-1 inline-flex h-6 w-12 md:h-12"
                    width="0"
                    height="0"
                    src="/scis.png"
                    alt="Ellipsis"
                   
                  />
                 
                
              </div>
              <h3
                className="l:text-xl mt-2 text-lg font-semibold xl:text-2xl 2xl:text-3xl 
              "
              >
                <a
                  href="https://github.com/tanyipeng834/StudySmart" className="hover:text-secondary"
                  target="_blank"
                >
                 IS 216 Web Application Development 2
                </a>
              </h3>
              <div className=" flex flex-wrap items-center justify-start gap-x-1">
                <h3 className="l:text-xl text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                 StudySmart
                </h3>
              
              </div>

              <ul className="py-2 pl-6">
                <motion.img
                  className="relative inline-flex w-3/4 object-cover py-6 lg:w-1/2"
                  width={500}
                  height={500}
                  src="/wad2.png"
                  alt="FreshGO"
                  variants={zoomInVariant}
                  whileHover="zoomed"
                  whileTap="unzoomed"
                />
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:w-3/4 lg:text-lg xl:text-xl 2xl:text-2xl">
                   Developed a Full Stack Mobile-Responsive Web Application with a Vue Frontend and Firebase Real-Time Database.
                  </p>
                </li>
               
                <div className="my-4 flex cursor-pointer flex-wrap gap-1 py-2">
                  <Tooltip
                    className="bg-silver"
                    content="Vue.js"
                    placement="bottom"
                  >
                    <img
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/Vue.svg"
                      alt="Vue.js"
                    />
                  </Tooltip>
                  <Tooltip
                    className="bg-silver"
                    content="Firebase"
                    placement="bottom"
                  >
                    <img
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/Firebase.svg"
                      alt="Firebase"
                    />
                  </Tooltip>
                 
                </div>
              </ul>
              <time className="mb-2 mt-2 text-xs font-normal italic leading-none text-jet dark:text-jet lg:text-sm xl:text-base 2xl:text-lg">
                January 2023
              </time>
            </motion.li>

           
          </ol>
        </div>
      </motion.div>
    </div>
  );
};

export default Works;