/**
 * A component that renders an anchor element with a smooth scrolling effect to an element with a matching id.
 * 
 * @param {string} text - The text that will be rendered in the button.
 * @param {string} [className] - Additional CSS classes to be applied to the outermost element.
 * @param {string} [id] - The id of the element to scroll to. If omitted, no scroll effect will be applied.
 * @returns {ReactElement}
 */
const Button = ({ text, className, id }) => {
  return (
    <a
     onClick={(e) => {
      e.preventDefault();
       
      const target = document.getElementById('counter')
       
      if (target && id) {

        const offset = window.innerHeight * 0.15;
        
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: top,
          behavior: 'smooth',
        });
      }
     }}
     className={`${className ?? ''} cta-wrapper`}>
      <div className='cta-button group'>
        <div className='bg-circle' />
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
          <img src='./images/arrow-down.svg' alt='arrow' />
        </div>
      </div>
    </a>
  )
}

export default Button
