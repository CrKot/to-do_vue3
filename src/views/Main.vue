<template>
  <div class="container">
    <to-do>
      <template #catalog>
        <catalog-to-do />
      </template>
      <template #btn-block>
        <btn-block />
      </template>
    </to-do>
  </div>
</template>

<script lang="ts">
import ToDo from "@/components/ToDo.vue";
import CatalogToDo from "@/components/CatalogToDo.vue";
import BtnBlock from "@/components/BtnBlock.vue";

export default {
  name: "Home",
  components: {
    ToDo,
    BtnBlock,
    CatalogToDo,
  },
};
</script>
