import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo } from '../assets/assets'



const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-0 px-6'>
        {/* heading */}
        <h2 className='text-3xl font-bold text-center mb-4'>About<span className='text-purple'>Me</span> </h2>
        <p className='text-grey-400 text-center max-w-2xl mx-auto mb-16'>
          An overview of my background and interests.
        </p>

        {/* image + my journey */}
        <div className='flex flex-col md:flex-row items-center gap-12'>
          {/*  image */}
          <div className='md:w-1/2 rounded-2xl overflow-hidden'>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='w-200 h-200 object-cover'
              src="/profileImg.png" alt="profile" />
          </div>
          {/* text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='md:w-1/2'>
             <div className='rounded-2xl p-8'>
              <h3 className='text-2xl font-semibold mb-6 '>My Journey</h3>
              <p className='text-gray-300 mb-6'>
                I’m a full-stack developer whose journey began with a curiosity about how websites and applications actually work behind the scenes. What started as experimenting with small projects gradually turned into a passion for building complete, end-to-end solutions. Along the way, I learned how to transform ideas into functional products, focusing on writing clean, efficient code and creating user experiences that feel intuitive and purposeful.   </p>
              {/* <p className='text-gray-300 mb-12'>
                Today, I work across both frontend and backend, enjoying the challenge of solving complex problems and connecting systems together. I’m constantly learning and adapting to new technologies, pushing myself to improve with every project I take on. For me, development is not just about writing code—it’s about building reliable, scalable applications that deliver real value and leave room to grow.    </p>  */}

              {/* cards  */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                  aboutInfo.map((data, index) => (
<div
  key={index}
  className="bg-dark-300 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
>
                      <div className="text-purple text-3xl mb-3">
  <data.icon />
</div>

<h3 className="text-lg font-semibold mb-2">{data.title}</h3>

                      <p className='text-gray-400'>
                        {data.description}
                      </p>
                    </div>
                  ))
                }

              </div>
            </div>  

          </motion.div>


        </div>
      </div>

    </motion.div>
  )
}

export default About
