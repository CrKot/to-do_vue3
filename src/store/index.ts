import { createStore, Commit } from "vuex";
import { Task } from "@/types/task";
import { mutations } from "./mutation";

export const store = createStore({
  state: {
    filter: "" as string,
    tasks: JSON.parse(localStorage.getItem("tasks") as string) || [],
  },
  mutations,
  actions: {
    addTask({ commit }: { commit: Commit }, title: string): Task[] {
      commit("ADD_TASK", title);
      return this.state.tasks;
    },
    setFilter({ commit }: { commit: Commit }, filter = "" as string): void {
      commit("SET_FILTER", filter);
    },
    changeStatusTask({ commit }: { commit: Commit }, id: number): void {
      commit("CHANGE_STATUS_TASK", id);
    },
    removeTask({ commit }: { commit: Commit }, id: number): void {
      commit("REMOVE_TASK", id);
    },
    removeTasks(
      { commit }: { commit: Commit },
      onlyClosed = false as boolean
    ): void {
      commit("REMOVE_TASKS", onlyClosed);
    },
  },
});
