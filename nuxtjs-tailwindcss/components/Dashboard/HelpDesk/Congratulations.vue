<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <h5 class="font-semibold mb-[2px]">
        Congratulations, <span class="text-primary-500">Olivia!</span>
      </h5>
      <p class="mb-[14px]">Best agent of the month</p>
      <h6 class="text-secondary-500 text-[20px] mb-[1px]">1.5k+</h6>
      <span class="block"> Ticket Solved </span>
      <NuxtLink
        to="/my-profile"
        class="inline-block font-medium rounded-md text-primary-50 bg-primary-500 mt-[16px] px-[9.3px] py-[3.5px] transition-all hover:bg-primary-400"
      >
        View Profile
      </NuxtLink>
      <img
        src="@/assets/images/trophy.gif"
        class="absolute bottom-0 ltr:right-0 rtl:left-0 max-w-[130px] md:max-w-[152px]"
        alt="trophy-image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Congratulations",
});
</script>
