<template>
  <v-row>
    <v-col lg="4">
      <v-row>
        <v-col lg="12" sm="6">
          <DashboardRealEstateActiveTotalProperty />
        </v-col>
        <v-col lg="12" sm="6">
          <DashboardRealEstateRevenueChart />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="8">
      <DashboardRealEstateNewListingsSoldPropertiesChart />
    </v-col>
  </v-row>
  <v-row class="justify-content-center">
    <v-col lg="4" sm="6">
      <DashboardRealEstatePropertiesForSaleChart />
    </v-col>
    <v-col lg="4" sm="6">
      <DashboardRealEstatePropertiesForRentChart />
    </v-col>
    <v-col lg="4" sm="6">
      <DashboardRealEstateNewCustomers />
    </v-col>
  </v-row>
  <v-row class="justify-content-center">
    <v-col lg="5">
      <DashboardRealEstateMostSalesLocation />

      <DashboardRealEstateRecentProperty />
    </v-col>
    <v-col lg="7">
      <DashboardRealEstateRentalIncomeChart />
      <v-row>
        <v-col lg="6">
          <DashboardRealEstateSocialSearchChart />

          <DashboardRealEstateTopProperty />
        </v-col>
        <v-col lg="6">
          <DashboardRealEstateCustomerReviews />
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <DashboardRealEstateLatestTransaction class="mt-25" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RealEstatePage",
});
</script>
