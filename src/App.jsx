import { useEffect, useRef, useState } from "react";
import HeroLayout from "./HeroLayout"
import locomotiveScroll from "locomotive-scroll";

const App = () => {

const scrollRef = useRef();
 const [locoInstance,setLocoInstance] = useState(null)


 useEffect(() => {
    const scroll= new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    })

    setLocoInstance(scroll)

    return () => {
      scroll.destroy()
    }
  },[]);



  return (
    <div ref={scrollRef} data-scroll-container>
      <HeroLayout scrollInstance={locoInstance}/>


    </div>
  )
}

export default App
