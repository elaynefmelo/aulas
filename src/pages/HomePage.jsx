import React from 'react';
import { Link } from 'react-router-dom';
import Timer from '../components/Exemplo1';

function HomePage() {
  return (
    <>
      <Timer start={0} ms={1000} />
      <Link className='text-blue-600 underline w-96 block' to="/login">Pagina de Login</Link>
    </>

  )
}

export default HomePage;