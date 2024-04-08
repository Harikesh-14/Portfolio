import React from 'react'
import SectionHeading from './section-heading'
import ProjectCard from './project-card'

import { projectsData } from '../lib/data'

function Projects() {
  return (
    <section className='mt-20'>
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