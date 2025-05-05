import React from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { Earth } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
              </svg>
              <div>
                <p className='text-white font-medium'>Email</p>
                <a href='mailto:your.email@example.com' className='text-secondary hover:text-white'>princejangra146@gmail.com</a>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
              </svg>
              <div>
                <p className='text-white font-medium'>Phone</p>
                <a href='tel:+1234567890' className='text-secondary hover:text-white'>9111135452</a>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11.184A4 4 0 1112.816 8 4 4 0 0116 11.184z' />
              </svg>
              <div>
                <p className='text-white font-medium'>LinkedIn</p>
                <a href='https://www.linkedin.com/in/prince-jangra-6079a0209/' target='_blank' rel='noopener noreferrer' className='text-secondary hover:text-white'>linkedin.com/in/your-profile</a>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
              </svg>
              <div>
                <p className='text-white font-medium'>Instagram</p>
                <a href='https://www.instagram.com/prince_jangra_146/?hl=en' target='_blank' rel='noopener noreferrer' className='text-secondary hover:text-white'>instagram.com/your_profile</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <Earth />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
