<template>
  <div class="h-screen flex justify-center items-center bg-gray-100">
    <div class="flex flex-col border-2 w-[400px] items-center bg-white py-[50px] rounded-xl drop-shadow-xl">
      <div v-if="invoice.state === 1">
        <img class="w-[100px] mb-10" src="../assets/waiting.png" >
      </div>
      <div v-else-if="invoice.state === 2">
        <img class="w-[100px] mb-10" src="../assets/wall-clock.png" >
      </div>
      <div v-else-if="invoice.state === 3">
        <img class="w-[100px] mb-10" src="../assets/Flat_tick_icon.svg.png" >
      </div>
      <div v-else-if="invoice.state === 4">
        <img class="w-[100px] mb-10" src="../assets/multiply.png" >
      </div>
      <div class='text-2xl font-bold' :class="[color]">{{ msg }}</div>
    </div>
  </div>
</template>

<script>
import {getInvoiceById} from "@/helper";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Success",
  data() {
    return {
      orderId: '',
      invoice: {},
      msg: '',
      color: '',
      image: null
    }
  },
  async mounted() {
    const stateConfig = {
      1: 'Giao dịch chờ thanh toán',
      2: 'Đang thanh toán',
      3: 'Giao dịch thành công',
      4: 'Giao dịch thất bại'
    }
    const colorConfig = {
      1: 'text-blue-500',
      2: 'text-yellow-500',
      3: 'text-green-500',
      4: 'text-red-500'
    }
    const imageConfig = {
      1: 'waiting.png',
      2: 'wall-clock.png',
      3: 'Flat_tick_icon.svg.png',
      4: 'multiply.png'
    }
    this.orderId = this.$route.params.id
    console.log('query', this.$route.query)
    console.log('orderId', this.orderId)
    const {data} = await getInvoiceById(this.orderId)
    this.invoice = data
    if (data) {
      this.msg = stateConfig[data.state]
      this.color = colorConfig[data.state]
      this.image = `@/assets/${imageConfig[data.state]}`
    }
    console.log('msg', this.msg)
  }
}
</script>

<style scoped>

</style>
