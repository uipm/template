<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Latest Transactions</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 bg-gray-100 dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Monthly
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"
              ></i>
            </span>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Weekly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Monthly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Yearly
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                ID
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                Client
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                Amount
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                Subscription Plan
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                Payment Method
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  #001
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user58.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      Johhna Loren
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      loren123@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  $6240
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  Pro
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div
                  class="flex items-center gap-[8px] text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  <img
                    src="@/assets/images/payment-method/paypal.svg"
                    alt="paypal"
                  />
                  Paypal
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="inline-block font-medium text-xs px-[9px] text-success-700 border border-success-300 bg-success-100 text-sm rounded-[100px]"
                >
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  #002
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user53.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      Skyler White
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      skyqueen@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  $5135
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  Enterprise
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div
                  class="flex items-center gap-[8px] text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  <img
                    src="@/assets/images/payment-method/wise.svg"
                    alt="wise"
                  />
                  Wise
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="inline-block font-medium text-xs px-[9px] text-primary-700 border border-primary-300 bg-primary-100 text-sm rounded-[100px]"
                >
                  Pending
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  #003
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user55.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      Jonathon Watson
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      jona2134@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  $4321
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  Startup
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div
                  class="flex items-center gap-[8px] text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  <img
                    src="@/assets/images/payment-method/bank.svg"
                    alt="bank"
                  />
                  Bank
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="inline-block font-medium text-xs px-[9px] text-orange-700 border border-orange-300 bg-orange-100 text-sm rounded-[100px]"
                >
                  Failed
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  #004
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user54.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      Walter White
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      walterwhite@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  $3124
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  Pro
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div
                  class="flex items-center gap-[8px] text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  <img
                    src="@/assets/images/payment-method/skrill.svg"
                    alt="skrill"
                  />
                  Skrill
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="inline-block font-medium text-xs px-[9px] text-success-700 border border-success-300 bg-success-100 text-sm rounded-[100px]"
                >
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  #005
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user40.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      David Carlen
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      davidcarlen@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  $2137
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  Basic
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div
                  class="flex items-center gap-[8px] text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  <img
                    src="@/assets/images/payment-method/paypal.svg"
                    alt="paypal"
                  />
                  Paypal
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="inline-block font-medium text-xs px-[9px] text-primary-700 border border-primary-300 bg-primary-100 text-sm rounded-[100px]"
                >
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination items="5" total="36" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "LatestTransaction",
  components: {
    Pagination,
  },
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    return {
      isActive,
      toggleActive,
    };
  },
});
</script>
