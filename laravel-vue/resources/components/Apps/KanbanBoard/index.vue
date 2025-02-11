<template>
    <v-row>
        <v-col cols="12" lg="4">
            <v-card
                class="kanban-board-card trezo-card border-radius d-block bg-white border-0 shadow-none"
            >
                <div class="v-card-header">
                    <h5 class="mb-0">To Do</h5>
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
                            <button
                                type="button"
                                class="bg-transparent border-none"
                            >
                                Select All
                            </button>
                            <button
                                type="button"
                                class="bg-transparent border-none"
                            >
                                Edit All
                            </button>
                            <button
                                type="button"
                                class="bg-transparent border-none"
                            >
                                Delete All
                            </button>
                        </v-list>
                    </v-menu>
                </div>
                <div class="board-card-content">
                    <div
                        v-for="item in toDo"
                        :key="item.id"
                        class="kanban-board-task"
                        :class="item.bgClass"
                    >
                        <div
                            class="title d-flex align-items-center justify-space-between"
                        >
                            <span class="d-block text-black fw-semibold">
                                {{ item.title }}
                            </span>
                            <button type="button">
                                <i class="material-symbols-outlined"> edit </i>
                            </button>
                        </div>
                        <p>
                            {{ item.description }}
                        </p>
                        <div
                            class="info d-flex align-items-center justify-space-between"
                        >
                            <div class="users d-flex align-items-center">
                                <v-img
                                    v-for="user in item.users"
                                    :key="user.id"
                                    :src="user.image"
                                    class="rounded-circle"
                                    alt="user-image"
                                />
                            </div>
                            <span class="days-left d-block text-secondary">
                                5 days left
                            </span>
                        </div>
                    </div>
                </div>
                <AddNewCard />
            </v-card>
        </v-col>
        <v-col cols="12" lg="4">
            <v-card
                class="kanban-board-card trezo-card border-radius d-block bg-white border-0 shadow-none"
            >
                <div class="v-card-header">
                    <h5 class="mb-0">Doing</h5>
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
                            <button
                                type="button"
                                class="bg-transparent border-none"
                            >
                                Select All
                            </button>
                            <button
                                type="button"
                                class="bg-transparent border-none"
                            >
                                Edit All
                            </button>
                            <button
                                type="button"
                                class="bg-transparent border-none"
                            >
                                Delete All
                            </button>
                        </v-list>
                    </v-menu>
                </div>
                <div class="board-card-content">
                    <div
                        v-for="item in doing"
                        :key="item.id"
                        class="kanban-board-task"
                        :class="item.bgClass"
                    >
                        <div
                            class="title d-flex align-items-center justify-space-between"
                        >
                            <span class="d-block text-black fw-semibold">
                                {{ item.title }}
                            </span>
                            <button type="button">
                                <i class="material-symbols-outlined"> edit </i>
                            </button>
                        </div>
                        <p>
                            {{ item.description }}
                        </p>
                        <div
                            class="info d-flex align-items-center justify-space-between"
                        >
                            <div class="users d-flex align-items-center">
                                <v-img
                                    v-for="user in item.users"
                                    :key="user.id"
                                    :src="user.image"
                                    class="rounded-circle"
                                    alt="user-image"
                                />
                            </div>
                            <span class="days-left d-block text-danger">
                                5 days left
                            </span>
                        </div>
                    </div>
                </div>
                <AddNewCard />
            </v-card>
        </v-col>
        <v-col cols="12" lg="4">
            <v-card
                class="kanban-board-card trezo-card border-radius d-block bg-white border-0 shadow-none"
            >
                <div class="v-card-header">
                    <h5 class="mb-0">Done</h5>
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
                            <button
                                type="button"
                                class="bg-transparent border-none"
                            >
                                Select All
                            </button>
                            <button
                                type="button"
                                class="bg-transparent border-none"
                            >
                                Edit All
                            </button>
                            <button
                                type="button"
                                class="bg-transparent border-none"
                            >
                                Delete All
                            </button>
                        </v-list>
                    </v-menu>
                </div>
                <div class="board-card-content">
                    <div
                        v-for="item in done"
                        :key="item.id"
                        class="kanban-board-task"
                        :class="item.bgClass"
                    >
                        <div
                            class="title d-flex align-items-center justify-space-between"
                        >
                            <span class="d-block text-black fw-semibold">
                                {{ item.title }}
                            </span>
                            <button type="button">
                                <i class="material-symbols-outlined"> edit </i>
                            </button>
                        </div>
                        <p>
                            {{ item.description }}
                        </p>
                        <div
                            class="info d-flex align-items-center justify-space-between"
                        >
                            <div class="users d-flex align-items-center">
                                <v-img
                                    v-for="user in item.users"
                                    :key="user.id"
                                    :src="user.image"
                                    class="rounded-circle"
                                    alt="user-image"
                                />
                            </div>
                            <span class="days-left d-block text-secondary">
                                5 days left
                            </span>
                        </div>
                    </div>
                </div>
                <AddNewCard />
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { defineComponent } from "vue";
import AddNewCard from "./AddNewCard.vue";

