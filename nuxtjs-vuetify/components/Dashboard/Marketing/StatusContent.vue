<template>
  <v-row>
    <v-col v-for="item in status" :key="item.id" lg="3" sm="6">
      <v-card
        class="status-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="d-flex">
          <div class="flex-grow-1 me-3">
            <span class="text-body d-block mb-1">{{ item.title }}</span>
            <h2 class="fs-32">{{ item.value }}</h2>
            <span
              :class="[
                'info-badge',
                { down: item.percentage.startsWith('-') },
                'd-inline-block',
              ]"
            >
              {{ item.percentage }}
            </span>
            <p class="fs-12">vs previous 30 days</p>
          </div>
          <div class="flex-shrink-0">
            <v-img :src="item.image" style="width: 60px" :alt="item.title" />
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/ads.gif";
import image2 from "~/assets/images/video-advertising.gif";
import image3 from "~/assets/images/call-to-action.gif";
import image4 from "~/assets/images/banner.gif";

export default defineComponent({
  name: "StatusContent",
  setup() {
    const status = [
      {
        id: 1,
        title: "Ad Spend",
        value: "$1,528",
        percentage: "+5.4%",
        image: image1,
      },
      {
        id: 2,
        title: "Cost Per Thousand",
        value: "$3.95",
        percentage: "-1.4%",
        image: image2,
      },
      {
        id: 3,
        title: "Cost Per Click",
        value: "$0.15",
        percentage: "-0.04%",
        image: image3,
      },
      {
        id: 4,
        title: "Click Through Rate",
        value: "$2.95",
        percentage: "+7%",
        image: image4,
      },
    ];

    return {
      status,
    };
  },
});
</script>

<style lang="scss" scoped>
.status-card {
  .info-badge {
    font-size: 12px;
    color: #37d80a;
    padding: 1px 8.3px;
    border-radius: 50rem;
    border: 1px solid #37d80a;
    background-color: #d6fbc7;
    &.down {
      border-color: #ff4023;
      color: #ff4023;
      background-color: #ffe1dd;
    }
  }
}
</style>
