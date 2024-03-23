import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const AnotherElement = (
//     <a href='https://google.com' target='_blank'>Google</a>
// )

// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: '_blank',
//         style: 'color:whitesmoke;'
//     },
//     children: 'Click me to visit Google'
// }

// const aReactElement = React.createElement(
//     'a',
//     {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     'Click to visit Google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    // AnotherElement /* React accept this cmd to run */
    // aReactElement  /* React accept this cmd to run */
)
