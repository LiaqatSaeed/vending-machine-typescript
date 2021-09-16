import React from "react";
import ListItem from "./listing.item";
import { ProductProps } from "./listing.item";
import map from "lodash/map";

interface SelectedItemsProps {
    selected_list?: ProductProps[];
    onPress?: (item: any, index: number) => void;
}

function SelectedItems({ selected_list, onPress }: SelectedItemsProps) {
    console.log(selected_list);
    return (
        <div className="list-Container">
            <h1>My Items</h1>
            <ul className="list">
                {map(
                    selected_list,
                    ({ name, price, _id, stock, image }: ProductProps, index: any) => (
                        <ListItem
                            name={name}
                            price={price}
                            _id={_id}
                            stock={stock}
                            image={image}
                            onPress={onPress}
                            key={index}
                            btnText="Refund"
                        />
                    )
                )}
            </ul>
        </div>
    );
}

export default SelectedItems;
