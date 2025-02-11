<template>
  <BasicTimeline />

  <AdvancedTimeline />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasicTimeline from "./BasicTimeline.vue";
import AdvancedTimeline from "./AdvancedTimeline.vue";

export default defineComponent({
  name: "Timeline",
  components: {
    BasicTimeline,
    AdvancedTimeline,
  },
});
</script>
