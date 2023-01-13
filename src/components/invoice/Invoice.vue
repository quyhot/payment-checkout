<template>
  <div id="app">
    <Header/>
    <invoice-list :invoices="invoices"/>
  </div>
</template>

<script>
import InvoiceList from "@/components/invoice/InvoiceList";
import Header from "@/components/Header";
import {getInvoices} from "@/helper";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Invoice",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    InvoiceList,
    // eslint-disable-next-line vue/no-reserved-component-names,vue/no-unused-components
    Header
  },
  data() {
    return {
      invoices: null
    }
  },
  async mounted() {
    const {data} = await getInvoices({})
    // console.log('invoices ', invoices)
    this.invoices = data?.data
  }
}
</script>

<style scoped>

</style>
