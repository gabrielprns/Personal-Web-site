import { Link } from "react-router-dom";

export const Button = () => {
  return (

    <Link to='/Personal-Web-site/info'>
      <button className="btn">Saber mais</button>
    </Link>
    
  );

  
};

export const ButtonOut = () => {
  return (

    <Link to='/Personal-Web-site'>
      <button className="btn">Voltar</button>
    </Link>
    
  );

  
};
