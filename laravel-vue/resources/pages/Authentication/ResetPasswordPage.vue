<template>
    <ResetPassword />
</template>

<script>
import { defineComponent } from "vue";
import ResetPassword from "../../components/Modules/Authentication/ResetPassword.vue";

export default defineComponent({
    name: "ResetPasswordPage",
    components: {
        ResetPassword,
    },
});
</script>
