import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'

/**
 * A component that renders a section with a title, subtitle, and a grid of glowing cards containing testimonials.
 * The testimonials are sourced from the `testimonials` array in `constants/index.js`.
 * The component uses the `TitleHeader` component for the title and subtitle, and the `GlowCard` component for each testimonial.
 */
const Testimonials = () => {
  return (
    <section id='testimonials' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
         title='Testimonials' 
         sub='🤝 What My Clients Say' 
        />

        <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
          {testimonials.map(({ imgPath, name, mentions, review }) => (
            <GlowCard card={{ review }}>
              <div className='flex items-center gap-3'>
                <div>
                  <img
                    src={imgPath}
                    alt={name}
                  />
                </div>
                <div>
                  <p>{name}</p>
                  <p className='text-white-50'>{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials