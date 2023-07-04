import { Link } from "react-router-dom";

export const Button = () => {
  return (

    <Link to='/Portfolio_React/info'>
      <button className="btn">Saber mais</button>
    </Link>
    
  );

  
};

export const ButtonOut = () => {
  return (

    <Link to='/Portfolio_React'>
      <button className="btn">Voltar</button>
    </Link>
    
  );

  
};
