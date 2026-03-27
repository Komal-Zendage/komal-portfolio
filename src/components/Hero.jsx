import React from 'react'
import { motion } from 'framer-motion'
import resume from "../assets/komalzendage_Resume.pdf";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via -[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        {/* left side content */}
        <div className='md:w-1/2 mb-10 md:mb-0 ml-10'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Hi, I'm <span className='text-purple'>Komal Zendage</span>
          </h1>
          <h2 className='text-2xl md:text-4xl mb-4 typewriter font-semibold'>
            Full Stack Developer
          </h2>
          <p className='text-lg text-gray-300 mb-8'>
            I create modern, scalable web experiences with innovative design and <br></br>modern technologies.        </p>
          <div className='space-x-4'>
            <a
              href={resume}
              download="KomalZendage_Resume.pdf"
              className='px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-500 transition duration-300'
            >
              Download CV
            </a>            <a href="#contact" className='px-4 py-2 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-purple-300'> Contact Me</a>

          </div>
        </div>

        {/* right side Image */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r  opacity-70'>
              <motion.img
                animate={{ y: [0, 0, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: 'easeInOut'
                }}
                className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10'
                src="/profileImg.png" alt="Profile" />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero