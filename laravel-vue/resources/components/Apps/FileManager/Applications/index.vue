<template>
    <v-row>
        <v-col
            v-for="item in items"
            :key="item.id"
            cols="12"
            md="4"
            sm="6"
            lg="3"
            xxl="3"
        >
            <v-card
                class="app-folder-card border-radius d-block bg-white border-0 shadow-none"
            >
                <div class="folder-card-content">
                    <div
                        class="d-flex align-items-center justify-space-between"
                    >
                        <v-checkbox color="primary"></v-checkbox>
                        <div class="action">
                            <v-menu>
                                <template v-slot:activator="{ props }">
                                    <button
                                        type="button"
                                        v-bind="props"
                                        class="dot-menu p-0 d-inline-block border-radius-0"
                                    >
                                        <i class="ri-more-fill"></i>
                                    </button>
                                </template>
                                <v-list class="card-header-menu menu-content">
                                    <button type="button">Edit</button>
                                    <button type="button">Delete</button>
                                </v-list>
                            </v-menu>
                        </div>
                    </div>
                    <div class="title d-flex align-items-center">
                        <div class="icon text-primary lh-1">
                            <v-img :src="item.icon" alt="item.title" />
                        </div>
                        <h6 class="mb-0">{{ item.title }}</h6>
                    </div>
                    <div
                        class="info d-flex align-items-center justify-space-between"
                    >
                        <span class="d-block text-black">
                            {{ item.files }} Files
                        </span>
                        <span class="d-block text-black">
                            {{ item.size }}
                        </span>
                    </div>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { defineComponent } from "vue";

import figma from "../../../../../public/images/icons/figma.svg";
import dribbble from "../../../../../public/images/icons/dribbble.svg";
import spotify from "../../../../../public/images/icons/spotify.svg";
import gitlab from "../../../../../public/images/icons/gitlab.svg";
import googleDrive from "../../../../../public/images/icons/google-drive.svg";
import trello from "../../../../../public/images/icons/trello.svg";
import slack from "../../../../../public/images/icons/slack.svg";
import pinterest from "../../../../../public/images/icons/pinterest.svg";
import linkedin from "../../../../../public/images/icons/linkedin.svg";
import facebook from "../../../../../public/images/icons/facebook.svg";

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Documents",
    setup() {
        const items = [
            {
                id: 1,
                title: "ET Template",
                icon: figma,
                files: 159,
                size: "4.5 GB",
            },
            {
                id: 2,
                title: "React Template",
                icon: dribbble,
                files: 522,
                size: "5.5 GB",
            },
            {
                id: 3,
                title: "Material UI",
                icon: spotify,
                files: 995,
                size: "7.5 GB",
            },
            {
                id: 4,
                title: "WP Themes",
                icon: gitlab,
                files: 39,
                size: "3.8 GB",
            },
            {
                id: 5,
                title: "Personal Photos",
                icon: googleDrive,
                files: 75,
                size: "2.2 GB",
            },
            {
                id: 6,
                title: "Mobile Apps",
                icon: trello,
                files: 357,
                size: "8.5 GB",
            },
            {
                id: 7,
                title: "Important Files",
                icon: slack,
                files: 159,
                size: "4.5 GB",
            },
            {
                id: 8,
                title: "Angular Template",
                icon: pinterest,
                files: 522,
                size: "5.5 GB",
            },
            {
                id: 9,
                title: "Projects",
                icon: facebook,
                files: 995,
                size: "7.5 GB",
            },
            {
                id: 10,
                title: "Documents",
                icon: linkedin,
                files: 39,
                size: "3.8 GB",
            },
        ];
        return {
            items,
        };
    },
});
</script>

<style lang="scss" scoped>
.app-folder-card {
    .folder-card-content {
        .v-checkbox.v-input {
            margin: -35px -10px -30px -10px;
        }
        .dot-menu {
            height: 21.59px;
            min-width: auto;
            margin-right: -2px;
            i {
                line-height: 21.59px;
                color: var(--bodyColor);
                font-size: 26px;
            }

            &:hover {
                color: var(--primaryColor);
            }
        }
        .title {
            margin-top: 35px;
        }
        .icon {
            margin-right: 12px;
        }
        .info {
            margin-top: 40px;

            span {
                font-size: 13px;
            }
        }
    }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .assets-folder-card {
        .folder-card-content {
            .title {
                margin-top: 22px;
            }
            .icon {
                i {
                    font-size: 40px;
                }
            }
            .info {
                margin-top: 20px;
            }
        }
    }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .assets-folder-card {
        .folder-card-content {
            .title {
                margin-top: 35px;
            }
            .icon {
                i {
                    font-size: 40px;
                }
            }
            .info {
                margin-top: 35px;
            }
        }
    }
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
