import React from 'react';
import useTitle from '../../../hook/useTitle';
import Consultan from '../../Consultan/Consultan';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Chart from '../../Home/Chart/Chart'

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Consultan></Consultan>
            <Chart></Chart>
        </div>
    );
};

export default Home;