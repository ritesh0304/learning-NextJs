"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import { useEffect, useRef, useState } from "react";
import cardStyles from '../components/Card.module.css'
export default function Home() {
  const sliderArray = [
    {
      title: "Slider 1",
      subtitle: "subtitle for slider card 1",
      content: "content for slider card 1 my name is ritesh rana",
    },
    {
      title: "Slider 2",
      subtitle: "subtitle for slider card 2",
      content: "content for slider card 2 my name is ritesh rana",
    },
    {
      title: "Slider 3",
      subtitle: "subtitle for slider card 3",
      content: "content for slider card 3 my name is ritesh rana",
    },
  ];
  const [prevButton, setPrevButton] = useState(null);
  const [nextButton, setNextButton] = useState(null);
  const [currentIndex,setCurrentIndex]=useState(0);
  const sliderWrapperRef = useRef(null)
  
  useEffect(() => {
    const navigation = document.getElementsByClassName(styles.navigation)[0];
    const prev = navigation.children[0];
    const next = navigation.children[1];

    const handlePrevClick = () => {
      const elements = document.getElementsByClassName(cardStyles.card);
      Array.from(elements).forEach(element => {
        if (currentIndex >= 0 && currentIndex < 3) {
          element.style.left = (currentIndex) * -300 + 'px';
        }
      });
      if(currentIndex-1 >=0){
      setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1);
      }
    };

    const handleNextClick = () => {
      const elements = document.getElementsByClassName(cardStyles.card);
      Array.from(elements).forEach(element => {
        if (currentIndex >= 0 && currentIndex < 3) {
          element.style.left = (currentIndex + 1) * -300 + 'px';
        }
      });
      
      if(currentIndex+1 < 3){
      setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);
      }

    };

    prev.addEventListener('click', handlePrevClick);
    next.addEventListener('click', handleNextClick);

    // Clean up event listeners
    return () => {
      prev.removeEventListener('click', handlePrevClick);
      next.removeEventListener('click', handleNextClick);
    };
  }, [currentIndex]);



  return (
    <>
      <div className={styles.navigation}>
        <button >Prev</button>
        <button >Next</button>
      </div>
      <div className={styles.sliderWrapper}  ref={sliderWrapperRef} >
        {sliderArray.map((slider) => (
          <Card
            title={slider.title}
            subtitle={slider.subtitle}
            content={slider.content}
            key={slider.title}
          />
        ))}
      </div>
    </>
  );
}
