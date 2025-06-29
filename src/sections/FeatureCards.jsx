import { abilities } from '../constants/index.js'

const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg'>
      <div className='mx-auto grid-3-cols'>
        {abilities}
      </div>
    </div>
  )
}

export default FeatureCards