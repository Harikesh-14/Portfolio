"use client";

import React from 'react'

import SectionHeading from './section-heading'
import ProjectCard from './project-card'

import { projectsData } from '../lib/data'
import { useSectionInView } from '@/lib/hook';

function Projects() {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section ref={ref} className='mt-20 scroll-mt-28' id='projects'>
      <SectionHeading text='My Projects' />

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects