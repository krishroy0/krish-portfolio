import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const PinEffect = () => {

    useGSAP(()=>{

     
      let mm = gsap.matchMedia()

      mm.add({
          isMobile:'(max-width:1024px)',
          isDesktop:'(min-width:1025px)',
      },(context)=>{
        let {isMobile,isDesktop} = context.conditions;

        gsap.to('.pin-text',{
            scrollTrigger:{
                trigger:'.pin-page',
                start:  'top 0%',
                end: 'top -100%',
                scrub:3,
                pin:true,
            },
            transform:isMobile ? 'translateX(-30%)' : 'translateX(-23%)',
            
        })

      })

        

        
    })

  return (
    <div className='pin-page bg-[var(--color-primary)] h-screen border-y-1 border-[var(--color-text)]  flex justify-center items-center w-full '>
            <h1 className="pin-text text-[30vw] font-['anton'] py-[2vw] translate-x-[23%]  text-[var(--color-text)] whitespace-nowrap leading-none tracking-wider">WEB DEVELOPMENT</h1>
    </div>
  )
}

export default PinEffect
