import React from 'react';

const Card =({number, pName, currentImg})=>{
    // console.log("card called with img : ", currentImg);
    
    return (

        <div 
            className="bg-emerald-100 p-2 overflow-hidden shadow-md hover:shadow-lg transition border border-emerald-200 rounded-md  cursor-pointer"
            // onMouseEnter={() => hoverImg && setCurrentImg(hoverImg)}
            // onMouseLeave={() => setCurrentImg(thumbnailImg)}
        >
            <img 
                src={currentImg} 
                
                className="aspect-square w-full object-cover bg-gray-100  transition duration-300 transform hover:scale-110" 
            />
            
            <div className="p-2 pb-0 text-center">

                <h4 className="text-slate-500 text-md  overflow-hidden">No. {number}</h4>
                <h3 className=" text-gray-700 text-xl overflow-hidden h-7">{pName.toUpperCase()}</h3>
            
            </div>
        </div>
    )
}

export default Card