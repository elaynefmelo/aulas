import React from 'react';
import { Link } from 'react-router-dom';
import Timer from '../components/Exemplo1';
import Menu from '../components/Menu';
import Teste from '../components/Test';

function HomePage() {
  return (
    <>
    <div className='bg-gray-400 h-screen w-screen'>
      <Menu />
      <Timer start={0} ms={1000} />
      <Teste />
    </div>
      
    </>

  )
}

export default HomePage;