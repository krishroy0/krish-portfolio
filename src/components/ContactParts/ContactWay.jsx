import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { CornerDownRight } from 'lucide-react';

const ContactWay = ({cursorRef}) => {

    const {contextSafe} = useGSAP()

    useGSAP(()=>{


     let mm = gsap.matchMedia()

      mm.add({
        isMobile:'(max-width:1024px)',
        isDesktop:'(min-width:1025px)',
      },(context)=>{
        const {isMobile,isDesktop} = context.conditions;

            gsap.from('.contact-name-underline',{
            width:'0%',
            backgroundColor:'green',
            scrollTrigger:{
                trigger:'.contact-page',
                start: isMobile ? 'top 50%' : 'top 30%',
                end: isMobile ? 'top 32%' : 'top 0%',
                scrub:1,
            }
        })
        gsap.from('.contact-logo',{
            scale:isMobile ? 1.5 : 1.8,
            scrollTrigger:{
                trigger:'.contact-page',
                start: isMobile ? 'top 65%' : 'top 16%',
                end: isMobile ? 'top 40%' : 'top 0%',
                scrub:1,
            }
        })

      })

              
    return () => mm.kill();


    })

    const addImage = contextSafe((name)=>{
        gsap.to(cursorRef.current,{
            height:'5vw',
            width:'5vw',
            backgroundImage:`url("/icons/${name}.png")`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            mixBlendMode:'normal'
        })
    })

   const removeImage = contextSafe(()=>{
            gsap.to(cursorRef.current,{
            // height:'2.5vw',
            // width:'2.5vw',
            mixBlendMode:'difference',
            background:'#F8F8F8'

        })
   })


  return (
    <div className="flex flex-col w-full gap-[4.5vw] lg:gap-[2vw] ">
        <div className="h-4 md:h-7 lg:h-10 mt-3 lg:mt-0  flex items-center gap-[0.5vw] mb-4">
            <CornerDownRight className="h-full aspect-square"/>
            <p className="text-[2.3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.3vw] xl:text-[1.1vw] font-['brooklyn-normal'] uppercase">Feel free to reach out !</p>

        </div>
        <div  className="flex gap-[1vw] items-center  h-[5.6vw] md:h-[4vw] xl:h-[3vw]">
                  <div className="relative h-full">
                     <h1 onMouseOver={()=>addImage("gmail")} onMouseLeave={()=>removeImage()}  className=" email text-[5vw] md:text-[3.5vw] xl:text-[2.5vw] flex items-center font-['anton']  gap-[1vw] leading-none tracking-wider ">EMAIL</h1>
                     <div className="contact-name-underline absolute bottom-0 h-[1px] w-[100%] bg-[var(--color-text)]"></div>
                  </div>
                   <p className="contact-text text-[3.3vw] sm:text-[2.6vw] md:text-[2vw] lg:text-[1.5vw] h-full flex items-center justify-center"> <span className="px-[0.5vw]">:</span>krishroy544@gmail.com</p>
        </div>
        <div className=" flex gap-[1vw] items-center  h-[5.6vw] md:h-[4vw] xl:h-[3vw]">
                  <div className="relative h-full">
                     <h1 onMouseOver={()=>addImage("mobile")} onMouseLeave={()=>removeImage()} className="text-[5vw] md:text-[3.5vw] xl:text-[2.5vw] flex items-center font-['anton']  gap-[1vw] leading-none tracking-wider ">MOBILE</h1>
                      <div className="contact-name-underline absolute bottom-0 h-[1px] w-[100%] bg-[var(--color-text)]"></div>
                  </div>
                    <p className="contact-text text-[3.3vw] sm:text-[2.6vw] md:text-[2vw] lg:text-[1.5vw] h-full flex items-center justify-center"> <span className="px-[0.5vw]">:</span>+91 <span className="pl-[0.8vw]">8320620938</span></p>

        </div>     
        <div className=" flex gap-[1vw] items-center  h-[5.6vw] md:h-[4vw] xl:h-[3vw]">
                  <div className="relative h-full">
                     <h1 onMouseOver={()=>addImage("whatsapp")} onMouseLeave={()=>removeImage()} className="text-[5vw] md:text-[3.5vw] xl:text-[2.5vw] flex items-center font-['anton']  gap-[1vw] leading-none tracking-wider ">WHATSAPP</h1>
                      <div className="contact-name-underline absolute bottom-0 h-[1px] w-[100%] bg-[var(--color-text)]"></div>
                  </div>
                    <p className="contact-text text-[3.3vw] sm:text-[2.6vw] md:text-[2vw] lg:text-[1.5vw] h-full flex items-center justify-center"> <span className="px-[0.5vw]">:</span>8320620938</p>
        </div>   
        <div className="flex flex-col gap-[4.5vw] lg:gap-[2vw] ">
            <div className=" h-7 md:h-10 lg:h-12 flex items-center gap-[1.6vw] lg:gap-[1.2vw] ">
               <div className="contact-logo h-full aspect-square bg-[#FEFEFE] rounded-full cursor-pointer">
                 <a className="decoration-0 h-full w-full rounded-full" href="https://github.com/krishroy0" target="_blank">
                     <img className="h-full w-full rounded-full" src='/gifs/github_gif.gif' alt="" />
                 </a>
               </div>
               <div className="contact-logo h-full aspect-square bg-[#FEFEFE] rounded-lg md:rounded-xl  lg:rounded-2xl overflow-hidden cursor-pointer">
                <a className="decoration-0 h-full w-full rounded-full" href="https://www.instagram.com/___heyy.krish___?igsh=b21mMWd1N2VjNjF4gw" target="_blank">
                  <img className="h-full w-full " src='/gifs/instagram_gif.gif' alt="" />
                 </a>
               </div>
               <div className="contact-logo h-full aspect-square bg-[#FEFEFE] rounded-full overflow-hidden cursor-pointer">
                  <a className="decoration-0 h-full w-full rounded-full" href="/" target="_blank">
                    <img className="h-full w-full scale-75" src='/icons/x.png' alt="" />
                 </a>
               </div>
            </div>
            <div className=" h-7 md:h-10 lg:h-12 flex items-center gap-[1vw]">
               <svg className="h-3/4 aspect-square"  xmlns="https://www.w3.org/2000/svg" version="1.1"  viewBox="0 0 256 256">
                        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                            <path d="M 45 0 C 32.957 0 23.159 9.798 23.159 21.841 c 0 11.369 8.732 20.732 19.841 21.746 V 88 c 0 1.104 0.896 2 2 2 s 2 -0.896 2 -2 V 43.587 c 11.109 -1.014 19.841 -10.377 19.841 -21.746 C 66.841 9.798 57.043 0 45 0 z M 50.863 20.5 c -3.032 0 -5.5 -2.467 -5.5 -5.5 c 0 -3.033 2.467 -5.5 5.5 -5.5 c 3.032 0 5.5 2.467 5.5 5.5 C 56.364 18.033 53.896 20.5 50.863 20.5 z" fill="var(--color-text)"/>
                        </g>
                </svg>
                <p className=" text-[2.5vw] sm:text-[2.3vw] md:text-[1.5vw] lg:text-[1.1vw]">Surat, Gujarat.</p>
            </div>
        </div>       
      </div>
  )
}

export default ContactWay
