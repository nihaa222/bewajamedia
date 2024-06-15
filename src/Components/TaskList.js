import { useDispatch, useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import OpenCard from "./OpenCard";
import { setOpenCard } from "../redux/taskSlice";

function TaskList() {
  const dispatch = useDispatch();
  const { tasks, openCard } = useSelector((state) => state.task);
  const handleOpenOverlay = () => {
    dispatch(setOpenCard(""));
  };

  return (
    <>
      <div className="taskList">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      {openCard && (
        <>
          <OpenCard />
          <div onClick={handleOpenOverlay} className="overlay"></div>
        </>
      )}
    </>
  );
}

export default TaskList;
