<template>
  <div id="app">
    <Header/>
    <invoice-list :invoices="invoices" :pagination="pagination" @getInvoice="clickCallback"/>
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
      invoices: null,
      pagination: {}
    }
  },
  async mounted() {
    const {data} = await getInvoices({perPage: 5})
    this.invoices = data?.data
    this.pagination.page = data?.page
    this.pagination.total = data?.total
    this.pagination.perPage = data?.perPage
    this.pagination.pageTotal = Math.ceil(this.pagination.total / this.pagination.perPage)
  },
  methods: {
    async clickCallback(pageNum) {
      const {data} = await getInvoices({perPage: 5, page: pageNum})
      this.invoices = data?.data
    }
  }
}
</script>

<style scoped>

</style>
