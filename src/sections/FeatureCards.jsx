import { abilities } from '../constants';

/**
 * A component that renders a section with a grid of feature cards. Each card is a div
 * with a rounded border and a flex layout. The card contains an image, a title, and a
 * description. The cards are arranged in a 3-column grid on large screens and a single
 * column on small screens.
 */
const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg'>
      <div className='mx-auto grid-3-cols'>
        {abilities.map(({ imgPath, title, desc }) => (
          <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
            <div className='size-14 flex items-center justify-center rounded-full'>
              <img src={imgPath} alt={title} className='w-15 h-15' />
            </div>
            <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
            <p className='text-white-50 text-lg'>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCards