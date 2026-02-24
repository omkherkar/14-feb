

import React, { useState, useEffect } from 'react';

const Load = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate a brief loading period (e.g., waiting for assets)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      
      {/* 1. THE CURTAIN */}
      <div 
        className={`fixed inset-0 z-50 bg-rose-600 flex items-center justify-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isLoaded ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Optional: A logo or text inside the loader */}
        <span className={`text-white text-xl font-light tracking-widest transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
          LOADING...
        </span>
      </div>

      
      <div><div className="h-screen flex items-center bg-pink-300  justify-center text-white text-4xl scale-100 transition-all duration-700">
       Yay! See you on the 14th! ❤️

     </div>
     <div className='absolute text-4xl scale-100 transition-all'>
     ❤️
     </div>
     </div>
      
    </div>
  );
}

export default Load