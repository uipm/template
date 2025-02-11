<template>
  <div class="mt-4">
    <DashboardPOSSystemStats />
  </div>

  <v-row>
    <v-col lg="8">
      <DashboardPOSSystemSalesAnalytics />
    </v-col>
    <v-col lg="4">
      <DashboardPOSSystemCustomerSegmentation />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8">
      <DashboardPOSSystemCategoriesTab />
    </v-col>
    <v-col lg="4">
      <DashboardPOSSystemOrderDetails />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";

export default defineComponent({
  name: "POSSystemPage",
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white", "pos-system-page");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white", "pos-system-page");
    });
  },
});
</script>

<style lang="scss">
body {
  &.pos-system-page {
    .sidebar-area {
      background-color: #f6f7f9 !important;
      .logo {
        &.bg-white {
          background-color: #f6f7f9 !important;
        }
      }
    }
    .header-area {
      padding: 12px 0 !important;
      &.sticky {
        padding-left: 25px !important;
        padding-right: 25px !important;
      }
    }
    .footer-area {
      border: 1px solid #eceef2 !important;
    }
  }
}
</style>
