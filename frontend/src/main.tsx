import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './styles/index.css'; 

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Failed to find the root element. Ensure there is a <div id='root'></div> in your index.html file.");
}

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);