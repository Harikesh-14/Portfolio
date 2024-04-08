"use client";

import React from 'react'
import { useSectionInView } from '@/lib/hook'
import SectionHeading from './section-heading';

function Experience() {
  const { ref } = useSectionInView('Experience')

  return (
    <section
      ref={ref}
      id='experience'
      className='max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading text='Experience' />
    </section>
  )
}

export default Experience