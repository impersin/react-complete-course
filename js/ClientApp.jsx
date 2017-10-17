import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));  
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', ()=>{
    renderApp();
  });
} 


// const MyTitle = function(props) {
//   return (
//     <div style={{color: props.color}}>{props.title}</div>
//   );
// };

// const MyFirstComponent = function() {
//   return (
//     <div id="my-first-component">
//       <MyTitle title="Game of Thrones" color="YellowGreen"/>
//       <MyTitle title="Stranger Things" color="GreenYellow"/>
//       <MyTitle title="House Of Cards" color="Peru"/>
//       <MyTitle title="Mr.Robot" color="burlywood"/>
//     </div>
//   );
// };