<template>
  <DashboardMarketingStatusContent />
  <v-row>
    <v-col lg="8">
      <DashboardMarketingPerformanceOverviewChart />
    </v-col>
    <v-col lg="4">
      <DashboardMarketingNewMobileApp />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="4">
      <DashboardMarketingHighlightsContent />

      <DashboardMarketingChannelsContent />
    </v-col>
    <v-col lg="8">
      <DashboardMarketingCampaignsContent />
      <v-row>
        <v-col md="6">
          <DashboardMarketingExternalLinks />
        </v-col>
        <v-col md="6">
          <DashboardMarketingInstagramCampaignsChart />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="3" md="4">
      <DashboardMarketingNewMarketingTool />
    </v-col>
    <v-col lg="9" md="8">
      <DashboardMarketingInstagramSubscriberChart />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MarketingPage",
});
</script>
