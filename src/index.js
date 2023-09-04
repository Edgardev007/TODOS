import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoProvider } from './context/useContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoProvider>
            <App />
    </TodoProvider>

);
