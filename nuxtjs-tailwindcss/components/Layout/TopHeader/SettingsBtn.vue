<template>
  <button
    type="button"
    :class="{
      'leading-none inline-block transition-all relative top-[2px] hover:text-primary-500': true,
      active: isActive,
    }"
    id="settingsMenuDropdown"
    @click.stop="toggleActive"
  >
    <i class="material-symbols-outlined !text-[22px] md:!text-[24px]">
      settings
    </i>
  </button>

  <div
    v-if="isActive"
    class="settings-menu-dropdown bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none p-[20px] absolute mt-[17px] md:mt-[20px] w-[195px] z-[1] top-full ltr:right-0 rtl:left-0 rounded-md"
  >
    <button
      type="button"
      class="rtl-mode-toggle flex items-center text-black dark:text-white font-medium"
      @click="toggleDirection"
    >
      RTL Mode:
      <span
        class="inline-block relative rounded-full w-[35px] h-[20px] bg-gray-50 dark:bg-[#0a0e19] ltr:ml-[10px] rtl:mr-[10px]"
      >
        <span
          class="inline-block transition-all absolute h-[12px] w-[12px] bg-black dark:bg-white rounded-full top-1/2 -translate-y-1/2"
          :style="{
            left: direction === 'ltr' ? '4px' : 'calc(100% - 16px)',
          }"
        ></span>
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "SettingsBtn",
  setup() {
    const isActive = ref(false);
    const direction = ref("ltr"); // Default direction

    // Toggle dropdown active state
    const toggleActive = () => {
      isActive.value = !isActive.value;
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const button = document.getElementById("settingsMenuDropdown");
      if (button && !button.contains(target)) {
        isActive.value = false;
      }
    };

    // Toggle direction between LTR and RTL
    const toggleDirection = () => {
      direction.value = direction.value === "ltr" ? "rtl" : "ltr";
      document.body.setAttribute("dir", direction.value);
      if (
        typeof window !== "undefined" &&
        typeof localStorage !== "undefined"
      ) {
        localStorage.setItem("direction", direction.value); // Persist to local storage
      }
    };

    // Initialize direction and add event listener
    onMounted(() => {
      if (
        typeof window !== "undefined" &&
        typeof localStorage !== "undefined"
      ) {
        const savedDirection = localStorage.getItem("direction");
        if (savedDirection) {
          direction.value = savedDirection;
          document.body.setAttribute("dir", savedDirection);
        }
      }
      document.addEventListener("click", handleClickOutside);
    });

    // Clean up event listener
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      isActive,
      toggleActive,
      direction,
      toggleDirection,
    };
  },
});
</script>
