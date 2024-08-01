import React from 'react';
import './NewCollections.css'
import new_collections from '../../assets/new_collections'
import Item from '../Item/Item';

const NewCollections = () => {
    return (
        <div className='new_Collections'>
            <h2>New Collections</h2>
            <hr />
            <div className='new_Collections_item'>
                {
          new_collections.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
          })
                }
            </div>
            
        </div>
    );
};

export default NewCollections;