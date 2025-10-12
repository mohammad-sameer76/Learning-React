import  ReactDOM from 'react-dom/client';
import  React  from 'react';

import App from "./App.jsx";

function newApp() {

  return (
    <>
    <h1>sam and code</h1>
    </>
  )
}
const anotherElement = (
  <a href="https://www.google.com" target="_blank">hi</a>
);
const ReactElement = React.createElement(
  "a",
  {
    href:"https://www.google.com",
    target:'_blank'
  },
  "visit google"

)
ReactDOM.createRoot(document.getElementById('root')).render(
<>
<App/>
</>
)
