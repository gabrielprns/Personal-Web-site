import { Options } from "./options";


export const Banner = (props) => {
  
    return (
      <header className={props.header}>
          {props.Menu}
          
          <div className={props.align}>
            <div className={props.content}>
              <div className="logo">
                <h1 className="title">GP</h1>
              </div>
                
                <div className={props.container}>
                  
                  <Options/>
                    
                    
                </div>
                
            </div>
            <div></div>
            </div>
      </header>
      
      
    )
  
  
}

