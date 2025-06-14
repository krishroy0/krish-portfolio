import { useGSAP } from '@gsap/react'   
import gsap from 'gsap'
import { useEffect, useRef} from 'react'
 
const Skills = () => {

    const skillsRef  = useRef()


    useEffect(()=>{
        const el = skillsRef.current
        if(!el) return;
        el.addEventListener('mousemove',addMoves)
        el.addEventListener('mouseleave',removeMoves)

        return()=>{
            el.removeEventListener('mousemove',addMoves)
            el.removeEventListener('mouseleave',removeMoves)

        }
    },[])
    

    function addMoves(e){
        let rect = skillsRef.current.getBoundingClientRect()
        gsap.to('.skill-div',{
            rotateX:(e.clientX - (rect.width / 2))/ 30,
            rotateY:(e.clientY - rect.height) / 30
        })
    }

     function removeMoves(){

        gsap.to('.skill-div',{
            rotateX:0,
            rotateY:0
        })
    }


    useGSAP(()=>{

        let mm = gsap.matchMedia()

      mm.add({
        isMobile:'(max-width:1024px)',
        isDesktop:'(min-width:1025px)',
      },(context)=>{

        const {isMobile,isDesktop} = context.conditions;


         gsap.from('.skill-title',{
            x:-50,
            opacity:0,
            filter:'blur(5px)',
            scrollTrigger:{
                trigger:'.skills',
                start:  isMobile ? 'top 80%' : 'top 75%',
                end:  isMobile ? 'top 70%' : 'top 65%',
                scrub:1,
            }
        })

        gsap.from('.skill-div',{
            x:40,
            stagger:1,
            opacity:0,
            scrollTrigger:{
                trigger:'.skills',
                start: isMobile ? 'top 73%' : 'top 75%',
                end:  isMobile ? 'top 60%' : 'top 60%',
                scrub:1,
            }
        })

      })

       
    return () => mm.kill();

       
    })

    const skillsArray = ['html','css','javascript','react','TailwindCSS','redux','github']

  return (
    <div className="skills w-full">
            <div className="flex flex-col gap-[3vw]  ">
               <h1 className="skill-title text-[3.4vw] sm:text-[2.3vw] md:text-[2.2vw] xl:text-[1.7vw]  flex items-center font-['brooklyn-heavy'] underline decoration-[1px] underline-offset-8 underline-[var(--color-text)]  gap-[1vw] leading-none tracking-tighter">SKILLS</h1>
               <div ref={skillsRef} className=" w-full skills-container flex flex-wrap  gap-x-[10vw] gap-y-[2vw] perspective-[2000px]">
                {skillsArray.map((skill,index)=>{
                    return <div key={index} className="skill-div h-[7vw] md:h-[6vw] lg:h-[4vw] w-1/4 text-[var(--color-text)] flex items-center gap-[1vw] ">
                                <img className="h-full aspect-square" src={`/icons/${skill}.png`} alt="" />
                                <p className="text-[2.3vw] sm:text-[1.6vw] md:text-[1.5vw] xl:text-[1.3vw] font-['brooklyn-heavy'] uppercase ">{skill}</p>
                            </div>
                })}
                  
                  
               </div>
            </div>
        </div>
  )
}

export default Skills
