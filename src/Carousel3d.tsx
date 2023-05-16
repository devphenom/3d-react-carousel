import React, { Children, useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

export type CarouselDirectionType =
  | 'rtl'
  | 'ltr'
  | 'right'
  | 'left'
  | 'ttb'
  | 'btt'
  | 'top'
  | 'bottom'

type Carousel3dProps = {
  children: React.ReactNode
  direction?: CarouselDirectionType
}

const Carousel = ({ children, direction = 'ltr' }: Carousel3dProps) => {
  const arrayChildren = Children.toArray(children)
  const [labelIndex, setLabelIndex] = useState(1)
  const savedCallback = useRef()

  function callback() {
    if (labelIndex === arrayChildren?.length) {
      setLabelIndex(1)
    } else {
      setLabelIndex(labelIndex + 1)
    }
  }

  useEffect(() => {
    // @ts-ignore
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      // @ts-ignore
      savedCallback.current()
    }
    const id = setInterval(tick, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={styles.carousel3d}>
      <section className={`${styles.slider} ${styles[`${direction}`]}`}>
        {React.Children.map(arrayChildren, (child: React.ReactNode, index) => (
          <div
            key={`card-${index + 1}`}
            className={`${styles.cSlide} ${
              (labelIndex === 1 && index + 1 === arrayChildren.length) ||
              (labelIndex > 1 && labelIndex - 2 === index)
                ? styles.cSlidePrev
                : (labelIndex === 1 && index + 2 === arrayChildren.length) ||
                  (labelIndex === 2 && index + 1 === arrayChildren.length) ||
                  (labelIndex > 1 && labelIndex - 3 === index)
                ? styles.cSlidePrev2
                : (labelIndex === arrayChildren.length - 1 && index === 0) ||
                  labelIndex + 2 === index + 1 ||
                  (labelIndex === arrayChildren.length - 1 && index === 0) ||
                  (labelIndex === arrayChildren.length && index === 1)
                ? styles.cSlideNext2
                : labelIndex === index + 1
                ? styles.cSlideActive
                : labelIndex + 1 === index + 1 ||
                  (labelIndex === arrayChildren.length && index === 0)
                ? styles.cSlideNext
                : ''
            }`}
          >
            {child}
          </div>
        ))}
      </section>
    </div>
  )
}

export default Carousel
