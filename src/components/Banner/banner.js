import { Options } from "./options";

export const Banner = () => {
    return (
      
      <header className="banner menu-bar bs">
        
        <div className="b-2 ts">
          <div className="logo">
            <h1 className="title">GP</h1>
          </div>
          
          <div className="container ">
            <Options/>
            
          </div>
        </div>
        
        
      </header>
    )
  
  
}

