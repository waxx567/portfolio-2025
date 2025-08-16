import { socialImgs } from "../constants";

/**
 * Footer component, which renders a simple footer with a link to my blog,
 * my social media links, and a copyright notice.
 *
 * @returns {JSX.Element} The rendered footer element.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="https://fivefiftyfive.io"><span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">fivefiftyfive.io</span></a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a className="icon" target="_blank" href={socialImg.url} key={socialImg.url}>
                <img src={socialImg.imgPath} alt="social icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Wayne McRae. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;