<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <PaginationOne />

    <PaginationTwo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaginationOne from "./PaginationOne.vue";
import PaginationTwo from "./PaginationTwo.vue";

export default defineComponent({
  name: "Paginations",
  components: {
    PaginationOne,
    PaginationTwo,
  },
});
</script>
