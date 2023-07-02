import Banner from "../components/Banner_Footer";
import { Boxes } from "../components/ContentField"
import { ButtonOut } from "../components/ContentField/Button/button"
import { ContentField } from "../components/ContentField/Elements/elements"
import { Jobs } from "../components/ContentField/Elements/jobs"
import { Footer } from "../components/Banner_Footer/footer";


export const Port = () => {
  return(
    <div className="App">
      <Banner bs="banner-footer menu-bar" ts="b-2" />
      <Boxes content_1={<ContentField hs="title-content" button={<ButtonOut/>} />} content_2={<Jobs/>}/>
      <Footer bs="banner-footer menu-bar" ts="footer "/>
    </div>
  )
}