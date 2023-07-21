import { Link } from "react-router-dom";

export const Button = () => {
  return (

    <Link to='/personal-web-site/info'>
      <button className="btn">Saber mais</button>
    </Link>
    
  );

  
};

export const ButtonOut = () => {
  return (

    <Link to='/personal-web-site'>
      <button className="btn">Voltar</button>
    </Link>
    
  );

  
};
