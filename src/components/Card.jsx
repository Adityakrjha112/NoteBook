import React, { useState } from "react";
import "../styles/Card.css";
import deleteIcon from "../assests/delete.svg";
import editIcon from "../assests/edit.svg";
function Card(props) {
  let { item, setItem } = props;
  const [updateItems, setUpdateItem] = useState("");
  const [isEdit, setIsEdit] = useState("");
  const d = new Date();
  let y = d.getFullYear();
  let m = d.getMonth();
  let da = d.getDate();

  const deleteItem = (id) => {
    const updateItem = item.filter((curr) => {
      return curr.id !== id;
    });
    setItem(updateItem);
  };

  // const editItem = (index) => {
  //   const item_todo_edited = item.find((currId) => {
  //     return currId.id === index;
  //   });
  //   setInputText(item_todo_edited.name);
  //   setIsEdit(index);
  // };

  const editItem = (index) => {
    setIsEdit(index);
    // console.log(updateItems !== "");

    if (updateItems !== "") {
      setItem(
        item.map((currId) => {
          console.log(currId.id === isEdit);
          console.log(isEdit);
          if (currId.id === index) {
            return { ...currId, name: updateItems };
          }
          return currId;
        })
      );
    }
  };

  return (
    <>
      <div className="container">
        {item.map((res) => {
          return (
            <div
              className="card"
              key={res.id}
              style={{ backgroundColor: res.color }}
            >
              <textarea
                id="w3review"
                className="inputBoxs"
                name="w3reviews"
                type="text"
                rows="4"
                cols="50"
                onChange={(e) => setUpdateItem(e.target.value)}
                style={{ backgroundColor: res.color }}
              >
                {res.name}
              </textarea>
              <div className="date">
                <p>
                  {da}/{m}/{y}
                </p>
                <div className="icon">
                  <img
                    src={editIcon}
                    alt="edit"
                    className="editbtn"
                    onClick={() => {
                      editItem(res.id);
                    }}
                  />
                  <img
                    src={deleteIcon}
                    alt="DELETE"
                    onClick={() => {
                      deleteItem(res.id, res.color);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
