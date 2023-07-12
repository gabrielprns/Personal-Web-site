import Banner from "../components/Banner_Footer";
import { Boxes } from "../components/ContentField"
import { ButtonOut } from "../components/ContentField/Button/button"
import { ContentField } from "../components/ContentField/Elements/elements"
import { Footer } from "../components/Banner_Footer/footer";
import { LogoFields } from "../components/ContentField/Elements/tecnologias";




export const Info = ()=>{
  return(
    <div className="App">
      <Banner header="banner-footer" content="banner-content" container="container"/>
      <Boxes content_1={<ContentField button={<ButtonOut/>} />} content_2={<LogoFields />}/>
      <Footer footer="banner-footer footer "content="footer-content"/>
    </div> 
  )
}