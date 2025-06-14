import { Cross as Hamburger } from 'hamburger-react'
import { useGSAP } from '@gsap/react'
import { SunMoon } from 'lucide-react';

const MobileNav = ({toggled,toggle,navTimeline,scrollInstance,setIsDark}) => {


    useGSAP(()=>{
        navTimeline.from('.mobile-nav',{
            left:'100%',
            duration:0.5
        },'+=0.1')
        navTimeline.from('.nav-h1',{
            rotate:8,
            stagger:0.3,
            opacity:0,
            duration:1,
            x:25,
            y:-30
        })
        navTimeline.from('.email-nav',{
            opacity:0,
            duration:1,
            x:-20,
        },'-=0.9')
        navTimeline.from('.icon-nav',{
            stagger:0.3,
            opacity:0,
            duration:1,
            x:20,

        },'-=0.9')
    })

    async function handleClick(section){
      handleMenu()
      await  navTimeline.timeScale(3).reverse();
      if(section == '#aboutSection'){
            scrollInstance.scrollTo(section,{duration:2,offset:80})
            toggle(false)
      }
      else if(section == '#workSection'){
            scrollInstance.scrollTo(section,{duration:2,offset:-220})
            toggle(false)
      }

    }

  function handleMenu(){
    let body = document.querySelector('body')
     body.classList.remove('h-screen','max-h-screen','overflow-hidden')  
     
  }

  return (
    <div className='mobile-nav min-h-dvh max-h-dvh overflow-hidden w-full bg-[var(--color-primary)] fixed top-0 left-0 z-[20] pt-3 pb-10 text-[var(--color-text)] flex flex-col gap-20 font-["brooklyn-normal"] px-[6vw]'>
      <div className=' flex items-center justify-between w-full '>
            <SunMoon onClick={()=>{setIsDark(prev=>!prev)}} size={22}/>
              <div onClick={handleMenu} className='-mx-3.5'>
            <Hamburger toggled={toggled} toggle={toggle} color='var(--color-text)'  size={20}/>

              </div>
      </div>
      <div className='menu-container flex flex-col justify-between flex-1 min-h-0  w-full'>
                <div className='menus-items font-["anton"] w-full tracking-widest flex flex-col gap-2'>
                        <h1 onClick={()=>handleClick('#workSection')} className='nav-h1 text-[20vw] text-right stroked-text-nav origin-right'>WORK</h1>
                        <h1 onClick={()=>handleClick('#aboutSection')} className='nav-h1 text-[20vw] text-right stroked-text-nav origin-right'>ABOUT</h1>
                </div>
                <div className=' w-full flex items-end justify-between h-30'>
                        <p className='email-nav text-base font-["brooklyn-semibold"] underline underline-offset-4'>krishroy544@gmail.com</p>
                        <div className='flex flex-col gap-5 w-10 justify-end  h-full'>
                                <a className="icon-nav decoration-0 aspect-square w-full rounded-full" href="https://github.com/krishroy0" target="_blank">
                                      <img className=' rounded-full w-full aspect-square' src="/gifs/github_gif.gif" alt="" />
                                </a>
                                 <a className="icon-nav decoration-0 aspect-square w-full rounded-xl" href="https://www.instagram.com/___heyy.krish___?igsh=b21mMWd1N2VjNjF4" target="_blank">
                                       <img className=' rounded-xl w-full aspect-square' src="/gifs/instagram_gif.gif" alt="" />
                                </a>
                        </div>
                </div>

                
      </div>
    </div>
  )
}

export default MobileNav
