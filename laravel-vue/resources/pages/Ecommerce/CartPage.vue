<template>
    <PageTitle pageTitle="Cart" subTitle="eCommerce" />

    <Cart />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import Cart from "../../components/Pages/Ecommerce/Cart/index.vue";

export default defineComponent({
    name: "CartPage",
    components: {
        PageTitle,
        Cart,
    },
});
</script>
