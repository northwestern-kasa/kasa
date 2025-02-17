"use client"; 
import styles from './execcard.module.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import NameTag from './NameTag';
import { useState } from "react"


export default function ExecCard(props: Array) {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide == props.images.length - 1 ? 0 : slide + 1);
      };
    
      const prevSlide = () => {
        setSlide(slide === 0 ? props.images.length - 1 : slide - 1);
      };

    return (
        <div className={styles.carousel}>
          <NameTag name={props.images[slide].alt} />
          <MdKeyboardArrowLeft onClick={prevSlide} className={styles.arrowLeft} />
          {props.images.map((item: any, index: any) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={index}
                className={slide === index ? styles.headshot : styles.headshotHidden}
              />
            );
          })}
          <MdKeyboardArrowRight
            onClick={nextSlide}
            className={styles.arrowRight}
          />
          <span className={styles.indicators}>
            {props.images.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    slide === index ? styles.indicator : styles.indicatorOff
                  }
                  onClick={() => setSlide(index)}
                ></button>
              );
            })}
          </span>
          
        </div>
    )
}


