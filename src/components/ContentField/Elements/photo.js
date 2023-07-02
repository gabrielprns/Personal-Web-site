import { Infos } from './infos';
import teste from './myphoto.jpg';
import {useState} from 'react';

export const Photo = () =>{
  const [isHovering, setIsHovering] = useState(false);
  const [isNotHovering, setIsNotHovering] = useState(true);

  const handleMouseOver = () => {
    setIsHovering(true);
    setIsNotHovering(false);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setIsNotHovering(true);
  };

  return(
    
    <div className="photos hs">
      <img className='photo' src={teste} alt="Me"  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
      <div>{isHovering && (<Infos/>)}</div>
      {isNotHovering && (<h2 className='title-photo img-warning'>Passe o mouse em minha foto</h2>)}
        
    </div>
  )
  }