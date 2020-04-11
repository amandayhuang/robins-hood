import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='footer-outer-container'>
            <div className='footer-container'>
                <ul className='footer-list'>
                    <li className='logo'>Robin's Hood</li>
                    <li className='footer-sub'><a href='https://robinhood.com' target='_blank'>Robinhood </a> clone that lets you invest in public figures.</li>
                </ul>

                <ul className='footer-list links'>
                    <li className='logo amanda'>Amanda Huang</li>
                    <a href="https://github.com/amandayhuang/" target="_blank"><li><i className="fab fa-github link"></i></li></a>
                    <a href="https://www.linkedin.com/in/amandayhuang" target="_blank"><li><i className="fab fa-linkedin link"></i></li></a>
                    <a href="https://angel.co/u/ayh" target="_blank"><li><i className="fab fa-angellist link"></i></li></a>
                </ul>
            </div>
            </div>
        </>
    )
}

export default Footer;