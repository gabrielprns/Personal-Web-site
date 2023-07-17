import React, { useState, useEffect } from 'react';
import resume from './images/doom_resume.jpg';
import resume_mobile from './images/resume.jpg';

export const LogoFields = () =>{

  const [imageSrc, setImageSrc] = useState(resume);
  const [imageClass, setImageClass] = useState('square-box-tec');

    useEffect(() => {
      const handleResize = () => {
        // Verifica o tamanho da tela e atualiza o link da imagem
        if (window.innerWidth <= 950) {
          setImageSrc(resume_mobile);
          setImageClass('square-box-tec-mobile');
        } else {
          setImageSrc(resume);
          setImageClass('square-box-tec');
        }
      };

      handleResize(); // Verifica o tamanho da tela inicialmente

      window.addEventListener('resize', handleResize); // Adiciona um listener para verificar o tamanho da tela ao ser redimensionada

      return () => {
        window.removeEventListener('resize', handleResize); // Remove o listener ao desmontar o componente
      };
    }, []
  );
  return(
    
    <div className="Tech title-content hs">
      <h2 className="title-1" >Habilidades, experiência e Formações</h2> 
      <img className={imageClass} src={imageSrc} alt="resume"/> 
      
    </div>
  )
}