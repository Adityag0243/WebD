import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

// const anotherEle = (
//     <a href="https://google.com" target= '_blank'>Cick Here to visit Google</a>
// )

// const lastName = ' from variable....'

// const reactEle = React.createElement(
//     'a',
//     {   
//         'href' : 'https://google.com',
//         'target' : '_blank',

//         style : {
//             'color' : 'red'
//         }
//     },
//     'Visit Google ',
//     lastName
// )

createRoot(document.getElementById('root')).render(
    // all 3 will work .....
    <App />
    // reactEle
    // App()
    // anotherEle
)
