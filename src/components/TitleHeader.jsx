import React from 'react'

/**
 * A TitleHeader component renders a title and subtitle in a centered, vertical
 * layout. The subtitle is wrapped in a `hero-badge` div, and the title is given
 * a larger font size on larger screens.
 * 
 * @param {{ title: string, sub: string }} props Component props
 * @returns {JSX.Element} The rendered title and subtitle
 */
const TitleHeader = ({ title, sub }) => {
  return (
    <div className='flex flex-col items-center gap-5'>
      <div className='hero-badge'>
        <p>{sub}</p>
      </div>
      <div className='font-semibold md:text-5xl text-3xl text-center'>
        {title}
      </div>
    </div>
  )
}

export default TitleHeader