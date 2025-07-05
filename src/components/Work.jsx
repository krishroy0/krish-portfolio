import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Project from "./Project"
import { projects } from "../utils/ProjectData"

const Work = ({cursorRef,timeline}) => {

  const { contextSafe } = useGSAP()

  const cursorRemove = contextSafe(()=>{
    gsap.to(cursorRef.current,{
      scale:0,
      opacity:0
    })
  })

   const cursorAdd = contextSafe(()=>{
    gsap.to(cursorRef.current,{
      scale:1,
      opacity:1,

    })
  })
 
  function cursorEnterHandle(){
      cursorRemove()
  }

    function cursorLeaveHandle(){
      cursorAdd()
  }


  useGSAP(()=>{

    let mm = gsap.matchMedia()

    mm.add({
      isMobile:'(max-width:1024px)',
      isDesktop:'(min-width:1025px)',
    },(context)=>{

      const {isMobile,isDesktop} = context.conditions;


      if(isMobile){
        timeline.from('.project-page',{
          y:50,
          opacity:0,
          duration:1
        },'<')
      }

        const scrollTimeline = gsap.timeline({scrollTrigger:{
        trigger:'.project-page',
        start: isMobile ? 'top 50%' : 'top 78%',
        end: isMobile ? 'top 25%' : 'top 20%',
        scrub:2,
      }});

      scrollTimeline.to('.netflix-title',{
        top:'-4.7vw',
        stagger:1
      },'<')
      scrollTimeline.to('.number',{
        top:'-4vw',
        duration:1,
        stagger:1
      },'<')

          if(isMobile){
            gsap.to('.number',{
            y:-6,
            repeat:-1,
            yoyo:true,
            duration:1,
            ease:'sine.inOut'
          })
          }
    

          if(isDesktop){

            gsap.to('.netflix-title',{
            y:-6,
            repeat:-1,
            yoyo:true,
            duration:1,
            ease:'sine.inOut'
          })

            gsap.to('.view-project',{
            y:-60,
            repeat:-1,
            yoyo:true,
            duration:1,
            ease:'sine.inOut'
          })
          }
    })

           
    return () => mm.kill();
   
       
  })




  return (
    <div id="workSection" data-scroll-section  className="project-page  w-full font-['brooklyn-normal'] text-[var(--color-light-text)]  mt-15 md:mt-25 xl:mt-30 flex flex-col gap-[36vw] md:gap-[15vw] ">
      {/* <Project cursorEnterHandle={cursorEnterHandle} cursorLeaveHandle={cursorLeaveHandle}  /> */}
      {projects.map((project,idx)=>{
        return <Project cursorEnterHandle={cursorEnterHandle} cursorLeaveHandle={cursorLeaveHandle} project={project} />
      })}
      {/* <Project  cursorEnterHandle={cursorEnterHandle} cursorLeaveHandle={cursorLeaveHandle} /> */}
    </div>
  )
}

export default Work
