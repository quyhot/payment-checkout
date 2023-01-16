<template>
  <div class="pt-2">
    <table class="table-auto border-collapse border w-[70%] m-auto">
      <thead>
      <tr class="">
        <th class="border-2 p-2 w-[5%]">STT</th>
        <th class="border-2 p-2 w-[20%]">Email</th>
        <th class="border-2 p-2 w-[15%]">Phone</th>
        <th class="border-2 p-2 w-[15%]">Name</th>
        <th class="border-2 p-2 w-[10%]">Amount</th>
        <th class="border-2 p-2 w-[20%]" >State</th>
        <th class="border-2 p-2 w-[5%]"></th>
      </tr>
      </thead>
      <tbody class="">
      <tr v-for="(invoice, index) in invoices" :key="invoice._id">
        <td class="border-2 p-2 text-center">{{ index + 1 }}</td>
        <td class="border-2 p-2">{{ invoice.orderId.email }}</td>
        <td class="border-2 p-2">{{ invoice.orderId.phone }}</td>
        <td class="border-2 p-2">{{ invoice.orderId.name }}</td>
        <td class="border-2 p-2">{{ invoice.amount }}</td>
        <td class="border-2 p-2" :class="[colorConfig[invoice.state]]">{{ stateConfig[invoice.state] }}</td>
        <td class="border-2 text-center">
          <div v-if="invoice.state === this.stepConfig.WAIT_FOR_PAY">
            <button class="rounded-xl p-2 bg-blue-400" @click="payment(invoice._id)">pay</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "InvoiceRecord",
  props: ['invoices'],
  data() {
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
    const stepConfig = {
      WAIT_FOR_PAY: 1,
      PENDING: 2,
      SUCCESS: 3,
      CANCEL: 4
    }
    return {
      stateConfig,
      colorConfig,
      stepConfig
    }
  },
  mounted() {
    console.log('invoices ', this.invoices)
  },
  methods: {
    payment(id) {
      console.log('id ', id)
      this.$router.push({
        name: 'payment',
        params: {
          id
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
