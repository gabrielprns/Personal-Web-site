import React, { useState } from 'react';

import Banner from "../components/Banner_Footer";
import { Boxes } from "../components/ContentField"
import { ButtonOut } from "../components/ContentField/Button/button"
import { ContentField } from "../components/ContentField/Elements/elements"
import { Footer } from "../components/Banner_Footer/footer";
import { LogoFields } from "../components/ContentField/Elements/tecnologias";
import { MenuBar } from "../components/Banner_Footer/menu_bar/menubar";



export const Info = ()=>{
  const [componentStyle, setComponentStyle] = useState('');

  const updateComponentStyle = () => {
    setComponentStyle(prevStyle => prevStyle === 'mobile' ? '' : 'mobile'); // Atualiza o estilo do componente externo
  };
  return(
    <div className="App">
      <Banner header={`banner ${componentStyle}`}  Menu={<MenuBar updateStyle={updateComponentStyle}/>}  content={`banner-content ${componentStyle}`} align={`align ${componentStyle}`} container={`container ms ${componentStyle}`}/>
      <Boxes box={`box ${componentStyle}`} content_1={<ContentField title="title-content" button={<ButtonOut/>} />} content_2={<LogoFields />}/>
      <Footer footer="footer "content="footer-content"/>
    </div> 
  )
}