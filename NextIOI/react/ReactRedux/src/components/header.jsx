import React from 'react'

function HeaderCompo({CartCount}) {
return (
    <header style={{display:'flex'}} className='text-2xl' >
        <div>React Header Home Page</div>
        <div>Cart :: {CartCount}</div>
    </header>
)
}

export default HeaderCompo