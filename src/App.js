// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useState, useEffect, Suspense } from 'react';
// import logo from '/.logo.svg';
import './App.css';

const Surprise = React.lazy( () => import('./Surprise') );

function App() {
  const [surpriseShowable, setSurpriseShowable] = useState(false);

  return(
    <div>
      <button onClick={ (env) => setSurpriseShowable(true) }>Mostrar sorpresa</button>
      {
        surpriseShowable && <Suspense><Surprise /></Suspense>
      }
    </div>
  );
}

export default App;