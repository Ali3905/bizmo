import React, { useContext, useState } from 'react';
import X from './side/X';
import Y from './side/Y';

import { ComponentContext } from '@/context/ComponentState';



function Rightside() {
  
  const {component} = useContext(ComponentContext)

  return (
    <>
 <div className='flex fixed h-screen right-0'>
    <aside >
      <div className="flex  flex-col items-center h-screen w-32 pt-5 py-8 bg-white">
        
    {component==="X"?<X />: null}
    {component==="Y"?<Y />: null}

     
      </div>
      </aside>
    

      </div>

    
</>
   
  );
}

export default Rightside;
