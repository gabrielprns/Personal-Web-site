import React, { useState } from 'react';
import { MenuBar } from "./menu_bar/menubar";
import { Options } from "./options";


export const Banner = (props) => {
  const [componentStyle, setComponentStyle] = useState('');

  const updateComponentStyle = () => {
    setComponentStyle('mobile'); // Atualiza o estilo do componente externo
  };

    return (
      <header className={`${props.header} ${componentStyle} `}>
          <MenuBar updateStyle={updateComponentStyle} />
          <div className={props.content}>
            <div className="logo">
              <h1 className="title">GP</h1>
            </div>
            
            <div className={`${props.container} ${componentStyle}`}>
              <Options/>
              
              
            </div>
          </div>
      </header>
      
    )
  
  
}

