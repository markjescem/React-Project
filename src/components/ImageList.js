import React from 'react';


const ImageList = props =>{
    const picture = props.images.map((pic) =>{ 
    return <img key = {pic.id} src={pic.urls.regular}/>}); 
return <div>{picture}</div>
};


export default ImageList