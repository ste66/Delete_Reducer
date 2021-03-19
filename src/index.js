import React from 'react';
import ReactDOM from 'react-dom';

import App from './components2/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

// =============================================================

// ! RULE 2: WRAP YOUR ENTIRE APP WITH PROVIDER

// ? 1st Way: You can do it inside the App.js in the return part
// ? 2nd Way : You can do it inside the index.js 


import {UserProvider} from "./components2/context"

// If you are not exporting your component as a "defualt", we need to use {} to import it in other files!


// =============================================================

ReactDOM.render(

  <UserProvider>

        <App />

   </UserProvider> 




, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
