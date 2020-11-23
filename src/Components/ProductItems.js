import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

function ProductItems() {
    let { id } = useParams()
    const shoes = Shoes[id]
    //console.log(id);
    console.log(shoes);

    if (!shoes)
        return <h2>Product Not Found!</h2>
    return (
        <div>
            <h1>Welcome to Product Items</h1>
            <div className="link">
                <h4>{shoes.name}</h4>
                <img src={shoes.img} height="500" alt="shoes"></img>
            </div>
        </div>
    );
}

export default ProductItems;
