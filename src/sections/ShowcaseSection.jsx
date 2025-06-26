import React from 'react'

const ShowcaseSection = () => {
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
            </div>
          </div>
          {/* RIGHT */}
        </div>
      </div>
    </div>
  )
}

export default ShowcaseSection