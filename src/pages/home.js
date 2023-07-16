import "../main.css";
import React, { useState } from 'react';


import Banner from "../components/Banner_Footer";
import { Boxes } from "../components/ContentField";
import { Button } from "../components/ContentField/Button/button";
import { ContentField } from "../components/ContentField/Elements/elements";
import { Footer } from "../components/Banner_Footer/footer";
import { Photo } from "../components/ContentField/Elements/photo";
import { MenuBar } from "../components/Banner_Footer/menu_bar/menubar";





function Home() {
  const [componentStyle, setComponentStyle] = useState('');

  const updateComponentStyle = () => {
    setComponentStyle(prevStyle => prevStyle === 'mobile' ? '' : 'mobile'); // Atualiza o estilo do componente externo
  };
  return (
    
    <div className="App">
      
      <Banner header={`banner bs ${componentStyle}`}  Menu={<MenuBar updateStyle={updateComponentStyle}/>}  content={`banner-content ${componentStyle}`} align={`align ${componentStyle}`} container={`container ts ${componentStyle}`}/>
      <Boxes box={`box ${componentStyle}`} content_1={<ContentField title="title-content bs" button={<Button />} />}  content_2={<Photo/>} />
      <Footer footer={`footer ${componentStyle}  bs`} content="footer-content ts"/>
    </div> 
  );
}

export default Home;