import React, { useEffect, useState } from 'react';
import {ItemList} from './ItemList';
import Item from './Item';

const ItemListContainer = (props) => {

    const [items,setItems] = useState([]);

    useEffect(()=>{
      ItemList().then(res => setItems(res));
    },[]);
  
    return(
    <>
      <h1>{props.greeting}</h1>

      <div class="container-fluid">
        <div className="row">
          {(items.lenght === 0) ? 
            <p>LOADING....</p>
            :
            items.map((item,index) => (
              <Item item={item}/>
            ))
            }
        </div>
      </div>
    </>
    );
}

export default ItemListContainer;
