
import '../carrousel/Carrousel.css';
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Carrousel = ({slides}) => {
    const [currentState, setCurrentState] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrentState((currentState + 1) % length);
    };
  
    const prevSlide = () => {
      setCurrentState((currentState - 1 + length) % length);
    };
  
    const goToNext = (index) => {
      setCurrentState(index)
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentState((currentState + 1) % length);
      }, 8000);
      return() => clearInterval(interval);
    }, [currentState, length]);
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
      <div className='carousel'>
        <MdKeyboardArrowLeft className='left-arrow' onClick={prevSlide} />
        <MdKeyboardArrowRight className='right-arrow' onClick={nextSlide} />
        <div className='slides-container'>
        {slides.map((slide, index) => {
          return (
            <div className={index === currentState ? 'slide active' : 'slide'} key={index}>
              {index === currentState && (
                <div className='slide-content'>
                  <img src={slide.url} alt='' className='bgImage' />
                  <div className='content'>
                    <h1 className='title'>{slide.title}</h1>
                    <p className='body--text'>{slide.body}</p>
                  </div>
                </div> 
              )}
            </div>
          );
        })}
        <div className='carrousel--dot'>
          {
            slides.map((slide, index) =>(
              <span key={index} className={index === currentState ? 'dot active' : 'dot'} onClick={() => goToNext(index)}></span>
            ))
          }
        </div>
      </div>
      </div>
    );
}

export default Carrousel
