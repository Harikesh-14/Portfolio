"use client";

import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { motion } from 'framer-motion';
import { useTheme } from '@/context/theme-context';

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      type='button'
      className='fixed bottom-4 right-4 w-[3rem] h-[3rem] flex justify-center items-center bg-white text-gray-800 text-xl bg-opacity-80 backdrop:blur-[0.5rem] border border-white border-opacity-40 rounded-full shadow-md z-50 hover:text-gray-950 hover:scale-110 active:scale-105 transition-all ease-linear dark:bg-gray-950 dark:text-gray-100'
      onClick={toggleTheme}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      {
        theme === 'light' ? (
          <BsSun />
        ) : (
          <BsMoon />
        )
      }
    </motion.button>
  )
}

export default ThemeSwitch