import user6 from "../../../../public/images/users/user6.jpg";
import user7 from "../../../../public/images/users/user7.jpg";
import user8 from "../../../../public/images/users/user8.jpg";
import user9 from "../../../../public/images/users/user9.jpg";
import user10 from "../../../../public/images/users/user10.jpg";
import user11 from "../../../../public/images/users/user11.jpg";
import user12 from "../../../../public/images/users/user12.jpg";
import user13 from "../../../../public/images/users/user13.jpg";
import user14 from "../../../../public/images/users/user14.jpg";
import user15 from "../../../../public/images/users/user15.jpg";
import user16 from "../../../../public/images/users/user16.jpg";
import user17 from "../../../../public/images/users/user17.jpg";
import user18 from "../../../../public/images/users/user18.jpg";
import user19 from "../../../../public/images/users/user19.jpg";
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
    name: "KanbanBoard",
    components: {
        AddNewCard,
    },
    data() {
        return {
            toDo: [
                {
                    id: 1,
                    title: `Project Requirements`,
                    description: `A brief description of the project, its objectives, and its importance to the organization.`,
                    daysLeft: `5 days left`,
                    bgClass: `bg-purple-100`,
                    users: [
                        {
                            id: 1,
                            image: user6,
                        },
                        {
                            id: 2,
                            image: user7,
                        },
                        {
                            id: 3,
                            image: user8,
                        },
                    ],
                },
                {
                    id: 2,
                    title: `WordPress Theme`,
                    description: `A brief description of the project, its objectives, and its importance to the organization.`,
                    daysLeft: `7 days left`,
                    bgClass: `bg-secondary-100`,
                    users: [
                        {
                            id: 1,
                            image: user9,
                        },
                        {
                            id: 2,
                            image: user10,
                        },
                    ],
                },
                {
                    id: 3,
                    title: `UX/UI Design`,
                    description: `A brief description of the project, its objectives, and its importance to the organization.`,
                    daysLeft: `10 days left`,
                    bgClass: `bg-success-100`,
                    users: [
                        {
                            id: 1,
                            image: user11,
                        },
                        {
                            id: 2,
                            image: user12,
                        },
                        {
                            id: 3,
                            image: user13,
                        },
                    ],
                },
                {
                    id: 4,
                    title: `Project Analysis`,
                    description: `A brief description of the project, its objectives, and its importance to the organization.`,
                    daysLeft: `14 days left`,
                    bgClass: `bg-orange-100`,
                    users: [
                        {
                            id: 1,
                            image: user14,
                        },
                        {
                            id: 2,
                            image: user15,
                        },
                    ],
                },
                {
                    id: 5,
                    title: `Competitor Research `,
                    description: `A brief description of the project, its objectives, and its importance to the organization.`,
                    daysLeft: `15 days left`,
                    bgClass: `bg-primary-100`,
                    users: [
                        {
                            id: 1,
                            image: user16,
                        },
                        {
                            id: 2,
                            image: user17,
                        },
                    ],
                },
            ],
            doing: [
                {
                    id: 1,
                    title: `React Template`,
                    description: `A brief description of the project, its objectives, and its importance to the organization.`,
                    daysLeft: `3 days left`,
                    bgClass: `bg-orange-100`,
                    users: [
                        {
                            id: 1,
                            image: user18,
                        },
                        {
                            id: 2,
                            image: user19,
                        },
                    ],
                },
                {
                    id: 2,
                    title: `Laravel Project`,
                    description: `A brief description of the project, its objectives, and its importance to the organization.`,
                    daysLeft: `5 days left`,
                    bgClass: `bg-purple-100`,
                    users: [
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
                            image: user22,
                        },
                    ],
                },
                {
                    id: 3,
                    title: `Project Requirements`,
                    description: `A brief description of the project, its objectives, and its importance to the organization.`,
                    daysLeft: `7 days left`,
                    bgClass: `bg-danger-100`,
                    users: [
                        {
                            id: 1,
                            image: user23,
                        },
                    ],
                },
                {
                    id: 4,
                    title: `UX/UI Design`,
                    description: `A brief description of the project, its objectives, and its importance to the organization.`,
                    daysLeft: `9 days left`,
                    bgClass: `bg-success-100`,
                    users: [
                        {
                            id: 1,
                            image: user24,
                        },
                        {
                            id: 2,
                            image: user25,
                        },
                    ],
                },
            ],
            done: [
                {
                    id: 1,
                    title: `Admin Template`,
                    description: `A brief description of the project, its objectives, and its importance to the organization.`,
                    daysLeft: `3 days left`,
                    bgClass: `bg-primary-100`,
                    users: [
                        {
                            id: 1,
                            image: user26,
                        },
                        {
                            id: 2,
                            image: user27,
                        },
                        {
                            id: 3,
                            image: user28,
                        },
                    ],
                },
                {
                    id: 2,
                    title: `eCommerce Template`,
                    description: `A brief description of the project, its objectives, and its importance to the organization.`,
                    daysLeft: `7 days left`,
                    bgClass: `bg-purple-100`,
                    users: [
                        {
                            id: 1,
                            image: user29,
                        },
                        {
                            id: 2,
                            image: user30,
                        },
                    ],
                },
                {
                    id: 3,
                    title: `Shopify Theme`,
                    description: `A brief description of the project, its objectives, and its importance to the organization.`,
                    daysLeft: `10 days left`,
                    bgClass: `bg-success-100`,
                    users: [
                        {
                            id: 1,
                            image: user11,
                        },
                        {
                            id: 2,
                            image: user12,
                        },
                        {
                            id: 3,
                            image: user13,
                        },
                    ],
                },
            ],
        };
    },
});
</script>

<style lang="scss" scoped>
.kanban-board-card {
    .v-card-header {
        margin-bottom: 22px;
    }
    .kanban-board-task {
        border: 0;
        overflow: hidden;
        border-radius: 5px;
        margin-bottom: 25px;
        padding: 25px !important;

        .title {
            margin-bottom: 15px;
            line-height: 0;
        }
        .info {
            margin-top: 20px;

            .users {
                .v-img {
                    width: 34px;
                    height: 34px;
                    margin-right: -10px;
                    border: 2px solid var(--whiteColor);

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .kanban-board-card {
        .v-card-header {
            margin-bottom: 17px;
        }
    }
    .kanban-board-task {
        margin-bottom: 17px;
        padding: 17px !important;

        .title {
            margin-bottom: 12px;
        }
        .info {
            margin-top: 15px;

            .users {
                .v-img {
                    width: 32px;
                    height: 32px;
                }
            }
        }
    }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
    .kanban-board-card {
        .v-card-header {
            margin-bottom: 20px;
        }
        .kanban-board-task {
            margin-bottom: 20px;
            padding: 20px !important;
        }
    }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
