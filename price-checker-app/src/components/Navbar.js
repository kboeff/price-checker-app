import React from 'react';
import CategoriesButton from './Categories';
import CatList from './CatList';

const NavComponent = () => {
    return (
      <nav className='bg-lightest-blue w-100 pv3 ph4-m flex'>
        <ul className='menu-container flex'>
          <li className='menu-item'>
            <CategoriesButton title='Categories'>
              <div>
                <CatList />
              </div>
            </CategoriesButton>
          </li>
          <li className='menu-item'><a href='#'><div class='round-btn'>Update</div></a></li>
        </ul>
      </nav>
    );
};

export default NavComponent;