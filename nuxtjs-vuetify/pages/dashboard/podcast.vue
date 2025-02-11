<template>
  <v-row class="mt-2">
    <v-col lg="8">
      <DashboardPodcastFeatured />
    </v-col>

    <v-col lg="4">
      <DashboardPodcastPopularHosts />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8">
      <DashboardPodcastRecentlyPlayed />
    </v-col>
    <v-col lg="4">
      <DashboardPodcastPlayer />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8">
      <DashboardPodcastMostPopular />
    </v-col>
    <v-col lg="4">
      <DashboardPodcastUpcomingEpisodes />

      <DashboardPodcastTodayEarningsChart />
    </v-col>
  </v-row>
  <v-row>
    <v-col xl="6" lg="5" md="5">
      <DashboardPodcastListenerAnalyticsChart />
    </v-col>
    <v-col xl="6" lg="7" md="7">
      <DashboardPodcastTopPodcasts />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";

export default defineComponent({
  name: "PodcastPage",
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white", "podcast-page");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white", "podcast-page");
    });
  },
});
</script>

<style lang="scss">
body {
  &.podcast-page {
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
