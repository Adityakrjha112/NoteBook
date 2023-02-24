import React, { useState, useEffect } from "react";
import "../styles/inputBox.css";
import Card from "./Card";
const getLocalData = () => {
  const lists = localStorage.getItem("mynotes");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
function InputBox() {
  const [inputText, setInputText] = useState("");
  const [inputColor, setInputColor] = useState("");
  // const [isEdit, setIsEdit] = useState("");
  const [item, setItem] = useState(getLocalData());

  const addItem = () => {
    if (inputColor === "" || inputText === "") {
      alert("plz is input");
    }
    // else if (inputText) {
    //   setItem(
    //     item.map((currId) => {
    //       if (currId.id === isEdit) {
    //         return { ...currId, name: inputData };
    //       }
    //       return currId;
    //     })
    //   );
    //   setInputText("");
    //   setIsEdit(null);
    // }
    else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputText,
        color: inputColor,
      };
      setItem([...item, myNewInputData]);
    }
  };

  // const editItem = (index) => {
  //   const item_todo_edited = item.find((currId) => {
  //     return currId.id === index;
  //   });
  //   setInputData(item_todo_edited.name);
  //   setIsEdit(index);
  //   setToggleButton(true);
  // };

  useEffect(() => {
    localStorage.setItem("mynotes", JSON.stringify(item));
  }, [item]);
  return (
    <>
      <div className="dataEnter">
        <div className="headtext">
          <h2 className="heading">Add Your notes</h2>
        </div>
        <textarea
          className="inputBox"
          placeholder="Enter Your notes"
          type="text"
          rows="4"
          cols="50"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <div className="col-sub">
          <div className="color">
            <input
              type="color"
              className="inputColor"
              onChange={(e) => setInputColor(e.target.value)}
            />
          </div>
          <div className="submit">
            <button
              className="btn"
              onClick={() => {
                addItem();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Card
        item={item}
        setItem={setItem}
        inputText={inputText}
        setInputText={setInputText}
      />
    </>
  );
}

export default InputBox;
