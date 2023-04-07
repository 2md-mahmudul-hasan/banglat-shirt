import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const tshirts = useLoaderData()
  return (
    <div>
      I am in home{tshirts.length}
    </div>
  );
};

export default Home;