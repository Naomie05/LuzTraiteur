import React from 'react';
import Carrousel from '../../components/carrousel/Carrousel';
//import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel';
import Special from '../../components/special/Special';
import HomeAbout from '../../components/homeAbout/HomeAbout';
import HomeCatering from '../../components/homeCatering/HomeCatering';
import imageSlide from '../../data';

const Home = () => {
  return (
    <div className='bg-orange-back'>
      <div>
        <Carrousel slides={imageSlide}/>
      </div>
      <div>
        <Special/>
      </div>
      <div>
        <HomeAbout/>
      </div>
      <div>
        <HomeCatering/>
      </div>
    </div>
  );
};
export default Home;
