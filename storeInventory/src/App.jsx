import { useState, useEffect } from "react";
import Inventory from "./Inventory";
import Search from "./Search";

function App(){

  let currentIndex = 2;

  const [inventory, setInventory] = useState(() => {
    const savedInventory = localStorage.getItem('storeInventory');
    return savedInventory;
  });

  // Save to localStorage whenever inventory changes
  useEffect(() => {
    localStorage.setItem('storeInventory', JSON.stringify(inventory));
  }, [inventory]);

  function updateQuantity(name){
    setInventory(prevInventory => 
      prevInventory.map(item => 
        item.name === name 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function addItem(itemName){
    currentIndex++;
    setInventory(prevInventory => [
      ...prevInventory,
      {
        name: itemName,
        quantity: 1,
        index: currentIndex
      }
    ]);
  }

  function clearInventory(){
    localStorage.removeItem('storeInventory');
    setInventory([]);
  }

  return(

    <div className="flex flex-col p-5">

      <Search addItem={addItem}/>
      <Inventory inventory={inventory} updateQuantity={updateQuantity} />
      <pre className="text-sm bg-gray-100 p-2 rounded">
        {JSON.stringify(inventory, null, 2)}
      </pre>
      <button onClick={clearInventory} className="bg-red-500 text-white p-2 rounded">
        Clear All
      </button>
    </div>
  );
}

export default App;