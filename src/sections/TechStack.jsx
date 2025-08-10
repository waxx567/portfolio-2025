import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

/**
 * A component that renders a section containing a grid of tech stack cards. Each card is a div
 * with a rounded border and a flex layout. The card contains an image, a title, and a
 * description. The cards are arranged in a 3-column grid on large screens and a single
 * column on small screens. The cards are animated to slide up and fade in as the user
 * scrolls to the #skills wrapper.
 */
const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(".tech-card", {
      // Initial values
      y: 50,
      opacity: 0,
    }, {
      // Final values
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#skills",
        start: "top center",
      },
    });
  });

  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
         title='Some Of My Skills' 
         sub='🛠️ Tech And Tools' 
        />

        <div className='tech-grid'>
          {/* Loop through the techStackIcons array and create a component for each item. 
              The key is set to the name of the tech stack icon, and the classnames are set to 
              card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg 
              classes are only applied on larger screens. */}
          {techStackIcons.map((icon) => (
            <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <TechIcon model={icon} />
                </div>

                <div className='padding-x w-full'>
                  <p className='pb-10'>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack