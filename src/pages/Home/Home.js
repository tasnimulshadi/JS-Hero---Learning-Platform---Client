import React from 'react';

import Company from './Company';
import Hero from './Hero';
import Pricing from './Pricing';
import Steps from './Steps';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Company></Company>
            <Pricing></Pricing>
            <Steps></Steps>
        </div>
    );
};

export default Home;