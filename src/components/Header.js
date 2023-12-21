import React from 'react';
import DropdownMenu from "./DropdownMenu";
import '../styles/header.css';
import menu from '../images/icons/menu.png';

const Header = () => {
    return (
        <div>
            <div className={'container'}>
                <div className={'btnDiv'}>
                    <img src={menu} className={'menu'} alt={'menu'}/>
                </div>
                <div className={'name'}>
                    <p>Anastasia Dahla</p>
                    <p style={{fontWeight: "normal", fontSize: "2rem", textAlign: "center"}}>Software Engineer</p>
                </div>
            </div>
            {/*<DropdownMenu/>*/}
        </div>
    );
};

export default Header;