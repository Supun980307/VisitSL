import React from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import HomeImg from '../assests/data/Background.jpg';

const Home = () => {
    // console.log('Rendering Home Component');
  return (
    <>
        {/* <Navbar /> */}
        <div>
            <div>
                <img src={HomeImg} alt="HomeImg" className='bg-cover w-full' />
            </div>
        </div>
    </>
  );
}
export default Home;
