import React from 'react'
import TitleHeader from '../components/TitleHeader'

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
         title='Testimonials' 
         sub='🤝 What My Clients Say' 
        />
      </div>
    </section>
  )
}

export default Testimonials