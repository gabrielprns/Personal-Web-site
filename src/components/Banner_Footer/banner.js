import { MenuBar } from "./menu_bar/menubar";
import { Options } from "./options";

export const Banner = (props) => {
    return (
      <header className={props.header}> 
          <div className={props.content}>
            <div className="logo">
              <h1 className="title">GP</h1>
            </div>
            
            <div className="container ">
              <Options/>
              
              
            </div>
          </div>
          <MenuBar/>
        
        
        
      </header>
    )
  
  
}

