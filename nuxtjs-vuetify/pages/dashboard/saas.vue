<template>
  <v-row>
    <v-col xxl="9" lg="9">
      <DashboardSaaSPaymentChart />
    </v-col>
    <v-col xxl="3" lg="3">
      <DashboardSaaSActiveUserChart />

      <DashboardSaaSRevenueChart />

      <DashboardSaaSConversionChart />
    </v-col>
  </v-row>

  <v-row>
    <v-col lg="4">
      <DashboardSaaSTopRefers />
    </v-col>
    <v-col lg="8">
      <DashboardSaaSActiveUsersChart />
    </v-col>
  </v-row>

  <v-row>
    <v-col lg="8">
      <DashboardSaaSLatestTransaction />
    </v-col>
    <v-col lg="4">
      <DashboardSaaSUpgradePlans />
    </v-col>
  </v-row>

  <v-row>
    <v-col lg="4">
      <DashboardSaaSActiveUsers />
    </v-col>
    <v-col lg="8">
      <DashboardSaaSProductTradeConditionChart />
    </v-col>
  </v-row>

  <v-row>
    <v-col lg="8">
      <DashboardSaaSGrossRevenueChart />
    </v-col>
    <v-col lg="4">
      <DashboardSaaSSalesByCountry />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SaaSPage",
});
</script>
