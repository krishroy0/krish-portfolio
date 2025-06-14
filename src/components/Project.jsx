import { useState } from "react"

const Project = ({cursorEnterHandle,cursorLeaveHandle,project}) => {

  const [hover,setHover]=useState(null)

  function addHover(){
    setHover(true)
    cursorEnterHandle()
  }

  function removeHover(){
    setHover(null)
    cursorLeaveHandle()
  }

  return (
    <div className="netflix-div h-[40vw] lg:h-[32vw] bg-[var(--color-primary)]  flex flex-col lg:flex-row w-full relative">
          <div className="h-full w-[75%] lg:w-[65%] relative z-[30]">
                <img className="h-full w-full object-cover object-center" src={project.image} alt="" />
                <div className="absolute inset-0 bg-[#0000001d]"></div>
                <p className="netflix-title absolute bottom-full  text-[9vw] font-['neueExtrabold'] leading-none left-1/3 top-[3vw] stroked-text-white mix-blend-difference uppercase">{project.name}</p>
          </div>
          <div className="flex  lg:flex-col gap-[10vw] lg:gap-0 lg:justify-end items-center lg:pb-5  lg:h-full w-full lg:w-[15vw] px-[5vw] lg:px-0">
            <p className="lg:rotate-90 text-xs sm:text-sm md:text-base lg:text-lg  whitespace-nowrap tracking-widest flex gap-[2vw] -mt-[0.8vw] select-none uppercase"><span>{project.name}</span><span>WEBSITE</span></p>
            <a  style={{
                          backgroundColor: hover ? project.colorTheme : '',
                          borderColor: project.colorTheme,
                          boxShadow: `0 0 7px ${project.colorTheme}`
                      }} 
            onMouseEnter={addHover} onMouseLeave={removeHover} href={project.url} target="_blank" className={`select-none view-project z-[20]  aspect-square w-15 lg:w-1/2 -mt-[1.1vw] lg:mt-[10vw]  rounded-full flex justify-center items-center border-2  active:duration-75 group text-[var(--color-text)] hover:text-white   ease-in duration-300 cursor-pointer`}>
              <div  className=" w-full rounded-full flex justify-center items-center ">
                <p className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base whitespace-nowrap group-hover:scale-85 group-hover:tracking-normal text-center ease-in duration-300   hover:text-white  font-['brooklyn-bold'] tracking-[0.2vw]">VIEW PROJECT</p>
              </div>
            </a>
          </div>
          
          <p className="number rotate-90 absolute top-0  right-4 lg:right-0 h-full  leading-none stroked-text  text-[18vw] font-['brooklyn-heavy']">{project.id}</p>
         </div>
  )
}

export default Project
