import { useRef } from "react"
import gsap from "gsap"
import Hero from "./components/Hero"
import { useGSAP } from "@gsap/react"

const HeroLayout = ({scrollInstance}) => {
    const cursorRef = useRef()
    

    const {contextSafe } = useGSAP()
   const tl = useRef(gsap.timeline())


   const cursor = contextSafe((e)=>{
      gsap.to(cursorRef.current,{
        x:e.clientX,
        y:e.clientY,
        duration:0.3,
        opacity:100,
        // ease:'back.out'
      })
   })

   function handleCursor(e){
      cursor(e)
   }



  return (
    <div  onMouseMove={handleCursor} className='back-color bg-[var(--color-back)] relative min-h-screen max-w-full overflow-hidden'>
      <Hero timeline={tl.current} cursorRef={cursorRef} scrollInstance={scrollInstance}/>
      <div ref={cursorRef} className="cursor hidden sm:block  opacity-0 -translate-x-1/2 -translate-y-1/2 fixed aspect-square w-[2.5vw] top-0 left-0 mix-blend-difference bg-[#F8F8F8] z-[80] rounded-full"></div>
    </div>
  )
}

export default HeroLayout
