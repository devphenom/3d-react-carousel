import React from 'react'

// import Carousel from './Carousel'
import { Carousel } from '3d-react-carousel'
import '3d-react-carousel/dist/index.css'

const App = () => {
  return (
    <div className='container'>
      <Carousel>
        <img src='https://picsum.photos/800/304/?random' alt='5' />
        <img src='https://picsum.photos/801/304/?random' alt='5' />
        <img src='https://picsum.photos/802/304/?random' alt='5' />
        <img src='https://picsum.photos/803/304/?random' alt='5' />
        <img src='https://picsum.photos/805/304/?random' alt='5' />
        <img src='https://picsum.photos/806/304/?random' alt='5' />
        <img src='https://picsum.photos/807/304/?random' alt='5' />
      </Carousel>
    </div>
  )
}

export default App
