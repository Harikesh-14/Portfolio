"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';

import { BsArrowRight, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { SiLeetcode } from 'react-icons/si';

import myPhoto from '@/public/myPhoto.png'
import { useSectionInView } from '@/lib/hook';

function Intro() {
  const { ref } = useSectionInView('Home', 0.5)

  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 0.25,
            }}
          >
            <Image
              src={myPhoto}
              alt='My photo'
              className='h-24 w-24 border-[0.35rem] border-white rounded-full object-cover shadow-lg'
              priority={true}
            />
          </motion.div>

          <motion.span
            className='text-4xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              duration: 0.7,
              delay: 0.1,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>

      <motion.p
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hi! I&apos;m Harikesh Ranjan Sinha.</span> I&apos;m {" "}
        <span className='font-bold'> full-stack developer </span> {" "} with a passion for {" "}
        <span className='italic'> building beautiful and functional websites</span>. My focus is {" "}
        <span className='font-bold underline'>MERN Stack (with Next.js)</span>
      </motion.p>

      <motion.div
        className='flex flex-col sm:flex-row justify-center gap-3 font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          href='#contact'
          className='cursor-pointer group bg-gray-900 text-white px-7 py-3 flex items-center gap-3 rounded-full hover:scale-110 transition-transform ease-in-out duration-30'
        >
          Contact Me <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition-all ease-linear' />
        </Link>
        <Link
          className='cursor-pointer group bg-white text-black px-7 py-3 flex items-center gap-3 rounded-full hover:scale-110 transition-transform ease-in-out duration-30 hover:border-black/20'
          href={'/ResumeFinal.pdf'}
          target='_blank'
          download={true}
        >
          Download CV <HiDownload className='opacity-70 group-hover:translate-y-1 transition-all ease-linear' />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/harikeshranjansinha/'}
          target='_blank'
          className='cursor-pointer bg-white text-black px-4 py-3 flex items-center gap-3 rounded-full hover:scale-110 transition-transform ease-in-out duration-30'
        >
          <BsLinkedin />
        </Link>
        <Link
          href={'https://github.com/Harikesh-14/'}
          target='_blank'
          className='cursor-pointer bg-white text-black px-4 py-3 flex items-center gap-3 rounded-full hover:scale-110 transition-transform ease-in-out duration-30'
        >
          <BsGithub />
        </Link>
        <Link
          href={'https://www.instagram.com/harikeshranjansinha/'}
          target='_blank'
          className='bg-white text-black px-4 py-3 flex items-center gap-3 rounded-full hover:scale-110 transition-transform ease-in-out duration-30'
        >
          <BsInstagram />
        </Link>
        <Link
          href={'https://leetcode.com/hn9853/'}
          target='_blank'
          className='cursor-pointer bg-white text-black px-4 py-3 flex items-center gap-3 rounded-full hover:scale-110 transition-transform ease-in-out duration-30'
        >
          <SiLeetcode />
        </Link>
      </motion.div>
    </section>
  )
}

export default Intro