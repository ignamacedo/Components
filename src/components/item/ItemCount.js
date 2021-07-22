import React from 'react';

function ItemCount({stock, initial, onAdd, onRemove}){
    return(
        <div>
            <form>
                <input type='number' class='form-control' style={{width:'40%',textAlign:'center'}} disabled value={initial}/>
                <input type='text' class='form-control' style={{width:'40%',textAlign:'center'}} disabled value={'Stock : '+stock}/>
                <button disbaled className='btn btn-secondary' type='button' onClick={() => {onRemove()}}> - </button>
                <button className='btn btn-secondary' type='button' onClick={()=>{onAdd()}}> + </button>
                <button className='btn btn-primary' type='submit'>Agregar al carrito</button>
            </form>
        </div>
    );
}

export default ItemCount;