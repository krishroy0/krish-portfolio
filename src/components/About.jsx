import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import Intro from "./AboutParts/Intro";
import Skills from "./AboutParts/Skills";
import { ArrowDownToLine } from 'lucide-react';

const About = ({timeline,cursorRef}) => {

      const {contextSafe} = useGSAP()

      const addHover = contextSafe(()=>{
        gsap.to('.download',{
          rotate:0,
          duration:0.3,
          scale:1.2
        })
        gsap.to(cursorRef.current,{
          duration:0.5,
          scale:1.8
        })
      })
      const removeHover = contextSafe(()=>{
        gsap.to('.download',{
          rotate:-90,
          duration:0.3,
          scale:1
        })
         gsap.to(cursorRef.current,{
          duration:0.5,
          scale:1
        })
      })

      

    useGSAP(()=>{


      let mm = gsap.matchMedia()
      
      mm.add({
        isMobile:'(max-width:1024px)',
        isDesktop:'(min-width:1025px)',
      },(context)=>{
        const {isMobile,isDesktop} = context.conditions;


      if(isMobile){
        timeline.to('.about-page',{
        backgroundColor:'var(--color-primary)',
        duration:0.01
      },'-=1')
      }else{
            gsap.to('.about-page',{
        backgroundColor:'var(--color-primary)'})
      }  

        gsap.from('.about-span',{
        scrollTrigger:{
            trigger:'.about-page',
            start:isMobile ? 'top 80%' : 'top 75%',
            end:isMobile ? 'top 50%' : 'top 60%',
            scrub:1
        },
        y:30,
        opacity:0,
        stagger:0.4,
        duration:1
    })

    gsap.from('.btn-resume',{
      scrollTrigger:{
                trigger:'.btn-resume',
                start:  isMobile ? 'top 80%' : 'top 92%',
                end:  isMobile ? 'top 72%' : 'top 78%',
                scrub:1,
            },
        y:20,
        opacity:0,
    })



      })

             
    return () => mm.kill();
       
    })

  return (
    <div id="aboutSection" data-scroll-section className='about-page h-auto w-full flex flex-col gap-[4vw] items-center  px-[5vw] font-["brooklyn-normal"] text-[var(--color-text)] pt-30 md:pt-20 pb-10 md:pb-15 lg:pb-20'>
      <h1 className='text-[8vw] font-["anton"] flex gap-[2vw]' >
       <div>
            <span className="about-span">A</span>
            <span className="about-span">B</span>
            <span className="about-span">O</span>
            <span className="about-span">U</span>
            <span className="about-span">T</span>
        </div>
        <div>
            <span className="about-span">M</span>
            <span className="about-span">E</span>
        </div>

      </h1>
      <Intro/>
      <Skills/>  
      <div className="pt-5 btn-resume" >
       <a className="decoration-0" href="/krish-roy-resume.pdf" download>
         <button  onMouseEnter={()=>addHover()} onMouseLeave={()=>removeHover()} className="bg-[var(--color-text)] text-[var(--color-text)] active:text-[var(--color-primary)] active:bg-[var(--color-primary)] h-[7vw] sm:h-[5.5vw] md:h-[4vw] lg:h-[3vw] cursor-pointer w-fit group">
            <div className="flex items-center gap-[1vw] bg-[var(--color-primary)] active:bg-[var(--color-text)] h-full -translate-y-[0.6vw] w-full px-[2vw] border-1 group-hover:-translate-y-[0.3vw] duration-250 ease-in">
              <ArrowDownToLine className="download h-1/2 aspect-square rotate-270"/>
              <p className="text-[0.6rem] sm:text-xs md:text-base lg:text-lg tracking-widest font-['anton'] leading-0">RESUME</p>
            </div>
      </button>
       </a>
    </div>
    </div>
  )
}

export default About
