<template>
  <div class="mx-20 px-10 pt-4 flex flex-col">
    <div class="flex flex-col">
      <h1 class="font-bold text-2xl pb-2">Summary Order</h1>
      <div class="text-xl text-gray-500">
        Check your item and select your shipping for better experience order item
      </div>
    </div>
    <div class="py-5 flex items-center flex-col">
      <div class="border-2 flex items-center flex-col rounded-2xl w-full">
        <div v-for="(product) in products" :key=product._id>
          <Product :data=product />
        </div>
      </div>
    </div>
    <div>
      <h2 class="font-bold text-xl pb-2">Available Shipping Method</h2>
      <div class="flex items-center flex-col rounded-2xl w-full border-2">
        <div>{{ checked }}</div>
        <div v-for="transport in transports" :key="transport._id">
          <ShippingMethod v-model="checked" :data=transport @changeShippingMethod2="changeShippingMethod2" :error="error" :transportId="transportId"/>
        </div>
      </div>
      <div class="text-red-400">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";
import ShippingMethod from "@/components/ShippingMethod";
import {getTransports} from "@/helper";

export default {
  name: "LeftBody",
  props: ["changeShippingMethod","products", "error", "transportId"],
  components: {Product, ShippingMethod},
  data() {
    return {
      transports: [],
      checked: ''
    }
  },
  async mounted() {
    const {data: {data: transports}} = await getTransports()
    this.transports = transports
  },
  methods: {
    changeShippingMethod2(data) {
      this.$emit("changeShippingMethod", data)
    }
  }
}
</script>

<style scoped>

</style>
