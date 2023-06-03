import Banner from "../components/Banner"
import aboutBanner from "../assets/paysage1.png"

import "../styles/pages/about.scss"
function About() {
  
  return (
    <div className="main-container">
      <Banner
        source={aboutBanner}
        altText={`image de montagne`}
        home={false}
      />
      
      </div>
    
  )
}

export default About
