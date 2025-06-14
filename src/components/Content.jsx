import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Scale } from "lucide-react"
import ScrollTrigger from "gsap/ScrollTrigger"

const Content = ({timeline,scrollTimeline}) => {

  useGSAP(()=>{

    ScrollTrigger.refresh();

    timeline.from('.first',{
      y:100,
      opacity:0,
      duration:0.8,
      stagger:0.1,
      
    },'<')
    .from('.second',{
      y:100,
      opacity:0,
      duration:0.8,
      stagger:0.1,
    },'<')
    .from('.side-text',{
        y:40,
        opacity:0,
        duration:1,
    },'-=0.6')
    .from('.see-work',{
      scale:1.2,
      opacity:0,
      duration:0.4
    },'<')
    .from('.line',{
      opacity:0,
      duration:0.4
    },'-=1')
  })

  useGSAP(()=>{

    let mm = gsap.matchMedia()

    

    mm.add({
      isMobile:'(max-width:1024px)',
      isDesktop:'(min-width:1025px)',
    },(context)=>{
      let {isMobile,isDesktop} = context.conditions;

      gsap.to('.name-div',{
      scrollTrigger:{
        trigger:'.name-div',
        start: isMobile ? 'top -5%' : 'top 6%', //top 90%
        end: isMobile ? 'top -15%' : 'top -45%',  // top 35%
        scrub:1,
      },
     
      skewY:isDesktop && 10,
      scale:isDesktop && 0.8,
      opacity:0
    })
    

      scrollTimeline.to('.work-div',{
       scrollTrigger:{
        trigger:'.see-work',
        start: isMobile ? 'top 33%' : 'top 90%',
        end: isMobile ? 'top 15%' : 'top 80%',
        scrub:1,
      },
      y:-65,
      duration:1
    })
    .to('.see-work',{
      scrollTrigger:{
        trigger:'.see-work',
        start: isMobile ? 'top 33%' : 'top 90%',
        end: isMobile ? 'top 15%' : 'top 80%',
        scrub:1,
       
      },
      scale:1.4,
      duration:0.7
    })
    .to('.line',{
      scrollTrigger:{
        trigger:'.see-work',
        start: isMobile ? 'top 25%' : 'top 80%',
        end: isMobile ? 'top 20%' : 'top 70%',
        scrub:1
      },
      rotate:90,
      scaleY:isMobile ? 3.5 : 5,
      duration:0.3
    },'<')
      
    })

             
    return () => mm.kill();
    
  })

  return (
   
        <div  className=' w-full h-auto md:h-[60vh] lg:h-[92vh] flex flex-col pt-[11vw] md:pt-[7vw] text-[var(--color-text)] gap-10 lg:gap-20 px-[5vw]'>
            <div className='name-div flex flex-col lg:flex-row flex-start w-full justify-between  '>
                <div  className=' text-[10vw]  font-["anton"] leading-none flex gap-[2vw]'><span className="first">HI ! </span><span className="first"> I'M </span><span className="first">KRISH</span></div>
                <div className=' lg:w-[20%]  h-full font-["brooklyn-normal"] pt-[0.3vw]  text-lg'>
                <p className='text-xs sm:text-sm  md:text-base lg:text-lg leading-relaxed text-[var(--color-light-text)] tracking-tight side-text'>Clean code, creative designs, constant learning.</p></div>
            </div>
             <div className='name-div flex flex-col-reverse lg:flex-row flex-start w-full justify-between'>
                <div className='lg:w-[30%]  h-full font-["brooklyn-normal"] pt-[0.3vw]  text-lg '>
                  <p className='text-xs sm:text-sm  md:text-base lg:text-lg leading-relaxed text-[var(--color-light-text)] text-right lg:text-left side-text'>As a web developer at the start of my journey, I believe that curiosity, consistency, and code can build meaningful digital experiences.</p>
                </div>
                <div className='text-[10vw]  font-["anton"] leading-none tracking-tight text-right lg:text-left  flex gap-[2vw]'><span className="second">WEB</span><span className="second">DEVELOPER</span></div>
            </div>
            <div className="work-div mt-10 h-15 md:h-22 md:mt-auto w-full flex justify-center items-center ">
                  <div className="flex flex-col justify-center items-center h-full gap-1.5  font-['anton']">
                    <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg see-work">SEE MY WORK</p>
                    <div className="flex min-h-0 flex-1 w-[2px] md:w-[3px] bg-[var(--color-text)] line"></div>
                  </div>
            </div>
        </div>
  )
}

export default Content
