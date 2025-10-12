
// const ReactElement = {
//     type: "a",
//     props:{
//         href:"www.google.com",
//         target:"_blank"
//     },
//     children:"Click me to visit again"
// }

// function customRender(ReactElement,container){
//     const domElement = document.createElement(ReactElement.type);
//     domElement.innerHTML = ReactElement.children;
//     for (const prop in ReactElement.props){
//         if (prop === 'children') continue;
//         domElement.setAttribute(prop,ReactElement.props[prop])
//     }
//     container.appendChild(domElement);

// };
// const mainContainer = document.querySelector("#root");

// customRender(ReactElement,mainContainer);
let root = document.querySelector("#root");
let btn = document.createElement('button');
btn.innerHTML = "click me to see magic!!!";
root.appendChild(btn);
let count = 1;
function inc(){
    count++;
}
btn.addEventListener('click',()=>{

});
