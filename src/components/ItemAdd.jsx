import { useState } from "react";

const ItemAdd = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = `아이템 ${items.length + 1}`;

    setItems([...items, newItem]);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <button className="py-2 px-4 rounded-lg bg-red-300" onClick={addItem}>
        아이템 추가
      </button>
      <ul className="mt-8 flex flex-col gap-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemAdd;
