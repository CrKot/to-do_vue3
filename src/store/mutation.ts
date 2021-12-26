import { Task } from "@/types/task";
import { S } from "@/types/state";

const setStorage = (value: Task[] | []): void => {
  localStorage.setItem("tasks", JSON.stringify(value));
};

export const mutations = {
  ADD_TASK(state: S, title: string): void {
    if (!title) return;
    const task = {
      id: Date.now(),
      title,
      isClosed: false,
    } as Task;
    state.tasks.push(task);
    setStorage(state.tasks);
  },

  REMOVE_TASK(state: S, id: number): void {
    state.tasks = state.tasks.filter((task: Task): boolean => task.id !== id);
    setStorage(state.tasks);
  },

  REMOVE_TASKS(state: S, onlyClosed: boolean): void {
    if (onlyClosed) {
      state.tasks = state.tasks.filter((task: Task): boolean => !task.isClosed);
      setStorage(state.tasks);
    } else {
      state.tasks = [];
      setStorage([]);
    }
  },

  CHANGE_STATUS_TASK(state: S, id: number): void {
    state.tasks.map((task: Task): void => {
      if (task.id === id) {
        task.isClosed = !task.isClosed;
      }
    });
    setStorage(state.tasks);
  },
  SET_FILTER(state: S, filter: string): void {
    state.filter = filter;
  },
};
