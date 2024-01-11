import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomeCatering.css';
//import { duration } from '@mui/material';

const HomeCatering = () => {
  useEffect(() => {
    AOS.init({duration:1000});
  }, []);
  return (
    <div className='catering--section'>
      <div className='catering--section--text--box' data-aos="fade-right">
        <div className='catering--section--text'>
            <h1>SERVICE TRAITEUR</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, recusandae ipsam sed adipisci necessitatibus ipsum debitis soluta aperiam dolorum eos cum placeat voluptates repellendus libero quis vel cupiditate vitae nemo quibusdam minima quasi obcaecati tempore. Quisquam facilis omnis dignissimos. Consequuntur quisquam similique nam cum quam.</p>
            <br />
            <div className='button'>
                <Link spy={true} smooth={true} offset={-70} duration={500} to= '/Traiteur' className='btn btn-primary'>
                    <h3>LIRE PLUS</h3>
                </Link>
            </div>
        </div>
      </div>
      <div className='catering--section--image' data-aos="fade-right">
        <img src="https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=" alt="" />
      </div>
    </div>
  )
}

export default HomeCatering
