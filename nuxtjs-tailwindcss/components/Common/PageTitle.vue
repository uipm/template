<template>
  <div class="mb-[25px] md:flex items-center justify-between">
    <h5 class="mb-0">{{ pageTitle }}</h5>
    <ol class="breadcrumb mt-[12px] md:mt-0">
      <li
        class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0"
      >
        <NuxtLink
          to="/dashboard"
          class="inline-block relative ltr:pl-[22px] rtl:pr-[22px] transition-all hover:text-primary-500"
        >
          <i
            class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 !text-lg -mt-px text-primary-500 top-1/2 -translate-y-1/2"
          >
            home
          </i>
          Dashboard
        </NuxtLink>
      </li>
      <li
        class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0"
      >
        {{ subTitle }}
      </li>
      <li
        class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0"
      >
        {{ pageTitle }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageTitle",
  props: ["pageTitle", "subTitle"],
});
</script>
