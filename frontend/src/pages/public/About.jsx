import React, { useEffect } from 'react'
import AboutHero from '../../components/public/about/Hero'
import WhoWeAre from '../../components/public/about/WhoWeAre';
import WhyChooseUs from '../../components/public/about/WhatweDo';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero/>
      <WhoWeAre/>
      <WhyChooseUs/>
      
    </div>
  )
}

export default About
