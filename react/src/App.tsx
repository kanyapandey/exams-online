import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import AppRouter from './routes/app-router';
import AppHeader from './component/app-header';
import './theme/theme.scss'

function App() {
  return (
  
    <BrowserRouter>
    <AppHeader></AppHeader>
    <AppRouter></AppRouter>
  </BrowserRouter>
  );
}

export default App;
