import React, { useState, useEffect } from 'react';

export const MenuBar = ({ updateStyle })=>{
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.matchMedia('(max-width: 1500px)').matches);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    updateStyle(!isMobile);
  };
  return(
    
    
    <div className={`checkbox-wrapper ${isMobile ? 'mobile-bar' : 'menu'}`}>
      <button className="checkbox btn-bar" onClick={handleClick}>
        <span className="trace"></span>
        <span className="trace"></span>
        <span className="trace"></span>
      </button>
    </div>
  
  )
}