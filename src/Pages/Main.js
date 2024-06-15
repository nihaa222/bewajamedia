// // Main.js

import { useDispatch, useSelector } from "react-redux";
import DatePicker from "../Components/DatePicker";
import TaskList from "../Components/TaskList";
import { useState } from "react";
import { setStartTask, setTasks } from "../redux/taskSlice";
import OpenCard from "../Components/OpenCard";

function Main() {
  const { startTask } = useSelector((state) => state.task);
  let number = 3;

  const [form, setForm] = useState({
    taskName: "",
    taskDesc: "",
  });

  // console.log(form);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    number++;

    e.preventDefault();

    dispatch(setTasks({ ...form, id: number }));

    setForm({
      taskName: "",
      taskDesc: "",
    });
    dispatch(setStartTask());
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleOverlay = (e) => {
    dispatch(setStartTask());
  };

  return (
    <div>
      <div>
        {startTask && (
          <>
            <div className="overlay" onClick={handleOverlay}></div>
            <form onSubmit={handleSubmit} className="taskInputBox">
              <input
                type="text"
                className="taskInput"
                id="taskName"
                placeholder="Task Name"
                value={form.taskName}
                onChange={handleChange}
              ></input>

              <textarea
                type="textarea"
                className="description"
                placeholder="Enter Task"
                value={form.taskDesc}
                id="taskDesc"
                onChange={handleChange}
              ></textarea>
              <div className="btn-main">
                <DatePicker
                  className="datetime"
                  form={form}
                  setForm={setForm}
                />
                <button className="btn btn-main-data">Save</button>
              </div>
            </form>
          </>
        )}
      </div>
      <TaskList />
    </div>
  );
}

export default Main;

// function Main() {
//   const dispatch = useDispatch();
//   const [form, setForm] = useState({
//     taskName: "",
//     taskDesc: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//     console.log(form);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(setTasks(form));
//   };

//   return (
//     <div>
//       <div>
//         <form className="taskInputBox" onSubmit={handleSubmit}>
//           <input
//             id="taskName"
//             type="text"
//             className="taskInput"
//             value={form.taskName}
//             placeholder="Task name"
//             onChange={handleChange}
//           />
//           <input
//             id="taskDesc"
//             type="text"
//             value={form.taskDesc}
//             className="description"
//             placeholder="Enter your task"
//             onChange={handleChange}
//           />
//           <div>
//             <button className="btn btn-main-data">Save</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Main;
