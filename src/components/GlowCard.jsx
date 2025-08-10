import React, { useRef } from 'react'

/**
 * A GlowCard component that displays a glowing card with a star rating and a
 * review. The card glows when the mouse is moved over it.
 *
 * @param {object} card - the card object with the review and date
 * @param {ReactNode} children - the children of the card
 * @param {number} index - the index of the card in the parent component
 * @returns {ReactNode} the glow card component
 */
const GlowCard = ({ card, children, index }) => {
  const cardRefs = useRef([]);

  /**
   * Handles the mouse move event on the card. Calculates the position of the
   * mouse relative to the card, calculates the angle of the mouse relative to
   * the center of the card, and applies the rotation to the card.
   *
   * @param {number} index - the index of the card in the parent component
   * @returns {(e: MouseEvent) => void} the function that handles the mouse move
   *   event
   */
  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    // Calculate the position of the mouse relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // Calculate the angle of the mouse relative to the center of the card
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    // Apply the rotation to the card
    card.style.setProperty('--start', angle + 60);
  }

  return (
    <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className='card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column'>
      <div className='glow' />
      <div className='flex items-center gap-1 mb-5'>
        {Array.from({ length: 5}, (_, i) => (
          <img src='./images/star.png' key={i} alt='star' className='size-5' />
        ))}
      </div>
      <div className='mb-5'>
        <p className='text-white-50 text-lg'>{card.review}</p>
      </div>
      {children}
    </div>
  )
}

export default GlowCard