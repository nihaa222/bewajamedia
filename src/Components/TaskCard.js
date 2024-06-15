import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCheckboxDelete, setOpenCard } from "../redux/taskSlice";

function TaskCard({ task }) {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleCard = () => {
    dispatch(setOpenCard(task.id));
  };

  const handleCheckbox = (e) => {
    setChecked((prev) => !prev);
  };

  const truncate = (desc) => {
    if (!desc) return "";
    const words = desc.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "...";
    }
    return desc;
  };

  if (!task) {
    return null; // or handle the case where task is null/undefined
  }

  const handleDelete = () => {
    console.log(task.id);

    dispatch(setCheckboxDelete(task.id));
  };

  return (
    <div onClick={handleCard} className="card-container cursor">
      <div className="card ">
        <img alt="flower" className="purple" src="/purpleflower.png" />
        <div className="card-heading">
          <input
            className={`taskInput ${checked ? "taskCompleted" : ""} cursor`}
            type="text"
            value={task.taskName || ""}
            readOnly
          />
          <div className={`card-dateandtime ${checked ? "taskCompleted" : ""}`}>
            <span>{task.date}</span>
          </div>
        </div>

        <textarea
          className={` description ${checked ? "taskCompleted" : ""} cursor`}
          value={truncate(task.taskDesc)}
          readOnly
        />
        <div className="card-last">
          <button onClick={handleDelete} className="btn btn-del">
            DELETE
          </button>
          <input
            className="checkbox"
            type="checkbox"
            checked={checked}
            value={task.id}
            onChange={handleCheckbox}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
