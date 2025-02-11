<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <OverviewProgress />

    <LabelsProgress />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OverviewProgress from "./OverviewProgress.vue";
import LabelsProgress from "./LabelsProgress.vue";

export default defineComponent({
  name: "Progress",
  components: {
    OverviewProgress,
    LabelsProgress,
  },
});
</script>
