<template>
  <v-row>
    <v-col lg="6">
      <v-row>
        <v-col sm="6">
          <DashboardShipmentTotalIncome />
        </v-col>
        <v-col sm="6">
          <DashboardShipmentTotalShipment />
        </v-col>
        <v-col sm="6">
          <DashboardShipmentTotalCustomer />
        </v-col>
        <v-col sm="6">
          <DashboardShipmentTotalOrder />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="6">
      <DashboardShipmentDeliveredChart />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8">
      <v-row>
        <v-col sm="6">
          <DashboardShipmentAverageDeliveryTimeChart />
        </v-col>
        <v-col sm="6">
          <DashboardShipmentLiveShipmentStatusChart class="mb-25" />
        </v-col>
      </v-row>

      <DashboardShipmentTrackingOrder />
    </v-col>
    <v-col lg="4">
      <v-row>
        <v-col lg="12" sm="6">
          <DashboardShipmentToTopCountries />
        </v-col>
        <v-col lg="12" sm="6">
          <DashboardShipmentChatContent />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row class="justify-content-center">
    <v-col lg="4" sm="12">
      <DashboardShipmentTopShippingMethodsChart />
    </v-col>
    <v-col lg="4" sm="12">
      <DashboardShipmentTodaysShipmentsChart />
    </v-col>
    <v-col lg="4" sm="12">
      <DashboardShipmentOnTimeDeliveryChart />
    </v-col>
  </v-row>

  <DashboardShipmentList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShipmentPage",
});
</script>
