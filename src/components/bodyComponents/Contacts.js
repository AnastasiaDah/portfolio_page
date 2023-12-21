import React from 'react';
import '../../styles/contacts.css';
import icon1 from '../../images/icons/mail.png';
import icon2 from '../../images/icons/linkedin.png';
import icon3 from '../../images/icons/github.png';
import icon4 from '../../images/icons/document.png';

const Contacts = () => {
    const icons = [icon1, icon2, icon3, icon4]
    const links = [
      'ana.m.dahla@gmail.com',
      'https://www.linkedin.com/in/ana-dahla/',
      'https://github.com/AnastasiaDah',
      'https://docs.google.com/document/d/1YkOfqLTfD8M9bXWs4H7stgXprpRpnxfk/edit?usp=sharing&ouid=107985850467851289792&rtpof=true&sd=true'
    ];

    return (
        <>
            <h3>Contacts</h3>
            <ul className={'list'}>
                {links.map((value, index) => (
                    <li key={index} className={'li'}>
                        <img src={icons[index]} className={'icon'} alt={'icon'}/>
                        {index === 0 ?
                            <a href={"/"} onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "mailto:" + value;
                            }}>{value}</a> :
                            <a href={value}>{index === 3 ? 'Resume' : value}</a>
                        }
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Contacts;