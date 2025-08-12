function customRender(element, container){

    const ele = document.createElement(element.type);
    for (const prop in element.props) {
        ele[prop] = element.props[prop]
    }
    ele.textContent = element.children
    
    container.appendChild(ele)
}




const rootContainer = document.getElementById('root');

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        taget : '_blank',
    },
    children : 'Click me to visit GOOGLE',
} 

customRender(reactElement, rootContainer)