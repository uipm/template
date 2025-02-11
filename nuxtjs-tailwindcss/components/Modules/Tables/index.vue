<template>
  <ModulesTablesDataTable />

  <div class="lg:grid lg:grid-cols-2 gap-[25px]" id="clickToSeeCode">
    <ModulesTablesTopSellingProducts />

    <ModulesTablesRecentOrders />
  </div>
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <ModulesTablesTopPerformers />
    </div>
    <div class="lg:col-span-2">
      <ModulesTablesRecentLeads />
    </div>
  </div>

  <ModulesTablesAllProjects />

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <ModulesTablesMyTasks />

    <ModulesTablesStudentsProgress />

    <ModulesTablesGroupLessons />
  </div>

  <ModulesTablesPerformanceOfAgents />

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-2">
      <ModulesTablesRecentCustomerRatings />
    </div>
    <div class="lg:col-span-3">
      <ModulesTablesToDoList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tables",
});
</script>
