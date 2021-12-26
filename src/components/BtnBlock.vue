<template>
  <section class="btn-block">
    <button
      @click="removeTasks(true)"
      :disabled="thereAreClosed"
      class="btn-block__clear-complete"
    >
      clear complete
    </button>
    <button
      :disabled="haveTasks"
      @click="removeTasks()"
      class="btn-block__clear-all"
    >
      clear all
    </button>
  </section>
</template>

<script lang="ts">
import { Task } from "@/types/task";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "ToDoBtnBlock",

  setup() {
    const store = useStore();
    const removeTasks = (onlyClosed = false as boolean) => {
      store.dispatch("removeTasks", onlyClosed);
    };
    const thereAreClosed = computed((): boolean => {
      return !store.state.tasks.some((task: Task) => task.isClosed === true);
    });
    const haveTasks = computed((): boolean => {
      return !store.state.tasks.length;
    });
    return { removeTasks, thereAreClosed, haveTasks };
  },
});
</script>
