import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  const [isShowMore, setIsMore] = useState(false);
  const [showServiceCount, setShowServicesCount] = useState(4);

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {" "}
        My portfolio{" "}
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {" "}
        My latest work{" "}
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Welcome to my mobile app development portfolio! Explore a collection of
        projects showcasing my expertise in cross-platform mobile app
        development.
      </motion.p>

      <motion.div
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        {workData.slice(0, showServiceCount).map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            {!project.android_link && !project.apple_link ? (
              ""
            ) : (
              <div className="flex justify-end px-2 py-2">
                {!project.android_link ? (
                  ""
                ) : (
                  <motion.div
                    className="bg-white w-8 py-1 px-1 rounded-[50%]"
                    initial={{ y: 0 }}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.4 }}
                  >
                    <a href={project.android_link} target="_blank">
                      <Image src={assets.android_logo} className="w-8" alt="" title="Go to Google Play Store"/>
                    </a>
                  </motion.div>
                )}
                <motion.div
                  className="bg-black w-8 py-1 px-1 rounded-[50%] ml-2"
                  initial={{ y: 0 }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4 }}
                >
                  <a href={project.apple_link} target="_blank">
                    <Image src={assets.apple_logo} className="w-6" alt="" title="Go to Apple App Store"/>
                  </a>
                </motion.div>
              </div>
            )}

            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex 
                    items-center justify-between duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              {/* <div
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center
                     shadow-[2px_2px_0_#000] group-hover: bg-lime-300 transition"
              >
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        onClick={(e) => {
          if (showServiceCount < 7) {
            e.preventDefault();
            setShowServicesCount((prev) => prev + 4);
            setIsMore(true);
          } else {
            setIsMore(false);
          }
        }}
        href=""
        className={`w-max flex items-center justify-center gap-2 text-gray-700
                    border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20
                    hover:bg-lightHover duration-500 dark:text-white dark:border-white
                    dark:hover:bg-darkHover ${isShowMore ? "hidden" : ""}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
