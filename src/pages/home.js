import "../main.css";

import Banner from "../components/Banner";
import { Boxes } from "../components/ContentField";
import { LogoFields } from "../components/ContentField/Elements/tecnologias";
import { Button } from "../components/ContentField/Button/button";
import { ContentField } from "../components/ContentField/Elements/elements";
import { Footer } from "../components/Footer/footer";


function Home() {
  return (
    <div className="App">
      <Banner bs="banner menu-bar bs" ts="b-2 ts"/>
      <Boxes content_1={<ContentField hs="title-content  hs" button={<Button/>}/>}  content_2={<LogoFields/>}/>
      <Footer fs="footer bs"/>
     
    </div>
  );
}

export default Home;