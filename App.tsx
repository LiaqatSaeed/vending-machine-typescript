import React, { useState } from 'react';
import './App.css';
import Listing from './Components/listing';
import SelectedItems from './Components/selected.items';
import productList from "./database/data.json";




function App() {
  const [products, setProducts] = useState(productList);
  const [selectedItems, setSelectedItems] = useState<any>([]);

  const onBuy = (item: any, index: number) => {
    let tempItem = products.forEach((product, index) => {
      if (product._id === item._id) {
        product.stock -= 1;
      }
      return product;
    })

    setSelectedItems([...selectedItems, { ...item, stock: 1 }])
  }

  const onRefund = (item: any, index: number) => {
    let tempItem = products.forEach((product, index) => {
      if (product._id === item._id) {
        product.stock += 1;
      }
      return product;
    })

  }


  return (
    <div className="App">
      <Listing product_list={products} onPress={onBuy} />
      <SelectedItems selected_list={selectedItems} onPress={onRefund} />
    </div>
  );
}

export default App;
