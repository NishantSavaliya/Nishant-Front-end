import React from "react";

function Item({ item }) {
  
  return <li> <span className="check-icon">✔</span> {item.name}  {item.color}</li>;
}

function RenderListApp() {
  const items = [
    { id: 1, name: 'Use Array.map' },
    { id: 2, name: 'Not a for loop' },
    { id: 3, name: 'Give each item a unique key' },
    { id: 4, name: 'Avoid using array index as the key' },
    
  ];

  return (
  <>
  <div className="container my-5 w-50 p-5">
    <h2 className="mb-4">The "React Way" to Render a List</h2>
    <ul className="list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
    </div>
    </>
  );
}

export default RenderListApp;
