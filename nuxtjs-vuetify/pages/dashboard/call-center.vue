<template>
  <div class="row">
    <div class="col-xxl-8">
      <DashboardCallCenterOverview />
    </div>
    <div class="col-xxl-4">
      <div class="row">
        <div class="col-xxl-12 col-md-6">
          <DashboardCallCenterInboundCallsChart />
        </div>
        <div class="col-xxl-12 col-md-6">
          <DashboardCallCenterOutboundCallsChart />
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-7 col-xxl-6">
      <DashboardCallCenterAgentsPerformanceOverview />
    </div>
    <div class="col-lg-5 col-xxl-6">
      <DashboardCallCenterGeography />
    </div>
  </div>
  <div class="row">
    <div class="col-xxl-4">
      <DashboardCallCenterAgentAvgEarnings />
    </div>
    <div class="col-xxl-8">
      <DashboardCallCenterRecentCalls />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "CallCenterPage",
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white", "call-center-page");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white", "call-center-page");
    });
  },
});
</script>

<style lang="scss">
body {
  &.call-center-page {
    .main-content {
      padding-top: 75px;
    }
    .sidebar-area {
      border-right: 1px solid #eceef2 !important;
    }
    .header-area {
      padding: 12px 0 !important;
      &.sticky {
        padding-left: 25px !important;
        padding-right: 25px !important;
      }
      &.mb-4 {
        margin-bottom: 0.5rem !important;
      }
    }
    .footer-area {
      border: 1px solid #eceef2 !important;
    }
  }
}
</style>
