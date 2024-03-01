import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import { duration } from '@mui/material';

const HomeCatering = () => {
  useEffect(() => {
    AOS.init({duration:1000});
  }, []);
  return (
    <div className='flex flex-col-reverse items-center text-center my-10 mx-5 sm:mx-10 lg:grid lg:grid-cols-2 lg:gap-6'>
      <div>
        <div className='flex flex-col text-center items-center my-5'>
            <h1 className='text-3xl leading-8 text-black font-Akshar md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-pretty sm:mb-5'>SERVICE TRAITEUR</h1>
            <p className='text-black text-lg text-justify indent-12 sm:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, recusandae ipsam sed adipisci necessitatibus ipsum debitis soluta aperiam dolorum eos cum placeat voluptates repellendus libero quis vel cupiditate vitae nemo quibusdam minima quasi obcaecati tempore. Quisquam facilis omnis dignissimos. Consequuntur quisquam similique nam cum quam.</p>
            <div className='my-5 lg:my-10'>
                <Link spy={true} smooth={true} offset={-70} duration={500} to= '/Traiteur' className='btn btn-primary'>
                    <h3>LIRE PLUS</h3>
                </Link>
            </div>
        </div>
      </div>
      <div>
        <img className='h-80 w-auto object-cover shadow-xl sm:mb-5 sm:w-screen sm:h-full lg:h-full' src="https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=" alt="" />
      </div>
    </div>
  )
}

export default HomeCatering
