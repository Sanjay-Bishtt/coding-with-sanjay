import React from 'react';
import './NewCollections.css';
import Item from '../Item/Item';
import new_collection from '../Assets/new_collections';

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((item) => {
          return (
            <Item
              id={item.id}
              key={item.id} // Using item.id as key instead of index
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
