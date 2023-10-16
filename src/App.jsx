import About from "./section/about/About"
import Header from "./section/header/Header"
import Navbar from "./section/navbar/Navbar"
import Services from "./section/services/Services"
import Portfolio from "./section/portfolio/Portfolio"
import Testimonials from "./section/testimonials/Testimonials"
import FAQs from "./section/faqs/FAQs"
import Contact from "./section/contact/Contact"
import Footer from "./section/footer/Footer"
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context"
import FloatingNav from "./section/floating-nav/FloatingNav"
import { useRef, useState, useEffect } from "react"



const App = () => {

  const {themeState} =useThemeContext();
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] =useState(true);
  const [siteYPostion,setSiteYPostion ] =useState(0);
  const showFloatingNavHandler  = () => {
    setShowFloatingNav(true);
  }
  const hideFloatingNavHandler  = () => {
    setShowFloatingNav(false);
  }

  // chack the floating nav shown or hidden
  const floatingNavToggleHandler =() => {
    // chack if we scrolled up or down at lest 20px
    if(siteYPostion < (mainRef ?.current?.getBoundingClientRect().y - 20)|| siteYPostion > (mainRef ?.current?.getBoundingClientRect().y + 20) ){
      showFloatingNavHandler();
    }else{
      hideFloatingNavHandler();
    }



    setSiteYPostion(mainRef ?.current?.getBoundingClientRect().y)

  }
  useEffect(() =>{
   const chackYPostion = setInterval(floatingNavToggleHandler,2000);

  //  cleanup function
  return () =>clearInterval(chackYPostion);
  },[siteYPostion])
  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <FAQs/>
    <Contact/>
    <Footer/>
    <Theme/>
   {showFloatingNav && <FloatingNav/>}
    
</main>
  )
}

export default App