import React, {useState} from 'react';
import ItemCount from './ItemCount';

const Item = ({ item }) => {

    const stockInitial = item.stock;
    const [initial, setInitial] = useState(item.initial);
    const [stock, setStock] = useState(item.stock);
    
    const onAdd = () => {
        if(initial < stockInitial){
            setInitial(initial + 1);
            setStock(stock - 1);
        }
    }

    const onRemove = () => {
        if(initial > 0){
            setInitial(initial - 1);
            setStock(stock + 1);
        }
    }
    
  
    return(
        <div className="col">
            <div className='card text-white bg-dark mb-3' style={{width:'18rem',overflow:'hidden'}}>
                <img className='card-img-top' src={item.imgUrl} alt={item.alt} style={{width:'350px',height:'270px'}}/>
                <div className='card-body'>
                    <h5 className='card-title'>{item.titulo}</h5>
                    <p className='card-text'>{item.descripcion}</p>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item' style={{textAlign:'center'}}>{item.precio}</li>
                </ul>
                <div className='card-body'>
                    <ItemCount 
                        stock={stock} 
                        initial={initial}
                        onAdd={onAdd}
                        onRemove={onRemove}
                    />
                </div>
            </div>
        </div>
    );
}

export default Item;