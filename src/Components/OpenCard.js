import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyTask, setOpenCard } from "../redux/taskSlice";

function OpenCard() {
  const dispatch = useDispatch();
  const { openCard, tasks } = useSelector((state) => state.task);
  const [taskToDisplay, setTaskToDisplay] = useState(null);
  const [form, setForm] = useState({
    taskName: "",
    taskDesc: "",
    id: "",
  });

  console.log(form);

  useEffect(() => {
    const fetchTask = () => {
      if (openCard > 0 && openCard <= tasks.length) {
        const task = tasks[openCard - 1];
        setTaskToDisplay(task);
        // Initialize form state with task values when taskToDisplay changes
        setForm({
          taskName: task.taskName,
          taskDesc: task.taskDesc,
          id: task.id,
        });
      } else {
        setTaskToDisplay(null); // Handle case where openCard is out of bounds
      }
    };

    fetchTask();
  }, [openCard, tasks]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  if (!taskToDisplay) {
    return null; // Return null or a loading indicator if taskToDisplay is not set yet
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(
      modifyTask({
        id: form.id,
        taskName: form.taskName,
        taskDesc: form.taskDesc,
      })
    );
    dispatch(setOpenCard(""));
  };

  return (
    <div className="opencard">
      <form onSubmit={handleSubmit}>
        <div className="tasknameopen">
          <label>TaskName:</label>
          <textarea
            className="taskareadiv1"
            id="taskName"
            type="text"
            value={form.taskName}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="taskdescopen">
          <label>Task:</label>
          <textarea
            className="taskareadiv2"
            id="taskDesc"
            type="text"
            value={form.taskDesc}
            onChange={handleChange}
          ></textarea>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}

export default OpenCard;
