import React from 'react';
import Menu from '../components/Menu';
//import { Link } from 'react-router-dom';

function LoginPage() {
  return (
  <>
    
     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
     <Menu />
        <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
        <div className='w-full px-4 py-5 flex justify-content align-center justify-center '>
          <img src='/imagens/mouraTech.png' alt='Logo Moura Tech' className='justify-center '/>
        </div>
          <h1 className="text-3xl font-bold text-center text-preto-700">Entre com sua conta</h1>
          <form className="mt-6">
            <div className="mb-2">
              <input type="email" className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="E-mail"/>
              <input type="password" className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Senha"/>
            </div>
            <a href="#" className="text-xs text-blue-900 hover:underline">Esqueceu a senha?</a>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Entrar</button>
            </div>
          </form>
          
        </div>
     </div>
  </> 
  
  );
}

export default LoginPage;