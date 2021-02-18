import * as React from "react"
import { Zoom, useScrollTrigger } from "@material-ui/core"
const style = {
  position: `fixed`,
  bottom: `250px`,
  right: `100px`,
  zIndex: `99`,
}
const ScrollToSection = ({ children }) => {
  
  const scrollToIntro = useScrollTrigger()
  const handleClickIntro = event => {
    console.log("scrolltosection")
    const scrollMe = (event.target.ownerDocument || document).querySelector(
      "#intro"
    )
    console.log("scrollMe: ", scrollMe)
    if (scrollMe) {
      scrollMe.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <Zoom in={scrollToIntro}>
      <div onClick={handleClickIntro} role="presentation" style={style}>
        {children}
      </div>
    </Zoom>
  )
}
export default ScrollToSection