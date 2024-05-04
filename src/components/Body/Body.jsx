import React, { useState } from "react";

function Body({ items, title }) {
  debugger;
  // let items = ["Mohsin", "Azam", "Amal"];

  // const handleClick = (event) => console.log(event);

  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>title</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Body;
