import React from 'react';
import InventoryTable from './InventoryTable';

const Main = () => {
    return (
      <div className='main'>
        <h2 className='inventory-title'>Saved inventory</h2>
        <InventoryTable />
      </div>
    );
};

export default Main;
