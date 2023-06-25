import "./banner.css";
import { Options } from "./options";

export const Banner = () => {
  
    return (
      
      <header className="banner">
        
        <h1 className="title logo">GP</h1>
        <div className="container">
          <Options h1="about" href=""/>
          <Options h1="Portfolio" href=""/>
          <Options h1="Github" href="https://github.com/gabrielprns"/>
          <Options h1="Linkedin" href="https://www.linkedin.com/in/gabriel-pedro-8b08ab1a2/"/>
          
          
          
        </div>
        
      </header>
    )
  
  
}

