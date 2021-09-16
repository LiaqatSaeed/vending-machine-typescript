import React from "react";
import ListItem from "./listing.item";
import { ProductProps } from "./listing.item";
import map from "lodash/map";

export interface ListingProps {
    product_list?: ProductProps[];
    onPress?: (item: any, index: number) => void;
}

function Listing({ product_list, onPress }: ListingProps) {
    return (
        <div className="list-Container">
            <h1>vending machine balance { }</h1>
            <ul className="list">
                {map(product_list, ({ name, price, _id, stock, image }: ProductProps, index: any) => {
                    return (
                        <ListItem
                            key={index}
                            name={name}
                            price={price}
                            _id={_id}
                            stock={stock}
                            image={image}
                            onPress={onPress}
                            btnText="Buy"
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default Listing;
