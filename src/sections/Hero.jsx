import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/HeroModels/HeroExperience";

/**
 * A component that renders the hero section of the webpage.
 * The hero section contains a background image, a heading with a gradient
 * animation, a paragraph of text, and a button with a counter animation.
 * The component uses the useGSAP hook to animate the heading and button.
 * The component also renders a 3D model of a person using the HeroExperience
 * component, which is a wrapper around the HeroModel component.
 * The 3D model is animated with a hover effect that changes the model's rotation
 * and zoom level.
 */
const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Crafting
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">Experiences</span></h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              By Wayne McRae - a South African developer with a passion for
              code.
            </p>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Your mouse controls the 3D models on the site and moves them around ❯❯❯
            </p>

            <Button
              text="See My Stats"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout hover:cursor-grab">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;