import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';  

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
        y: 50, opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100px",
            end: "bottom 20%"
          }
        }
      )
    })
    
    gsap.fromTo(
     sectionRef.current,
     { opacity: 0 }, 
     { opacity: 1, duration: 1.5 }
    )
  }, []);

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* LEFT */}
          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <img src='../images/peertraining.png' alt='project 1' />
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
            <div className='project' ref={project2Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src='../images/project2.png' alt='project 2' />
              </div>
              <h2>Library Management Platform</h2>
            </div>
            
            <div className='project' ref={project3Ref}>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <img src='../images/project3.png' alt='project 3' />
              </div>
              <h2>YC Directory - A Start-up Showcase App</h2>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection