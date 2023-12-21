import React from 'react';
import Banner from "./bodyComponents/Banner";
import Skills from "./bodyComponents/Skills";
import About from "./bodyComponents/About";
import Contacts from "./bodyComponents/Contacts";
import BackEnd from "./bodyComponents/BackEnd";
import FrontEnd from "./bodyComponents/FrontEnd";

const Body = () => {
    return (
        <div>
            <Banner/>
            <BackEnd/>
            <FrontEnd/>
            <Skills/>
            <About/>
            <Contacts/>
        </div>
    );
};

export default Body;