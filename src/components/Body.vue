<template>
  <div class="flex flex-row items-stretch">
    <div class=" flex-1">
      <left-body @changeShippingMethod="changeShippingMethod"/>
    </div>
    <div class="flex-1">
      <right-body @checkout="checkout"/>
    </div>
  </div>
</template>

<script>
import LeftBody from "@/components/LeftBody";
import RightBody from "@/components/RightBody";

export default {
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Body',
  components: {RightBody, LeftBody},
  data() {
    return {
      order: {},
      form: {},

    }
  },
  methods: {
    submitPayment(data) {
      console.log('data',data)
      this.form = {...data}
    },
    changeShippingMethod(data) {
      this.order = {...data}
    },
    checkout(data) {
      console.log('order', this.order)
      console.log('hhhhhhh', data)

    }
  }
}
</script>

<style scoped>

</style>
