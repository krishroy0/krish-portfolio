import { useGSAP } from '@gsap/react'
import profile from '/krish.jpg'
import gsap from 'gsap'


const Intro = () => {

    useGSAP(()=>{

    let mm = gsap.matchMedia()

      mm.add({
        isMobile:'(max-width:1024px)',
        isDesktop:'(min-width:1025px)',
      },(context)=>{

        const {isMobile,isDesktop} = context.conditions;

         gsap.to('.ring-rotate',{
            rotate:360,
            scrollTrigger:{
                trigger:'.about-page',
                start:'top 50%',
                end:'top -40%',
                scrub:1,
            }
        })
         gsap.from('.name-underline',{
            width:'0%',
            backgroundColor:'green',
            scrollTrigger:{
                trigger:'.about-page',
                start: isMobile ? 'top 45%' : 'top 30%',
                end: isMobile ? 'top 18%' : 'top 5%',
                scrub:1,
            }
        })
         gsap.from('.about-text',{
            y:30,
            filter:'blur(2px)',
            scrollTrigger:{
                trigger:'.about-text',
                start: isMobile ? 'top 90%' : 'top 80%',
                end: isMobile ? 'top 55%' : 'top 65%',
                scrub:1,
            }
        })

      })
       
    })


  return (
     <div className="flex flex-col gap-[5vw] w-full">
       <div className="introduction h-18 md:h-[12vh] lg:h-[20vh] w-full mt-[3vw] rounded-full">
         <div className="h-full flex items-center gap-[5vw]">
              <div className="h-full aspect-square rounded-full relative ">
                  <img className="h-full w-full rounded-full " src={profile} alt="" />
                  <svg className="ring-rotate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[135%] aspect-square " viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" stroke="var(--color-text)" strokeWidth="0.6px" fill="none" />
                      <circle cx="110" cy="60" r="3.2px" fill="var(--color-text)" />
                  </svg>
              </div>
              <div className="flex gap-[1vw] items-center  h-[4.5vw] md:h-[4vw] xl:h-[3vw]">
                  <div className="relative h-full">
                     <h1 className="text-[4vw] md:text-[3.5vw] xl:text-[2.5vw] flex items-center font-['anton']  gap-[1vw] leading-none tracking-wider whitespace-nowrap ">KRISH ROY</h1>
                      <div className="name-underline absolute bottom-0 h-[1px] w-[100%] bg-[var(--color-text)]"></div>
                  </div>
                   <p className="text-[2.3vw] sm:text-[2vw] md:text-[1.7vw] lg:text-[1.5vw] xl:text-[1.3vw] h-full flex items-center justify-center font-['brooklyn-normal'] whitespace-nowrap"> - a passionate web developer.</p>
              </div>
         </div>

       </div>
        <div className="about-text text-[3.4vw] sm:text-[2.4vw] md:text-[1.7vw] xl:text-[1.3vw]">
                <p className="flex flex-col gap-[2vw]"><span ><span className="pl-[5vw] pr-[0.5vw]">I recently </span>started my journey into web development, driven by a love for creativity and technology. I enjoy turning ideas into clean, functional, and user-friendly websites.I believe in writing clean, efficient code and continuously improving through learning and hands-on practice. Though I'm just starting, I'm committed to growing into a well-rounded, professional developer who delivers real value through thoughtful design and performance. </span><span> Currently, I'm working with HTML, CSS, JavaScript, React, Tailwind CSS, and GSAP to bring interfaces to life.</span> </p>
              </div>
        </div>
  )
}

export default Intro
