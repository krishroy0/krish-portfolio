import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ContactWay from "./ContactParts/ContactWay"

const Contact = ({cursorRef}) => {


     useGSAP(()=>{
        gsap.from('.contact-span',{
        scrollTrigger:{
            trigger:'.contact-page',
            start:'top 75%',
            end:'top 60%',
            scrub:1
        },
        y:20,
        opacity:0,
        stagger:0.4,
        duration:1
    })

    
    })


  return (
    <div id="contactSection" data-scroll-section className='contact-page h-[62vh]  md:h-screen w-full flex flex-col gap-[4vw] items-center bg-[var(--color-primary)] px-[5vw] font-["brooklyn-bold"] text-[var(--color-text)] pt-20 pb-50'>
      <h1 className='text-[8vw] font-["anton"] flex gap-[2vw]' >
       <div>
            <span className="contact-span">C</span>
            <span className="contact-span">O</span>
            <span className="contact-span">N</span>
            <span className="contact-span">T</span>
            <span className="contact-span">A</span>
            <span className="contact-span">C</span>
            <span className="contact-span">T</span>

        </div>

      </h1>
      <ContactWay cursorRef={cursorRef}/>
    </div>
  )
}

export default Contact
