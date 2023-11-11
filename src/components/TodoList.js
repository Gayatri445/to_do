import React from "react";
import { deleteTodo, removeAllTodo } from "../actions";
import { useDispatch,useSelector } from "react-redux";

const ToDoList = () => {
    const  inputList = useSelector((state)=>state.todoReducers.inputList)
    const dispatch = useDispatch()

  return (
    <div className="display">
      <ul>
        {inputList.map((item) => (
          <li className="item" key={item.id}>
            {item.data}
            <div className="update">
              {
                <i
                  className="fa-sharp fa-solid fa-pen-to-square blue-hover"
                //   onClick={() => editItem(item.id)}
                ></i>
              }
              {
                <i
                  className="fa-sharp fa-solid fa-trash red-hover"
                  onClick={() => dispatch(deleteTodo(item.id))}
                ></i>
              }
            </div>
          </li>
        ))}
      </ul>
      {inputList.length >= 1 && (
        <button onClick={()=>dispatch(removeAllTodo())} className="remove">
          Remove All
        </button>
      )}{" "}
    </div>
  );
};

export default ToDoList;
