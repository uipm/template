<template>
    <PageTitle pageTitle="Inbox" subTitle="Apps" />
    <Inbox />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/common/PageTitle.vue";
import Inbox from "../../components/Apps/Email/Inbox/index.vue";

export default defineComponent({
    name: "InboxPage",
    components: {
        PageTitle,
        Inbox,
    },
});
</script>
