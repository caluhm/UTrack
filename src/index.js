import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { AssignmentsProvider } from './contexts/AssignmentsContext';


ReactDOM.render(
  <React.StrictMode>
    <AssignmentsProvider>
    <App />
    </AssignmentsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


