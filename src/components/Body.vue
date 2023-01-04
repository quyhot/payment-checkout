<template>
  <div class="flex flex-row items-stretch">
    <div class=" flex-1">
      <left-body @changeShippingMethod="changeShippingMethod" :products="products" :error="error"/>
    </div>
    <div class="flex-1">
      <right-body @checkout="checkout" :total="total"/>
    </div>
  </div>
</template>

<script>
import LeftBody from "@/components/LeftBody";
import RightBody from "@/components/RightBody";
import {createOrder, getProducts, payment} from "@/helper";

export default {
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Body',
  components: {RightBody, LeftBody},
  data() {
    return {
      order: {},
      total: null,
      products: [],
      error: "",
      isZin: true
    }
  },
  async mounted() {
    const {data: {data: products}} = await getProducts()
    this.products = products
    this.total = products.reduce((accum, curr) => accum + curr.amount * curr.price, 0)
    // console.log('total ', this.total)
    // console.log('products ', products)
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
        alert("NAKFJ")
      } else {
        this.order = {...data, ...this.order, total: this.total, products: this.products.map(product => product._id)}
        // console.log("products", this.products)
        const {statusCode, data: o} = await createOrder(this.order)
        console.log('order', o)
        if (statusCode !== 200) {
          alert('Error')
        }
        const pay = await payment(o._id)
        console.log('pay', pay)
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
