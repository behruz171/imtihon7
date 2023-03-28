import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './components/store/store'
import './index.css';
import App from './App';
import More from './components/more';
import Like from './components/like';
import Savat from './components/savat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/more/:id' element={<More/>}/>
          <Route path='/like' element={<Like/>}/>
          <Route path='/savat' element={<Savat/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


