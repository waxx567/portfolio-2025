import { logoIconsList } from '../constants'

/**
 * A single logo icon component.
 * @param {{ name: string, imgPath: string }} icon The logo icon object
 * @returns {JSX.Element} The rendered logo icon
 */
const LogoIcon = ({ icon }) => {
  return (
    <div className='flex-none flex-center marquee-item'>
      <img src={icon.imgPath} alt={icon.name} className='h-18' />
    </div>
  )
}

/**
 * A section component that renders a marquee of logo icons. The marquee consists of
 * a repeating array of logo icons, with a gap of 12rem on large screens and 5rem on
 * small screens. Two gradient edge elements are placed above and below the marquee
 * to create a sense of depth.
 * @returns {JSX.Element} The rendered marquee of logo icons
 */
const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
      <div className='gradient-edge' />
      <div className='gradient-edge' />

      <div className='marquee h-52'>
        <div className='marquee-box md:gap-12 gap-5'>
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
          
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default LogoSection