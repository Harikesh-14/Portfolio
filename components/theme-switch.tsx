"use client";

import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { motion } from 'framer-motion';

type Theme = 'light' | 'dark'

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null

    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return (
    <motion.button
      type='button'
      className='fixed bottom-4 right-4 w-[3rem] h-[3rem] flex justify-center items-center bg-white text-gray-800 text-xl bg-opacity-80 backdrop:blur-[0.5rem] border border-white border-opacity-40 rounded-full shadow-md z-50 hover:text-gray-950 hover:scale-110 active:scale-105 transition-all ease-linear'
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