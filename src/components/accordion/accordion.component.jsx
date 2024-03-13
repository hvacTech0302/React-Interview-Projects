import { useState } from "react";
import data from "./data";
import "./accordion.styles.css";

// Single Selection
//Multi Selection

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let copyMultipleSelected = [...multipleSelected];
    const findIndexOfCurrentId = copyMultipleSelected.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copyMultipleSelected.push(getCurrentId);
    else copyMultipleSelected.splice(findIndexOfCurrentId, 1);
    setMultipleSelected(copyMultipleSelected);
  };

  return (
    <div className="wrapper">
      <button
        className="button"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="item"
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              <div>
                {selected === dataItem.id ||
                multipleSelected.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
