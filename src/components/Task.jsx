import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
      //ovde kaze dinamicki, ako je task reminder true, ide klasa reminder, else nista 
    <div className={`task ${task.reminder ? 'reminder' : ''} `} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
