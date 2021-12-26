<template>
  <section class="catalog-to-do">
    <div v-for="task in tasks" :key="task.id" class="catalog-to-do__item">
      <div class="content" v-on:click="changeStatusTask(task.id)">
        <div class="catalog-to-do__item-icon status">
          <img
            v-if="task.isClosed"
            src="@/assets/icons/task-complete.svg"
            alt=""
          />
          <img v-else src="@/assets/icons/open-task.svg" alt="" />
        </div>
        <div
          class="item-title"
          :style="{ textDecoration: task.isClosed ? 'line-through' : 'none' }"
        >
          {{ task.title }}
        </div>
      </div>
      <button @click="removeTask()" class="catalog-to-do__item-icon delete">
        <img src="@/assets/icons/delete-task.svg" alt="" />
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Task } from "@/types/task";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ToDoCatalog",

  setup() {
    const store = useStore();
    const filter = computed((): string => store.state.filter);
    const tasks = computed((): Task[] => {
      switch (filter.value) {
        case "active":
          return store.state.tasks.filter(
            (task: Task): boolean => !task.isClosed
          );
        case "closed":
          return store.state.tasks.filter(
            (task: Task): boolean => task.isClosed
          );
        default:
          return store.state.tasks;
      }
    });
    const changeStatusTask = (id: number): void => {
      store.dispatch("changeStatusTask", id);
    };
    const removeTask = (id: number): void => {
      store.dispatch("removeTask", id);
    };
    return { tasks, changeStatusTask, removeTask };
  },
});
</script>
