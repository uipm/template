<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <ModulesUIElementsModalsLiveDemoModal />

    <ModulesUIElementsModalsScrollingLongContentModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modals",
});
</script>
