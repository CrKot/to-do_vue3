<template>
  <section class="to-do">
    <fieldset class="to-do__fieldset">
      <legend class="to-do__legend">To-Do task manager</legend>
      <div class="divider" />
      <div class="to-do__input">
        <input
          v-model="data.textTask"
          placeholder="add task"
          @keyup.esc="data.textTask = ''"
          @keyup.enter="addTask()"
          type="text"
        />
        <button
          @click="addTask()"
          :disabled="!data.textTask"
          class="to-do__btn"
        >
          <img src="@/assets/icons/add-task.svg" alt="" />
        </button>
        <button
          @click="data.textTask = ''"
          :disabled="!data.textTask"
          class="to-do__btn"
        >
          <img src="@/assets/icons/delete-task.svg" alt="" />
        </button>
      </div>
      <div class="to-do__status-task">
        <span class="text"> Всего задач: </span>
        <div class="count">{{ store.state.tasks.length }}</div>
        <div v-if="store.state.tasks.length" class="status-btn-block">
          <button
            class="btn"
            :class="{ active: filter === '' }"
            @click="setFilter()"
          >
            all
          </button>
          <button
            class="btn"
            @click="setFilter('active')"
            :class="{ active: filter === 'active' }"
          >
            active
          </button>
          <button
            class="btn"
            @click="setFilter('closed')"
            :class="{ active: filter === 'closed' }"
          >
            closed
          </button>
        </div>
      </div>
      <div class="to-do__catalog">
        <slot name="catalog"></slot>
      </div>
      <div class="to-do__btn-block">
        <slot name="btn-block"></slot>
      </div>
    </fieldset>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "ToDo",

  setup() {
    const store = useStore();
    const data = reactive({ textTask: "" as string });
    const filter = computed(() => store.state.filter);
    const addTask = (): void => {
      store.dispatch("addTask", data.textTask);
      data.textTask = "";
    };
    const setFilter = (filter = "" as string): void => {
      store.dispatch("setFilter", filter);
    };
    return { addTask, data, filter, setFilter, store };
  },
});
</script>
