import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AlumnosProvider } from './Components/AlumnosContext.jsx';

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <AlumnosProvider>
      <App />
    </AlumnosProvider>
    </BrowserRouter>
   
)
