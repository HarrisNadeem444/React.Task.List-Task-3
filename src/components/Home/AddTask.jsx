import { useState } from "react";
import { useEffect } from "react";
import TaskList from "./Task";

const getStorageItems = () => {
  let list = localStorage.getItem("items");
  if (list) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};

function AddTask() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("Not Completed");
  const [itemArr, setItemArr] = useState(getStorageItems());

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemArr));
  }, [itemArr]);

  return (
    <div>
      <h1>To Do Task List..</h1>
      <hr />
      <input
        placeholder="Task Title.."
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
        type="text"
      />
      <input
        placeholder="Time.."
        onChange={(e) => {
          setTime(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          const newItemArr = [
            { title: taskName, time: time, isComplete: status },
            ...itemArr,
          ];
          setItemArr(newItemArr);
          console.log(newItemArr);
        }}
      >
        Add Task
      </button>
      {itemArr.map((item, index) => {
        return (
          <TaskList
            key={index}
            index={index}
            title={item.title}
            time={item.time}
            isComplete={item.isComplete}
            setItemArr={setItemArr}
          />
        );
      })}
    </div>
  );
}
export default AddTask;
