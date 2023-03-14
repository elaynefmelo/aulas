import React from 'react';
import Exemplo1 from './pages/Exemplo1';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RecuperarSenha from './pages/RecuperarSenha';

const routes = [
{ path: '/', element: <HomePage /> },
{ path: '/login', element: <LoginPage />},
{ path: '/recuperar', element: <RecuperarSenha />},
{ path: '/exemplo1', element: <Exemplo1 />},

];

export default routes;