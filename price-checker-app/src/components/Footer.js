import React from 'react';

const Footer = () => {
   
  
    return (
      <div className='bg-lightest-blue footer'>
        <p className='black-70 foottext'>Made by </p>
        <div className='frame'>
          <a href='https://github.com/kboeff' target='_blank' rel="noopener noreferrer">
              <img src="./favicon2.ico" border="0" alt="git-logo"/>
          </a>
        </div>
      </div>
    );
};

export default Footer;
