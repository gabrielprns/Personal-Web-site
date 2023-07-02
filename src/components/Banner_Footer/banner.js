import { Options } from "./options";

export const Banner = (props) => {
    return (
      <header className={props.bs}>
        <div className={props.ts}>
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

