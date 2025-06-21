import { useState } from "react";
import Button from "./Button";

function App(){

  let currentIndex = 2;

  const [inventory, setInventory] = useState([
    {
      name: "Ramen",
      quantity: 5, 
      index: 1
    },
    {
      name: "Knife",
      quantity: 15, 
      index: 2
    }
  ]);

  function updateQuantity(name){
    setInventory(prevInventory => 
      prevInventory.map(item => 
        item.name === name 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  return(
    <div className="flex gap-4 text-2xl p-4">
    {
      inventory.map((item, index) => (
        <Button key={index} title={item.name} quantity={item.quantity} onClick={()=>updateQuantity(item.name)} />
      ))
    }
    </div>
  );
}

export default App;