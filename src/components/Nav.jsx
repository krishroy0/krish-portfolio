import { SunMoon } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { lazy, useEffect, useRef, useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react'
import MobileNav from './MobileNav';

const Nav = ({timeline,scrollInstance}) => {


  const [isOpen, setOpen] = useState(false)
  const [isDark,setIsDark] = useState(false)
  let navTimeline = useRef(gsap.timeline({paused: true}))


  useEffect(()=>{
    if(isOpen){
        navTimeline.current.timeScale(1.5).play()
    }
    else{
      navTimeline.current.timeScale(3).reverse()
      
    }
  },[isOpen])



  useGSAP(()=>{
    timeline.from('.logo',{
        y:-10,
        opacity:0,
        duration:0.8,
        
    },'-=0.5').from('.menu',{
      y:-10,
      opacity:0,
      duration:.8,
      stagger:0.1
    },'<').from('.hum-menu',{
      y:-10,
      opacity:0,
      duration:.8,
      stagger:0.1
    },'<').from('.sun-moon',{
      y:-10,
      opacity:0,
      duration:.8,
      stagger:0.1
    },'<')
  })

  useEffect(()=>{
     if(isDark){
    document.documentElement.style.setProperty('--color-primary', '#FEFEFE');
    document.documentElement.style.setProperty('--color-text', '#111111');
    document.documentElement.style.setProperty('--color-light-text', '#1e1e1e');
    document.documentElement.style.setProperty('--color-verylight-text', '#4d4d4d');

   }
   else{
    document.documentElement.style.setProperty('--color-primary', '#111111');
    document.documentElement.style.setProperty('--color-text', '#e1e1e1');
    document.documentElement.style.setProperty('--color-light-text', '#a9a9a9');
    document.documentElement.style.setProperty('--color-verylight-text', '#a9a9a942');

   }

  },[isDark])


  function handleMenu(){
    let body = document.querySelector('body')
     body.classList.add('h-screen','max-h-screen','overflow-hidden')  
  }

  

 
  return (
    
    <>
    <MobileNav toggled={isOpen} toggle={setOpen} navTimeline={navTimeline.current} scrollInstance={scrollInstance} setIsDark={setIsDark}/>
    <div id="homeSection" data-scroll-section className='navbar w-full flex items-center justify-between font-["brooklyn-normal"] py-4 h-15 md:h-20  z-[10] px-[5vw] relative'>
      
      <div className="logo select-none">
        <p className='font-["anton"]   text-xl sm:text-2xl md:text-3xl  lg:text-4xl text-[var(--color-text)]'>RK</p>
      </div>
      <div className="menus h-full flex items-center gap-20 text-[var(--color-text)] text-base">
      <div onClick={handleMenu} className='hum-menu lg:hidden z-[99] -mx-3.5'>
          <Hamburger color='var(--color-text)' toggled={isOpen} toggle={setOpen} size={20}  />
      </div>
        <div className='h-full items-center gap-10 uppercase hidden lg:flex'>
            <p onClick={()=>{scrollInstance.scrollTo('#workSection',{duration:2,offset:-330})}} className='cursor-pointer menu'>My Work</p>
            <p  onClick={()=>{scrollInstance.scrollTo('#aboutSection'),{duration:3}}} className='cursor-pointer menu'>About</p>
            <p  onClick={()=>{scrollInstance.scrollTo('#contactSection'),{duration:2000}}} className='cursor-pointer menu'>Contact</p>
        </div>
        <div onClick={()=>{setIsDark(prev=>!prev)}} className='sun-moon h-full aspect-square hidden lg:block'>
            <SunMoon className='h-full aspect-square cursor-pointer'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Nav
