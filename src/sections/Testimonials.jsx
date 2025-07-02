import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
         title='Testimonials' 
         sub='🤝 What My Clients Say' 
        />

        <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
          {testimonials.map((testimonial) => (
            <p>{testimonial.review}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials