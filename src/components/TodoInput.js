import React,{useState} from "react";
import { addTodo } from "../actions";
import {useDispatch} from 'react-redux'

const TodoInput = () => {
  const [value, setValue] = useState("");

const dispatch = useDispatch()

  return (
    <div className="top">
      <h1>To-Do List</h1>
      <br />
      <div className="center">
        <input
          // onKeyDown={handleEnter}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Add an item"
          value={value}
        />

        {/* {!toggle ? ( */}
          <i
            className="fa-solid fa-circle-plus fa-xl green-hover"
            onClick={()=>dispatch(addTodo(value),setValue(""))}  //here dispatch takes two function addTodo & setValue
          ></i>
        {/* ) : ( */}
          {/* <i
            className="fa-sharp fa-solid fa-pen-to-square fa-xl blue-hover"
            onClick={addItem}
          ></i>
        )} */}
      </div>
    </div>
  );
};

export default TodoInput;
