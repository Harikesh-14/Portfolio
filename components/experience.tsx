"use client";

import React from 'react'
import { useSectionInView } from '@/lib/hook'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import SectionHeading from './section-heading'
import { experiencesData } from '@/lib/data';

import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '@/context/theme-context';

function Experience() {
  const { ref } = useSectionInView('Experience')
  const { theme } = useTheme()

  return (
    <section
      ref={ref}
      id='experience'
      className='mb-24 max-w-[53rem] scroll-mt-28 text-center sm:mb-28'
    >
      <SectionHeading text='My experience' />

      <VerticalTimeline lineColor={ theme === 'light' ? '#e5e7eb' : 'rgba(255, 255, 255, 0.05)' }>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{ borderRight: theme === 'light' ? '7px solid #f3f4f6' : '7px solid rgba(255, 255, 255, 0.05)'}}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.15)',
                fontSize: "1.5rem",
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-400'>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Experience