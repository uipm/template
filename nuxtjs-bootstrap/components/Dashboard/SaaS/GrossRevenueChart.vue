<template>
  <div class="card bg-white border-0 p-4 mb-4 rounded-10">
    <div
      class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-1"
    >
      <span class="d-block mb-1">Gross Revenue</span>
      <select
        class="form-select month-select form-control w-135 bg-border-color border-color"
        aria-label="Default select example"
      >
        <option selected>Monthly</option>
        <option value="1">Yearly</option>
      </select>
    </div>
    <div class="d-flex align-items-center mb-2">
      <h3 class="fs-32 fw-bold text-secondary mb-0">$1,528</h3>
      <span
        class="fw-medium fs-12 text-success bg-success bg-opacity-10 border border-success px-2 rounded-pill ms-2"
      >
        +5.4%
        <i class="ri-arrow-up-line"></i>
      </span>
    </div>
    <span class="fs-12 d-block mb-4">vs previous 30 days</span>

    <div style="margin: -24px -11px -15px -16px">
      <apexchart
        v-if="isClient"
        type="area"
        height="372"
        :options="grossRevenue"
        :series="revenue"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "GrossRevenueChart",
  setup() {
    const isClient = ref(false);
    const revenue = ref([
      {
        name: "October",
        data: [35, 50, 55, 60, 50, 60, 55, 60, 78, 40],
      },
      {
        name: "September",
        data: [70, 50, 40, 40, 62, 52, 80, 40, 60, 53],
      },
    ]);
    const grossRevenue = ref({
      chart: {
        type: "area",
        height: 372,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#757DFF", "#E9D5FF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: [3, 3, 0],
        dashArray: [0, 6, 0],
      },
      grid: {
        borderColor: "#ECF0FF",
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0,
        },
      },
      xaxis: {
        categories: [
          "Oct 01",
          "Oct 04",
          "Oct 08",
          "Oct 12",
          "Oct 16",
          "Oct 20",
          "Oct 24",
          "Oct 28",
          "Nov 02",
          "Nov 06",
        ],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
        },
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 100,
        min: 0,
        labels: {
          formatter: (val: number) => {
            return "$" + val / 1 + "K";
          },
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
        horizontalAlign: "left",
        offsetX: 10,
        offsetY: 5,
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
          radius: 2,
          shape: "diamond",
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val + "k";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      revenue,
      grossRevenue,
    };
  },
});
</script>
