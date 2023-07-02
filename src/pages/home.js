import "../main.css";

import Banner from "../components/Banner_Footer";
import { Boxes } from "../components/ContentField";
import { Button } from "../components/ContentField/Button/button";
import { ContentField } from "../components/ContentField/Elements/elements";
import { Footer } from "../components/Banner_Footer/footer";
import { Photo } from "../components/ContentField/Elements/photo";



function Home() {
  return (
    <div className="App">
      <Banner bs="banner-footer menu-bar bs" ts="b-2 ts" />
      <Boxes content_1={<ContentField hs="title-content  hs" button={<Button />} />}  content_2={<Photo/>} />
      <Footer bs="banner-footer menu-bar bs" ts="footer ts"/>
    </div> 
  );
}

export default Home;