import React, { useRef } from 'react'

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1 = useRef(null);
  const project2 = useRef(null);
  
  return (
    <div id='work'className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* LEFT */}
          <div className='first-project-wrapper'>
            <div className='image-wrapper'>
              <img src='../images/project1.png' alt='project 1' />
            </div>
            <div className='text-content'>
              <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
              <p className='text-white-50 md:text-xl'>
                An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project'>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src='../images/project2.png' alt='project 2' />
              </div>
              <h2>Library Management Platform</h2>
            </div>
            
            <div className='project'>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <img src='../images/project3.png' alt='project 3' />
              </div>
              <h2>YC Directory - A Start-up Showcase App</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseSection