import React, { useContext } from "react"

import { ComponentContext } from '@/context/ComponentState';



function A() {

    const {updateComponent} = useContext(ComponentContext)
   
  return (
    <nav className="mt-4 -mx-3 space-y-6 ">
    <div className="space-y-3 ">

        <button className=" w-full hover:bg-gray-200 flex items-center px-3 py-2 text-gray-600 transform rounded-lg  hover:text-gray-800" href="#">
        
            <span className="mx-2 text-sm font-medium" onClick={()=>updateComponent("X")}>X</span>

        </button>

        <button className="w-full hover:bg-gray-200 flex items-center px-3 py-2 text-gray-600 transform rounded-lg  hover:text-gray-800" href="#">
  

            <span className="mx-2 text-sm font-medium" onClick={()=>updateComponent("Y")}>Y</span>
        </button>
        <button className="w-full hover:bg-gray-200 flex items-center px-3 py-2 text-gray-600 transform rounded-lg  hover:text-gray-800" href="#">
       

            <span className="mx-2 text-sm font-medium">Z</span>
        </button>    
    </div>

 
</nav>




  )
}

export default A