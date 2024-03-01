import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeAbout = () => {
  useEffect(() => {
    AOS.init({duration:1000});
  }, []);
  return (
    <div className='flex flex-col items-center text-center my-10 mx-5 sm:mx-10 lg:grid lg:grid-cols-2 lg:gap-6'>
      <div >
        <img className='h-80 w-auto object-cover shadow-xl sm:mb-5 sm:w-screen sm:h-full lg:h-full ' src="https://media.istockphoto.com/id/1219952311/photo/african-national-food-dish-nigerian-grilled-meat-and-chicken-dish.jpg?s=612x612&w=0&k=20&c=ubeV0Uh1I_SqQXZSq9Iswv6ZYatv7SOkROS09xn20eM=" alt="" />
      </div>
      <div > 
        <div className='flex flex-col text-center items-center my-5'>
            <h1 className='text-3xl leading-8 text-black font-Akshar md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-pretty sm:mb-5'>BIENVENUE CHEZ LUZ TRAITEUR</h1>
            <p className='text-black text-lg text-justify indent-12 sm:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, recusandae ipsam sed adipisci necessitatibus ipsum debitis soluta aperiam dolorum eos cum placeat voluptates repellendus libero quis vel cupiditate vitae nemo quibusdam minima quasi obcaecati tempore. Quisquam facilis omnis dignissimos. Consequuntur quisquam similique nam cum quam.</p>
            <div className='my-5 lg:my-10'>
                <Link spy={true} smooth={true} offset={-70} duration={500} to= '/About' className='btn btn-primary'>
                    <h3>LIRE PLUS</h3>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
