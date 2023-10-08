import { useState } from "react";
import "./App.css";

function App() {
  const [pileOne, setPileOne] = useState([
    "item 1",
    "item 2",
    "item 3",
    "item 4",
  ]);
  const [pileTow, setPileTwo] = useState([]);
  // const [selectedItems, setSelectedItems] = useState([]);
  var selectedItems = [];

  const handleItemSelect = (event, value) => {
    console.log(event.target.value);
    if (event.target.checked) {
      selectedItems.push(value);
    } else {
      selectedItems = selectedItems.filter((i) => {
        return selectedItems.indexOf(i) === -1;
      });
    }
    console.log(selectedItems);
  };

  const handleTransferToPileTwo = () => {
    const fillterdPile = pileOne.filter((i) => {
      return selectedItems.indexOf(i) === -1;
    });
    setPileOne(fillterdPile);
    setPileTwo(pileTow.concat(selectedItems));

    selectedItems = [];
  };

  const handleTransferToPileOne = () => {
    const fillterdPile = pileTow.filter((i) => {
      return selectedItems.indexOf(i) === -1;
    });
    setPileTwo(fillterdPile);
    setPileOne(pileOne.concat(selectedItems));
    selectedItems = [];
  };

  return (
    <div className="container">
      <div className="card">
        <h4>Pile One</h4>
        {pileOne.map((i, idx) => {
          return (
            <div key={idx}>
              <input type="checkbox" onClick={(e) => handleItemSelect(e, i)} />
              {i}
            </div>
          );
        })}
      </div>

      <div className="controls-container">
        <button onClick={() => handleTransferToPileTwo()}>{">"}</button>
        <button onClick={() => handleTransferToPileOne()}>{"<"}</button>
      </div>

      <div className="card">
        <h4>Pile Two</h4>
        {pileTow.map((i, idx) => {
          return (
            <div key={idx}>
              <input type="checkbox" onClick={(e) => handleItemSelect(e, i)} />
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
