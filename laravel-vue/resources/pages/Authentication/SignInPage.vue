<template>
    <SignIn />
</template>

<script>
import { defineComponent } from "vue";
import SignIn from "../../components/Modules/Authentication/SignIn.vue";

export default defineComponent({
    name: "SignInPage",
    components: {
        SignIn,
    },
});
</script>
