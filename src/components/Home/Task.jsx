import { useState, useEffect } from "react";
import "./Home.css";

const Task = (props) => {
  const markCompleteHandler = () => {
    const indexOfCounter = props.index;
    props.setItemArr((prevState) => {
      console.log(prevState);
      const newItemArr = prevState.map((item, index) => {
        if (indexOfCounter === index) {
          return { ...item, isComplete: "Completed" };
        } else return item;
      });
      return newItemArr;
    });
  };

  const deleteHandler = () => {
    const indexOfCounter = props.index;
    props.setItemArr((prevState) => {
      console.log(prevState);
      const newItemArr = prevState.filter((item, index) => {
        if (indexOfCounter === index) return false;
        else return true;
      });
      localStorage.setItem("itemArr", JSON.stringify(newItemArr));

      return newItemArr;
    });
  };

  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  return (
    <div>
      <hr />
      <h2>Task Name: {props.title}</h2>
      <h2>Approx Time: {props.time}</h2>
      <h2>Task Status: {props.isComplete}</h2>

      <button onClick={markCompleteHandler}>Mark Complete</button>
      <button onClick={deleteHandler}>Delete Task </button>
      <hr />
    </div>
  );
};

export default Task;
