# react-image-grid-gallary

> This React Component displays an image gallery using CSS Grid.

[![NPM](https://img.shields.io/npm/v/react-image-grid-gallary.svg)](https://www.npmjs.com/package/react-image-grid-gallary) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install
```bash
npm install @dinethpiyumantha/react-image-grid-gallary
```

## Usage
#### Import resources
```jsx
import Image1 from './assets/1.jpg'
import Image2 from './assets/2.jpg'
```
</br>

#### Using component wise 
<p> Using this way, you can add images seperatly. If you are wish to use a loop, the you can use this. </p>

```jsx
import React, { Component } from 'react'

import GalleryGrid, { GalleryImage } from 'react-image-grid-gallary'
import 'react-image-grid-gallary/dist/index.css'

class App extends Component {
  render() {
    return (
      <GalleryGrid cols={5} >
        <GalleryImage src={ Image1 } title="1 Lorem ipsum dolor sit amet" />
        <GalleryImage src={ Image2 } title="2 Lorem ipsum dolor sit amet" />
      </GalleryGrid>
    )
  }
}
```
</br>

#### Using as a list
<p>If you wish to add object list. You can use this way</p>

```jsx
import React, { Component } from 'react'

import { GalleryImageList } from 'react-image-grid-gallary'
import 'react-image-grid-gallary/dist/index.css'

class App extends Component {
  render() {
    return (
      <GalleryImageList 
          cols={3}
          imageList={[
            {src: Image2, title: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" },
            {src: Image1, title: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem!" }
          ]} 
        />
    )
  }
}
```

## License

MIT © [dinethpiyumantha](https://github.com/dinethpiyumantha)
