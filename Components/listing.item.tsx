import React from 'react';

export interface ProductProps {
    _id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
    btnText?: string;
    key?: number;
    onPress?: (item: any, index: any) => void
}

function ListItem(item: ProductProps) {
    const { name, price, _id, stock, image, key, btnText, onPress } = item;
    debugger
    return (
        <li className="list-item" key={_id}>
            <img src={image} />
            <h3>{name}</h3>
            <div>
                <h3>Price: {price}</h3>
                <h3>Quantity: {stock}</h3>
            </div>
            <button onClick={() => onPress && onPress({ name, price, _id, stock, image }, key)}>{btnText}</button>
        </li>
    );
}

export default ListItem;
