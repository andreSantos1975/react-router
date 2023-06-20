import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const About = () => {
  let { id } = useParams();

  const [nomes] = useState([
    'Andre',
    'Felipe',
    'Maria'
  ]);
  // const nomeSelecionado = nomes[parseInt(id)] || '';
  return (
    <section className='container'>
      <div className='text-center'>
        <h5>Cliente</h5>
        <h1>{nomes[id]}</h1>
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};
