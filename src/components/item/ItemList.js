export const ItemList = () =>{
    const data = [
        {id: 1, titulo: 'Producto 1', descripcion: 'Descripcion 1', precio:'$750M', stock:5, initial:0, alt:'Imagen Producto 1', imgUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/potw1934a.jpg'},
        {id: 2, titulo: 'Producto 2', descripcion: 'Descripcion 2', precio:'$800M', stock:3, initial:0, alt:'Imagen Producto 2', imgUrl:'https://cff2.earth.com/uploads/2019/07/23191124/CrabNebula.jpg'},
        {id: 3, titulo: 'Producto 3', descripcion: 'Descripcion 3', precio:'$70M', stock:12, initial:0, alt:'Imagen Producto 3', imgUrl:'https://cdn.vox-cdn.com/thumbor/066HzJ4wFC9P8vYj04BEHtZK4Ek=/0x0:2000x1361/1200x800/filters:focal(840x521:1160x841)/cdn.vox-cdn.com/uploads/chorus_image/image/67730255/archives_helix.0.jpg'},
        {id: 4, titulo: 'Producto 4', descripcion: 'Descripcion 4', precio:'$250M', stock:8, initial:0, alt:'Imagen Producto 4', imgUrl:'http://www.nasa.gov/sites/default/files/thumbnails/image/tycho.jpg'}
   ];

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data);
        },2000);
    });
};