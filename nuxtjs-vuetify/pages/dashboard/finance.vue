<template>
  <v-row>
    <v-col lg="3" sm="6">
      <DashboardFinanceTotalIncome />
    </v-col>
    <v-col lg="3" sm="6">
      <DashboardFinanceTotalExpenses />
    </v-col>
    <v-col lg="3" sm="6">
      <DashboardFinanceAccountsReceivable />
    </v-col>
    <v-col lg="3" sm="6">
      <DashboardFinanceAccountPayable />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8">
      <DashboardFinanceStaticChart />
    </v-col>
    <v-col lg="4">
      <v-row>
        <v-col lg="12" sm="6">
          <DashboardFinanceCashEndOfTheMonthChart />
        </v-col>
        <v-col lg="12" sm="6">
          <DashboardFinanceWeeklyExpensesChart />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="4">
      <v-row>
        <v-col lg="12" sm="6">
          <DashboardFinanceIncomeSourceChart />
        </v-col>
        <v-col lg="12" sm="6">
          <DashboardFinanceNetProfitChart />
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="8">
      <DashboardFinanceTransactionHistory />
    </v-col>
  </v-row>
  <v-row>
    <v-col lg="8" md="7">
      <DashboardFinanceDebitCard />
    </v-col>
    <v-col lg="4" md="5">
      <DashboardFinanceExpenseBreakdownChart />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FinancePage",
});
</script>
