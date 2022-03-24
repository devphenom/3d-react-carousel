# 3d-react-carousel

> A 3D React Library

[![NPM](https://img.shields.io/npm/v/3d-react-carousel.svg)](https://www.npmjs.com/package/3d-react-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save 3d-react-carousel
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from '3d-react-carousel'
import '3d-react-carousel/dist/index.css'

const Example = () => {
  return (
    <div>
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
```

## License

MIT © [devphenom](https://github.com/devphenom)
