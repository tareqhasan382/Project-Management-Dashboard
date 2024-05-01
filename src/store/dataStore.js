import { create } from "zustand";

const store = (set) => ({
  tasks: [
    {
      title:
        "In publishing and graphic design, Lorem ipsum is a placeholder text1",
      state: "PLANED",
    },
    {
      title:
        "In publishing and graphic design, Lorem ipsum is a placeholder text2",
      state: "ONGOING",
    },
    {
      title:
        "In publishing and graphic design, Lorem ipsum is a placeholder text3",
      state: "DONE",
    },
    {
      title:
        "In publishing and graphic design, Lorem ipsum is a placeholder text4",
      state: "PLANED",
    },
    {
      title:
        "In publishing and graphic design, Lorem ipsum is a placeholder text5",
      state: "ONGOING",
    },
    {
      title:
        "In publishing and graphic design, Lorem ipsum is a placeholder text6",
      state: "DONE",
    },
  ],
  dragTask: null,
  addTask: (data) => {
    set((state) => ({ tasks: [...state.tasks, data] })), alert("Created Task");
  },
  deleteTask: (data) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.title !== data.title),
    }));
    alert("Deleted Task");
  },
  setDragTask: (title) => set({ dragTask: title }),
  moveTask: (title, status) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.title === title ? { ...task, state: status } : task
      ),
    }));
  },
  // moveTask: (title, status) =>
  //   set((state) => ({
  //     tasks: [
  //       {
  //         title:
  //           "In publishing and graphic design, Lorem ipsum is a placeholder text1",
  //         state: "DONE",
  //       },
  //     ],
  //   })),
});

export const dataStore = create(store);
/*
const cart = useCart();
 [
        state.tasks.map((task) =>
          task.title === title ? { title, status } : task
        ),
      ],
=======================
 addTask: (data) => {
    const { title, state } = data;
    const currentTask = get().tasks;
    set({ tasks: [...currentTask, { title, state }] });
    alert("Task added");
  },
*/
