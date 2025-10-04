import ContactPage from "../../../UI/Contactpage";
import Team from "../../../UI/Team";
import Hero from "../Hero";
import Kpi from "../Kpi";
import Work from "../OurWork";
import Services from "../services";
import Video from "../Video";




export default function Home(){
  return(
          <div className="min-h-screen bg-neutral-950 text-white selection:bg-sky-400/30 ">
          <>
          <Hero />
          <Video />
          <Kpi />
          <Services />
          <Work />
          <Team />
          <ContactPage />
          </>
          
          </div>
  )
}