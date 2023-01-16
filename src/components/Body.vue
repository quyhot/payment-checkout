<template>
  <div class="flex flex-row items-stretch">
    <div class=" flex-1">
      <left-body @changeShippingMethod="changeShippingMethod" :products="products" :error="error" :transportId="transportId"/>
    </div>
    <div class="flex-1">
      <right-body @checkout="checkout" :total="total"/>
    </div>
  </div>
</template>

<script>
import LeftBody from "@/components/LeftBody";
import RightBody from "@/components/RightBody";
import {createOrder, getProducts, payment, getOrderById} from "@/helper";

export default {
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Body',
  components: {RightBody, LeftBody},
  props: ['orderId', 'invoiceId'],
  data() {
    return {
      order: {},
      total: null,
      products: [],
      error: "",
      isZin: true,
      transportId: ''
    }
  },
  async mounted() {
    if (this.orderId) {
      const {data: order} = await getOrderById(this.orderId)
      this.products = order.products.map(product => ({...product.product, amount: product.amount}))
      this.total = this.products.reduce((accum, curr) => accum + curr.amount * curr.price, 0)
      this.transportId = order.transport
      this.order = order
    } else {
      const {data: {data: products}} = await getProducts()
      this.products = products
      this.total = products.reduce((accum, curr) => accum + curr.amount * curr.price, 0)
    }
  },
  methods: {
    changeShippingMethod(data) {
      // console.log("transport", data)
      if (data) {
        this.error = ""
        this.isZin = false
        this.order = {...this.order, transport: data.id}
      } else {
        this.error = "Please choose..."
      }
    },
    async checkout(data) {
      if (this.error || this.isZin) {
        this.error = 'Please choose...'
        alert("Please choose shipping method")
      } else {
        let invoiceId
        if (!this.orderId) {
          this.order = {...data, ...this.order, total: this.total, products: this.products.map(product => ({product: product._id, amount: product.amount}))}
          const {statusCode, data: invoice} = await createOrder(this.order)
          if (statusCode !== 200) {
            alert('Error')
            return
          }
          invoiceId = invoice._id
        } else {
          invoiceId = this.invoiceId
        }
        const pay = await payment(invoiceId)
        if (pay.statusCode !== 200) {
          alert('Error')
        }
        window.location.href = pay.data.url
      }
    }
  }
}
</script>

<style scoped>

</style>
