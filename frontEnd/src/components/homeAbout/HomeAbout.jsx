import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './HomeAbout.css';

const HomeAbout = () => {
  useEffect(() => {
    AOS.init({duration:2000});
  }, []);
  return (
    <div className='about--section'>
      <div className='about--section--image' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <img src="https://media.istockphoto.com/id/1219952311/photo/african-national-food-dish-nigerian-grilled-meat-and-chicken-dish.jpg?s=612x612&w=0&k=20&c=ubeV0Uh1I_SqQXZSq9Iswv6ZYatv7SOkROS09xn20eM=" alt="" />
      </div>
      <div className='about--section--text--box' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div className='about--section--text'>
            <h1>BIENVENUE CHEZ LUZ TRAITEUR</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, recusandae ipsam sed adipisci necessitatibus ipsum debitis soluta aperiam dolorum eos cum placeat voluptates repellendus libero quis vel cupiditate vitae nemo quibusdam minima quasi obcaecati tempore. Quisquam facilis omnis dignissimos. Consequuntur quisquam similique nam cum quam.</p>
            <br />
            <div className='button'>
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
