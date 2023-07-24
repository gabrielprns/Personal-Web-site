import { Link } from "react-router-dom";

export const Button = () => {
  return (

    <Link to='/info'>
      <button className="btn">Saber mais</button>
    </Link>
    
  );

  
};

export const ButtonOut = () => {
  return (

    <Link to='/'>
      <button className="btn">Voltar</button>
    </Link>
    
  );

  
};
