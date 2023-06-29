import { ContentField } from "./Elements/elements";
import { LogoFields } from "./Elements/tecnologias";
export const Boxes = () =>{
  return(
    
    <body className="box">
      
      <div className="Container-content-dev">
        <ContentField/> 
      </div>
      <div className="Container-content-dev-2">
        <LogoFields/>
      </div>
    </body>
    
      
    
  )
}