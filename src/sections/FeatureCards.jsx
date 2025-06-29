import { abilities } from '../constants';

const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg'>
      <div className='mx-auto grid-3-cols'>
        {abilities.map(({ imgPath, title, desc }) => (
          <div>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCards