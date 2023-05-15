import * as React from 'react'
import Carousel3d, { CarouselDirectionType } from './Carousel3d'

// import styles from './styles.module.css'

interface Props {
  children: React.ReactNode
  direction?: CarouselDirectionType
}

export const Carousel = ({ children, direction }: Props) => {
  return <Carousel3d direction={direction}>{children}</Carousel3d>
}
