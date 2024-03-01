
import '../carrousel/Carrousel.css';
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

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
      <div className='w-full h-auto overflow-hidden md:max-w-full'>
        <div className='relative'>
        {slides.map((slide, index) => {
          return (
            <div className={index === currentState ? 'opacity-85 transition duration-5000 transform scale-102' : 'opacity-50 transition duration-2000 ease'} key={index}>
              {index === currentState && (
                <div className='md:shrink-0'>
                  <img src={slide.url} alt='' className='realtive h-screen w-full object-cover sd:h-screen sd:w-full brightness-50 mb-0' />
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white sm:top-48 sm:-translate-y-2/3 md:top-1/2 md:-translate-y-1/2'>
                    <h1 className='text-4xl leading-normal text-first my-10 md:my-10 font-Akshar md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-pretty'>
                      {slide.title}
                    </h1>
                    <p className='text-lg font-semibold md:text-xl lg:text-1xl xl:text-2xl'>
                      {slide.body}
                    </p>
                  </div>
                  <div >
                    <Link to='/Menu'>
                      <button className='btn btn-primary absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center sm:top-72 md:top-3/4'>Voir le Menu</button>
                    </Link>
                  </div>
                  <MdKeyboardArrowLeft className='absolute cursor-pointer top-1/2 left-0 text-3xl text-white md:text-5xl lg:text-6xl xl:text-7xl' onClick={prevSlide} />
                  <MdKeyboardArrowRight className='absolute cursor-pointer top-1/2 right-0 text-3xl text-white md:text-5xl lg:text-6xl xl:text-7xl' onClick={nextSlide} />
                  <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3'>
                    {
                      slides.map((slide, index) =>(
                        <span key={index} className={index === currentState ? 'dot active' : 'dot'} onClick={() => goToNext(index)}></span>
                      ))
                    }
                  </div>
                </div>  
              )}
            </div>
          );
        })}
      </div>
      </div>
    );
}

export default Carrousel
