import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import Nav from './Nav';
import Content from './Content';
import Work from './Work';
import HeroAniamtion from './HeroAniamtion';
import ScrollTrigger from "gsap/ScrollTrigger";
import About from './About';
import Contact from './Contact';
import BackToTop from './BackToTop';
import PinEffect from './PinEffect';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Hero = ({timeline,cursorRef,scrollInstance}) => {

   const scrollTimeline = useRef(gsap.timeline())

  return(
   <>
   <HeroAniamtion timeline={timeline}/>
   
    <div className='hero-content z-10 relative'>
      
        <Nav timeline={timeline} scrollInstance={scrollInstance}/>
        <Content timeline={timeline} scrollTimeline={scrollTimeline.current}/>
        <Work cursorRef={cursorRef} timeline={timeline} />
        <About timeline={timeline} cursorRef={cursorRef} />
        <PinEffect/>
        <Contact cursorRef={cursorRef}/>
        <BackToTop scrollInstance={scrollInstance} />
        <div className='bg-[var(--color-primary)] font-["brooklyn-normal"] text-[var(--color-light-text)] pb-2 pt-[4vw]'>
          <p className='text-[0.6rem] sm:text-xs md:text-sm lg:text-base uppercase text-center'>@ Krish Roy</p>
        </div>
    </div>
    
   </>
    
  )
}

export default Hero
