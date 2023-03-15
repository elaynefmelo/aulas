import React from 'react';
import { Link } from 'react-router-dom';
import Timer from '../components/Exemplo1';
import Menu from '../components/Menu';

function HomePage() {
  return (
    <>
    <div className='bg-gray-400 h-screen w-screen'>
      <Menu />
      <Timer start={0} ms={1000} />
      
    </div>
      
    </>

  )
}

export default HomePage;