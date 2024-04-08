"use client";

import React from 'react'
import { motion } from 'framer-motion'

type SectionHeadingProps = {
  text: string
}

function SectionHeading({ text }: SectionHeadingProps ) {
  return (
    <motion.h2
      className='text-3xl capitalize font-medium mb-8'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      {text}
    </motion.h2>
  )
}

export default SectionHeading