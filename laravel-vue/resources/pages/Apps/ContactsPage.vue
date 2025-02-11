<template>
    <PageTitle pageTitle="Contacts List" subTitle="Apps" />

    <ContactsList />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import ContactsList from "../../components/Apps/Contacts/ContactsList.vue";

export default defineComponent({
    name: "ContactsPage",
    components: {
        PageTitle,
        ContactsList,
    },
});
</script>
