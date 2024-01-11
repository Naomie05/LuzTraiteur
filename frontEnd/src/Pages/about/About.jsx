import React from 'react';
import aboutImage from '../../assets/about-image.jpg';

import './About.css';

const About = () => {
  return (
    <div className='about--section'>
      <div className='about--section--image'>
        <img src={aboutImage} alt="" />
      </div>
      <div className='about--section--text--box'>
        <div className='about--section--text'>
            <h1>NOTRE HISTOIRE</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, recusandae ipsam sed adipisci necessitatibus ipsum debitis soluta aperiam dolorum eos cum placeat voluptates repellendus libero quis vel cupiditate vitae nemo quibusdam minima quasi obcaecati tempore. Quisquam facilis omnis dignissimos. Consequuntur quisquam similique nam cum quam.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim a quibusdam atque aliquam possimus harum perferendis ullam cupiditate voluptates expedita, rerum labore itaque! Voluptatem sunt cupiditate maiores animi a minus dolorum temporibus iusto at quidem laboriosam id repellendus itaque et eaque reiciendis, exercitationem obcaecati vitae ipsa possimus nulla. Perspiciatis, nobis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at culpa dolor aliquid eveniet veritatis laboriosam! Iure ea libero aliquid dolore optio deleniti ad voluptatum nesciunt deserunt ullam, voluptatibus aperiam doloribus, officiis sunt aliquam, maxime soluta amet tempore? Voluptas suscipit ex, ratione est dolores porro pariatur laborum molestias hic quia perspiciatis alias explicabo rem sit voluptatibus accusamus tempora minima! Obcaecati architecto est eligendi dolor blanditiis.</p>
        </div>
      </div>
    </div>
  )
}

export default About
