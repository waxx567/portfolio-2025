import { useState, useEffect } from "react";

import { navLinks } from "../constants";

/**
 * A component that renders a header with a navbar and a contact button.
 * The navbar has three links to different sections of the page.
 * The contact button has a link to the contact section of the page.
 * The component has a state called "scrolled" which is set to true if the user has scrolled down the page at least 10px.
 * The component has an event listener for when the user scrolls, and will set the "scrolled" state to true if the user has scrolled down the page at least 10px.
 * The component also has a cleanup function that removes the event listener when the component is unmounted.
 * The component renders a header with the navbar and contact button, and adds a class of "scrolled" or "not-scrolled" to the header depending on the state of the component.
 */
const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Wayne • fivefiftyfive
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;