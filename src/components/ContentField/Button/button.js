import { Link } from "react-router-dom";

export const Button = () => {
  return (

    <Link to='/personal-web-site-nine-zeta/info'>
      <button className="btn">Saber mais</button>
    </Link>
    
  );

  
};

export const ButtonOut = () => {
  return (

    <Link to='/personal-web-site-nine-zeta'>
      <button className="btn">Voltar</button>
    </Link>
    
  );

  
};
