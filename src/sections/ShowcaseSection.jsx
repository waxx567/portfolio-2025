import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id='work'className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* LEFT */}
          <div className='first-project-wrapper'>
            <div className='image-wrapper'>
              <img src='./images/project-1.png' alt='project-1' />
            </div>
          </div>
          {/* RIGHT */}
        </div>
      </div>
    </div>
  )
}

export default ShowcaseSection