import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronsUp } from 'lucide-react';

const BackToTop = ({scrollInstance}) => {

   useGSAP(()=>{
        gsap.to('.back-top',{
            y:-5,
            repeat:-1,
            yoyo:true,
            duration:1,
            ease:'linear'
        })
   }) 

  return (
    <div className="h-8 lg:h-10 xl:h-15 w-full  flex justify-center items-center font-['anton'] tracking-widest bg-[var(--color-primary)] text-[var(--color-text)]">
      <div  onClick={()=>scrollInstance.scrollTo('#homeSection')} className='h-full w-fit flex items-center cursor-pointer'>
          <div  className='back-top h-full aspect-square flex items-center text-center'>
            <ChevronsUp className='h-3/5 w-full'/>
        </div>
        <p className='text-xs md:text-sm lg:text-base xl:text-lg text-center '>BACK TO TOP</p>
      </div>
    </div>
  )
}

export default BackToTop
