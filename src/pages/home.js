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
      
      <Banner  header="banner-footer bs " content="banner-content ts" container="container"/>
      <Boxes content_1={<ContentField button={<Button />} />}  content_2={<Photo/>} />
      <Footer footer="banner-footer footer  bs" content="footer-content ts"/>
    </div> 
  );
}

export default Home;