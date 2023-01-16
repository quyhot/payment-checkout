<template>
  <div id="app">
    <Header/>
    <Body :orderId="orderId" :invoiceId="invoiceId"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Body from "@/components/Body";
import {getInvoiceById} from "@/helper";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "payment",
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    // eslint-disable-next-line vue/no-reserved-component-names
    Body
  },
  data() {
    return {
      invoiceId: '',
      orderId: ''
    }
  },
  async mounted() {
    this.invoiceId = this.$route.params.id
    const {data} = await getInvoiceById(this.invoiceId)
    this.orderId = data.orderId
  }
}
</script>

<style scoped>

</style>
