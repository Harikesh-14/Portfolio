"use client";

import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import { useSectionInView } from '@/lib/hook'
import { sendEmail } from '@/actions/sendEmail';
import SectionHeading from './section-heading'

import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

function Contact() {
  const { ref } = useSectionInView('Contact', 0.3)
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <section
      ref={ref}
      id='contact'
      className='mb-24 max-w-[53rem] scroll-mt-28 text-center sm:mb-24 w-[min(100%, 38rem)]'
    >
      <SectionHeading text='Contact Me' />
      <motion.p
        className='text-gray-70 -mt-4'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        Please contact me directly at {" "}
        <a className='underline' href="mailto:harikeshranjansinha14@gmail.com">
          harikeshranjansinha14@gmail.com
        </a> or use this form.
      </motion.p>

      <motion.form
        ref={formRef}
        className='mt-10 flex flex-col'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
        action={async (formData) => {
          const { data, errorMessage } = await sendEmail(formData)

          if (errorMessage) {
            toast.error(errorMessage)
            return
          }

          formRef.current?.reset()
          toast.success('Message sent successfully')
        }}
      >
        <input
          type='email'
          name='senderEmail'
          className='h-14 rounded-lg border border-black/20 px-4 dark:bg-gray-950 dark:text-gray-100 dark:border-gray-800 dark:placeholder-gray-400 dark:focus:ring-gray-800 dark:focus:ring-2'
          placeholder='Your email'
          maxLength={500}
          required
        />
        <textarea
          name='message'
          className='h-52 border border-black/20 rounded-lg mt-4 p-4 dark:bg-gray-950 dark:text-gray-100 dark:border-gray-800 dark:placeholder-gray-400 dark:focus:ring-gray-800 dark:focus:ring-2'
          placeholder='Your message'
          maxLength={3000}
          required
        />
        <SubmitBtn />
      </motion.form>
    </section>
  )
}

export default Contact