import * as React from 'react'
import Carousel3d from './Carousel3d'

// import styles from './styles.module.css'

interface Props {
  children: React.ReactNode
}

export const Carousel = ({ children }: Props) => {
  return <Carousel3d>{children}</Carousel3d>
}
