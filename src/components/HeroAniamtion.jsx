import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

const HeroAniamtion = ({timeline}) => {

         const heroRef = useRef(null)
   

    useGSAP(()=>{
      timeline.to(heroRef.current,{
        duration:0.8,
        ease: "power1.out",   
        top:"-40%",
        height:"430vh",
      }).to('.back-color',{
       backgroundColor:'var(--color-primary)',
       duration:0.1
      })
    })

  return (
        <div ref={heroRef} className='bg-[var(--color-primary)] h-[0vh] aspect-square z-1 absolute top-[100%] left-1/2 -translate-x-[50%] rounded-[100%]'></div>

  )
}

export default HeroAniamtion
