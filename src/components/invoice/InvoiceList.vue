<template>
  <div class="pt-2">
    <table class="table-auto border-collapse border w-3/4 m-auto">
      <thead>
      <tr class="">
        <th class="border-2 p-2 w-1/5">Order Id</th>
        <th class="border-2 p-2 w-1/5">Email</th>
        <th class="border-2 p-2 w-1/5">Phone</th>
        <th class="border-2 p-2 w-1/5">Name</th>
        <th class="border-2 p-2 w-1/15">Amount</th>
        <th class="border-2 p-2 w-1/15" >State</th>
        <th class="border-2 p-2 w-1/15"></th>
      </tr>
      </thead>
      <tbody class="">
      <tr v-for="invoice in invoices" :key="invoice._id">
        <td class="border-2 p-2">{{ invoice.orderId._id }}</td>
        <td class="border-2 p-2">{{ invoice.orderId.email }}</td>
        <td class="border-2 p-2">{{ invoice.orderId.phone }}</td>
        <td class="border-2 p-2">{{ invoice.orderId.name }}</td>
        <td class="border-2 p-2">{{ invoice.amount }}</td>
        <td class="border-2 p-2" :class="[colorConfig[invoice.state]]">{{ stateConfig[invoice.state] }}</td>
        <td class="border-2 p-2"></td>
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
    return {
      stateConfig,
      colorConfig
    }
  },
  mounted() {
    console.log('invoices ', this.invoices)
  }
}
</script>

<style scoped>

</style>
