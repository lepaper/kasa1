import Banner from "../components/Banner"
import homeBanner from "../assets/paysage1.png"
import "../styles/pages/home.scss"


function Home() {
 
  
  

  return (
    <div className="main-container">
      <Banner source={homeBanner} altText={"image de montagne"} home={true} />
      
    </div>
  )
}

export default Home
