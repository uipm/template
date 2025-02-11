<template>
  <Logout />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import Logout from "@/components/Modules/Authentication/Logout/index.vue";

export default defineComponent({
  name: "LogOutPage",
  components: {
    Logout,
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white");
    });
  },
});
</script>
