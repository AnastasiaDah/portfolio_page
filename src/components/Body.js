import React from 'react';
import Home from "./bodyComponents/Home";
import Skills from "./bodyComponents/Skills";
import About from "./bodyComponents/About";
import Contacts from "./bodyComponents/Contacts";

const Body = () => {
    return (
        <div>
            <Home/>
            <Skills/>
            <About/>
            <Contacts/>
        </div>
    );
};

export default Body;