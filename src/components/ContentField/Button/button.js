import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


export const Buttons = (props) => {
  return (
      <Link to={props.link}>
        <Button margin={2} variant="contained" size="large" 
        sx={{ bgcolor: '#2a3eb1', 
              ml:2,
              ":hover":{bgcolor: "#757ce8", 
                        color:"black" , 
                        fontStyle: "italic" 
                        } 
            }}>  
          {props.text}
        </Button>
        
      </Link>
    
    
  );

  
};



  

