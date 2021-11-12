// Libraries
import React from 'react'
import GalleryGrid, { GalleryImage, GalleryImageList } from 'react-image-grid-gallary'

// External stylesheets
import 'react-image-grid-gallary/dist/index.css'
import './styles.css'

// Assets
import ImageSample1 from './assets/1.jpg'
import ImageSample2 from './assets/2.jpg'
import ImageSample3 from './assets/3.jpg'
import ImageSample4 from './assets/4.jpg'
import ImageSample5 from './assets/5.jpg'
import ImageSample6 from './assets/6.jpg'
import ImageSample7 from './assets/7.jpg'
import ImageSample8 from './assets/8.jpg'
import ImageSample9 from './assets/9.jpg'
import ImageSample10 from './assets/10.jpg'
import ImageSample11 from './assets/11.jpg'
import ImageSample12 from './assets/12.jpg'


/**
 * Main function component
 * @returns JSX
 */
const App = () => {
    return (
      <div>
        {/* Without list */}
        <h2>Using seperate elements</h2>
        <GalleryGrid cols={5} hello="Hi">
          <GalleryImage src={ ImageSample1 } title="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" />
          <GalleryImage src={ ImageSample2 } title="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" />
          <GalleryImage src={ ImageSample3 } title="3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" />
          <GalleryImage src={ ImageSample4 } title="4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" />
          <GalleryImage src={ ImageSample5 } title="5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" />
          <GalleryImage src={ ImageSample6 } title="6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" />
          <GalleryImage src={ ImageSample7 } title="7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" />
          <GalleryImage src={ ImageSample8 } title="8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" />
          <GalleryImage src={ ImageSample9 } title="9 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" />
          <GalleryImage src={ ImageSample10 } title="10 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" />
          <GalleryImage src={ ImageSample11 } title="11 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" />
          <GalleryImage src={ ImageSample12 } title="12 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" />
        </GalleryGrid>

        <br />

        <h2>Using images as a list</h2>
        {/* With list */}
        <GalleryImageList 
          cols={3}
          imageList={[
            {src: ImageSample1, title: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" },
            {src: ImageSample2, title: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" },
            {src: ImageSample3, title: "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" },
            {src: ImageSample4, title: "4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" },
          ]} 
        />
    </div>
  )
}

export default App
