import React from 'react';
import { Route,Routes,useRoutes } from 'react-router-dom';
import Auth from './components/Auth';
import Register from './components/Register';
import Home from './components/Home';
import Account from './components/Account'


const App = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/log-in' element={<Auth/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="/account" element={<Account/>} />
     </Routes>
    </>
  );
};

export default App;