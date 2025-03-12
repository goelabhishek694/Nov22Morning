import React from "react";
import { useState, UseCallback } from "react";

function ItemList() {
  const [items, setItems] = useState(["Item1", "Item2", "Item3", "Item4"]);
  const handleRemove = UseCallback((itemToBeRemoved) => {
    const newItemsList = items.filter(item => item !== itemToBeRemoved);
    setItems(newItemsList);
  }, []);
  return (
    <div>
      {items.map((item, idx) => (
        <div>
          <li key={idx}>{item}</li>
          <button onClick={() => handleRemove(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
