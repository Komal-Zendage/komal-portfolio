import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { FaGithub, FaMapMarkerAlt, FaPhone, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaDribbble, FaEnvelope } from 'react-icons/fa6'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, message } = formData

    if (!name || !email || !message) {
      setStatus('Please fill in all fields.')
      return
    }

    setLoading(true)
    setStatus('')

    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData)
      setStatus(res.data.message)
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err.response || err)
      if (err.response && err.response.status === 400) {
        setStatus(err.response.data.error)
      } else {
        setStatus('Failed to send message.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-dark-100'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>Get In <span className='text-purple'>Touch</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have an idea or opportunity? I’d love to hear about it</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

          {/* Contact form */}
          <div>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                <input
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                <input
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                <textarea
                  className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  required
                />
              </div>

              <button
                type='submit'
                className={`w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>

              {status && <p className='text-center mt-4 text-purple'>{status}</p>}
            </form>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4' ><FaMapMarkerAlt /></div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                <p className='text-gray-400'>Hadapsar, Pune</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'><FaEnvelope /></div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                <p className='text-gray-400'>komalzendage@gmail.com</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'><FaPhone /></div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                <p className='text-gray-400'>+91 96650 09460</p>
              </div>
            </div>

            <div className='pt-4'>
              <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
              <div className='flex space-x-4 '>
                <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'><FaGithub /></a>
                <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300'><FaLinkedin /></a>
                <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-300'><FaTwitter /></a>
                <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300'><FaDribbble /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
