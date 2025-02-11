<template>
    <v-card
        class="group-lessons-card trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="v-card-header">
            <h5 class="mb-0">Group Lessons</h5>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <button
                        type="button"
                        v-bind="props"
                        class="position-relative dot-btn p-0 bg-transparent border-none"
                    >
                        <i class="ri-more-fill"></i>
                    </button>
                </template>
                <v-list class="menu-content">
                    <button type="button" class="bg-transparent border-none">
                        This Day
                    </button>
                    <button type="button" class="bg-transparent border-none">
                        This Week
                    </button>
                    <button type="button" class="bg-transparent border-none">
                        This Month
                    </button>
                    <button type="button" class="bg-transparent border-none">
                        This Year
                    </button>
                </v-list>
            </v-menu>
        </div>
        <div class="trezo-table-content">
            <div class="trezo-table">
                <v-table>
                    <tbody>
                        <tr v-for="item in items.slice(0, 6)" :key="item.id">
                            <td>
                                <div
                                    class="group-lesson d-flex align-items-center"
                                >
                                    <div
                                        class="users d-flex align-items-center"
                                    >
                                        <div
                                            class="rounded-circle"
                                            v-for="image in item.group.images"
                                            :key="image.id"
                                        >
                                            <v-img
                                                :src="image.image"
                                                class="rounded-circle"
                                                alt="user-image"
                                            />
                                        </div>
                                    </div>
                                    <div class="info">
                                        <span class="fw-medium d-block">
                                            {{ item.group.name }}
                                        </span>
                                        <span
                                            class="date text-body fw-medium d-block"
                                        >
                                            {{ item.group.date }}
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a
                                    href="#"
                                    class="link-btn d-inline-block rounded-circle position-relative"
                                >
                                    <i class="material-symbols-outlined">
                                        {{ item.link }}
                                    </i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
            <PaginationTwo items="4" />
        </div>
    </v-card>
</template>

<script>
import { defineComponent } from "vue";
import PaginationTwo from "../../Common/PaginationTwo.vue";

import user6 from "../../../../public/images/users/user6.jpg";
import user20 from "../../../../public/images/users/user20.jpg";
import user21 from "../../../../public/images/users/user21.jpg";
import user22 from "../../../../public/images/users/user22.jpg";
import user23 from "../../../../public/images/users/user23.jpg";
import user24 from "../../../../public/images/users/user24.jpg";
import user25 from "../../../../public/images/users/user25.jpg";
import user26 from "../../../../public/images/users/user26.jpg";
import user27 from "../../../../public/images/users/user27.jpg";
import user28 from "../../../../public/images/users/user28.jpg";
import user29 from "../../../../public/images/users/user29.jpg";
import user30 from "../../../../public/images/users/user30.jpg";

export default defineComponent({
    name: "GroupLessons",
    components: {
        PaginationTwo,
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    group: {
                        images: [
                            {
                                id: 1,
                                image: user20,
                            },
                            {
                                id: 2,
                                image: user21,
                            },
                            {
                                id: 3,
                                image: user6,
                            },
                        ],
                        name: "Digital Marketing",
                        date: "15 March, 2024",
                    },
                    link: "arrow_outward",
                },
                {
                    id: 2,
                    group: {
                        images: [
                            {
                                id: 1,
                                image: user22,
                            },
                            {
                                id: 2,
                                image: user23,
                            },
                            {
                                id: 3,
                                image: user24,
                            },
                        ],
                        name: "Web Development",
                        date: "10 March, 2024",
                    },
                    link: "arrow_outward",
                },
                {
                    id: 3,
                    group: {
                        images: [
                            {
                                id: 1,
                                image: user25,
                            },
                            {
                                id: 2,
                                image: user26,
                            },
                            {
                                id: 3,
                                image: user27,
                            },
                        ],
                        name: "UX/UI Design",
                        date: "05 March, 2024",
                    },
                    link: "arrow_outward",
                },
                {
                    id: 4,
                    group: {
                        images: [
                            {
                                id: 1,
                                image: user28,
                            },
                            {
                                id: 2,
                                image: user29,
                            },
                            {
                                id: 3,
                                image: user30,
                            },
                        ],
                        name: "Content Writer",
                        date: "02 March, 2024",
                    },
                    link: "arrow_outward",
                },
            ],
        };
    },
});
</script>

<style lang="scss" scoped>
.group-lessons-card {
    .trezo-table-content {
        .trezo-table {
            .v-table {
                table {
                    tbody {
                        tr {
                            td {
                                padding: 18px 0 !important;
                                &:first-child {
                                    padding-left: 0;
                                    border-left-width: 0 !important;
                                }
                                &:last-child {
                                    text-align: end;
                                    padding-right: 0;
                                    border-right-width: 0 !important;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
