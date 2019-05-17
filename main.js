import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App/index.js';
import Firebase, { FirebaseContext } from './src/components/Firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('app'));