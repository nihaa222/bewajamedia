import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      taskName: "Complete the homework",
      taskDesc:
        "Find some sheet of paper. Make the front Page with sketchpen. Include all the personal information in the front page. and then include all the substance that are left in the rest of the page",
      date: "06/13",
      time: "12:00 PM",
    },
    {
      id: 2,
      taskName: "Learn JavaScript basics",
      taskDesc:
        "Start with variables, data types, and operators. Then move on to control structures like if statements, loops, and functions. Try to build a project on your own to practise all the skills that you have learned",
      date: "06/14", // June 14, 2024
      time: "03:30 PM", // 3:30 PM
    },
    {
      id: 3,
      taskName: "Write a blog post",
      taskDesc:
        "Choose a topic of interest, conduct research, outline your post, and start writing. Don't forget to proofread before publishing!",
      date: "06/15", // June 15, 2024
      time: "10:00 AM", // 10:00 AM
    },
  ],
  startTask: false,
  openCard: "",
  checkboxId: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setStartTask: (state) => {
      state.startTask = !state.startTask;
    },

    setTasks: (state, action) => {
      state.tasks.push(action.payload);
    },
    setOpenCard: (state, action) => {
      state.openCard = action.payload;
    },
    setCheckbox: (state, action) => {
      state.checkboxId = action.payload.id;
    },
    setCheckboxDelete: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    modifyTask: (state, action) => {
      const { id, taskName, taskDesc } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);

      if (index !== -1) {
        // Create a new array with the modified task object
        state.tasks[index] = {
          ...state.tasks[index],
          taskName,
          taskDesc,
        };
      }
    },
  },
});

export const {
  setStartTask,
  setTasks,
  setOpenCard,
  setCheckbox,
  setTrueCheckbox,
  setCheckboxDelete,
  modifyTask,
  removeSelected,
} = taskSlice.actions;
export default taskSlice.reducer;
