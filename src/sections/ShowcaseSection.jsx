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
              <img src='../images/peer mockup.png' alt='project 1' />
            </div>
            <div className='text-content'>
              <h2>WordPress website created for The Peer Group</h2>
              <p className='text-white-50 md:text-xl'>
                A mobile-first application built using the Elementor page builder and Neve theme with all relevant plugins for a fast, secure, and user-friendly experience.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={project2Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src='../images/movie mockup.png' alt='project 2' />
              </div>
              <h2>Movie app from Figma design built with React, Tailwind and Appwrite.</h2>
            </div>
            
            <div className='project' ref={project3Ref}>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <img src='../images/github.webp' alt='project 3' />
              </div>
              <h2>So much more to see on my <a href='https://github.com/waxx567'>
               <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">GitHub</span></a></h2>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection