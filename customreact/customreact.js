function customRender(reactElement, container){
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children

   for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank',
        style: 'color:whitesmoke;'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer)