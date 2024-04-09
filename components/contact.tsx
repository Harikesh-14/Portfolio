"use client";

import React from 'react'
import { motion } from 'framer-motion'

import { useSectionInView } from '@/lib/hook'
import SectionHeading from './section-heading'

import { FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const { ref } = useSectionInView('Contact', 0.3)

  return (
    <section
      ref={ref}
      id='contact'
      className='max-w-[53rem] scroll-mt-28 text-center sm:mb-28 w-[min(100%, 38rem)]'
    >
      <SectionHeading text='Contact Me' />
      <motion.p
        className='text-gray-70 -mt-4'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
      >
        Please contact me directly at {" "}
        <a className='underline' href="mailto:ranjansinhaharikesh@gmail.com">
          ranjansinhaharikesh@gmail.com
        </a> or use this form.
      </motion.p>

      <motion.form
        className='mt-10 flex flex-col'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        <input
          type='email'
          className='h-14 rounded-lg border border-black/20 px-4'
          placeholder='Your email'
        />
        <textarea
          className='h-52 border border-black/20 rounded-lg mt-4 p-4'
          placeholder='Your message'
        />
        <button
          type='submit'
          className='group h-[3rem] w-[8rem] mx-auto bg-gray-900 text-white rounded-full mt-4 flex items-center justify-center gap-2 outline-none focus:outline-none hover:bg-gray-800 transition-all ease-linear hover:scale-110'
        >
          Submit
          <FaPaperPlane
            className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ease-linear'
          />
        </button>
      </motion.form>
    </section>
  )
}

export default Contact