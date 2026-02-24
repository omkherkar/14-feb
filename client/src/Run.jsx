
import React, { useState } from 'react';
import Load from './Load';

const Run = () => {
  // 1. Initialize state for the button's position. 
  // We start at 50% to center it initially.
  const [position, setPosition] = useState({ top: '55%', left: '55%' });
  const [yes , setyes]=useState(0);

  const except = (yes)=>{
    setyes(1);
  };
  
  const runAway = (e) => {
    // 2. Get the window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // 3. Get the button's dimensions (approximate or via ref if you want precision)
    // We can assume a button size to prevent it from going off-screen
    const btnWidth = 100; // approx width
    const btnHeight = 40; // approx height

    // 4. Calculate random positions
    // We subtract the button size to keep it strictly inside the window
    const randomX = Math.random() * (windowWidth - btnWidth);
    const randomY = Math.random() * (windowHeight - btnHeight);

    // 5. Update state
    setPosition({
      top: `${randomY}px`,
      left: `${randomX}px`,
    });
  };

  return (
   
    <div className='h-screen px-1 py-1 w-full bg-pink-300 flex flex-col justify-center items-center gap-[10%]' >
    { yes == 0 ? (
      <div>
      <div className='relative -top-[10%]' ><h1 className='text-[50px] text-white 0'>will you be my valentine ?</h1></div>

      <div >
        <button onClick={except} className='relative w-32 rounded-xl border-pink-900 bg-pink-600 text-white transition-all duration-100 top-3 left-7'>
        yes
      </button>
      
      <button onMouseEnter={runAway}  style={{ 
                                              top: position.top, 
                                              left: position.left,
                                              transform: position.top === '50%' ? 'translate(-50%, -50%)' : 'none' 
        }}
        className='absolute  transition-all w-32 rounded-xl border-pink-600 bg-pink-600 text-white'
       >
        no
      </button>
      
      </div>
      </div>):(
   
    <Load />
  )} 
  
</div> 
    
      );
};

export default Run;