<template>
  <DashboardNFTManageYourNFT />

  <div class="px-2 px-sm-5 position-relative mb-4">
    <DashboardNFTSlideItem />
  </div>

  <v-row>
    <v-col xxl="4" lg="4">
      <DashboardNFTEthereumRateTab />
    </v-col>
    <v-col xxl="8" lg="8">
      <DashboardNFTActiveAuctions />
    </v-col>
  </v-row>

  <v-row>
    <v-col xxl="9" lg="9">
      <DashboardNFTFeaturedNFTArtworks />
    </v-col>
    <v-col xxl="3" lg="3">
      <DashboardNFTNewMobileApp />
    </v-col>
  </v-row>

  <v-row>
    <v-col xxl="8" lg="8">
      <DashboardNFTMostPopularSellers />
    </v-col>
    <v-col xxl="4" lg="4">
      <DashboardNFTWorldwideTopCreators />
    </v-col>
  </v-row>

  <v-row>
    <v-col xxl="3" lg="3" sm="6" class="order-1 order-xxl-1">
      <DashboardNFTTopCollections />
    </v-col>
    <v-col xxl="6" lg="6" md="12" class="order-2 order-xxl-2">
      <DashboardNFTTopNFTs />
    </v-col>
    <v-col xxl="3" lg="3" sm="6" class="order-3 order-xxl-3">
      <DashboardNFTHistoryOfBids />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NFTPage",
});
</script>

<style lang="scss" scoped>
.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}
@media (min-width: 576px) {
  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
}
</style>
