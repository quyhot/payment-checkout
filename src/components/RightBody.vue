<template>
  <div class="mx-20 px-10 pt-4 flex flex-col ">
    <div class="flex flex-col w-3/4">
      <h1 class="flex text-2xl font-bold pb-2">Payment Details</h1>
      <div class=" text-gray-500 text-xl">Complete your purchase item by providing your payment details order</div>
    </div>
    <form action="" class="w-3/4" @submit.prevent="checkout">
      <label class="block mt-5">
        <span
            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 my-5">Email</span>
        <input type="email" name="email"
               v-model="form.email"
               class="h-[50px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
               placeholder="you@example.com"/>
      </label>
      <label class="block mt-5">
        <span
            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 my-5">Phone</span>
        <input type="tel" name="phone"
               v-model="form.phone"
               class="h-[50px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
               placeholder="0123456789"/>
      </label>
      <label class="block mt-5">
        <span
            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 my-5">Name</span>
        <input type="text" name="name"
               v-model="form.name"
               class="h-[50px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
               placeholder="quyhot"/>
      </label>
      <div class="flex flex-col my-5">
        <div class="flex flex-row justify-between my-2 text-xl">
          <div>Total</div>
          <div>$ {{total}}</div>
        </div>
        <!--        <div class="flex flex-row justify-between my-2 text-xl">-->
        <!--          <div>VAT</div>-->
        <!--          <div>$ 2.89</div>-->
        <!--        </div>-->
        <!--        <div class="flex flex-row justify-between my-2 font-bold text-xl">-->
        <!--          <div>Total</div>-->
        <!--          <div>$ 399.89</div>-->
        <!--        </div>-->
      </div>
      <button class="bg-black w-full text-white p-5 rounded-2xl text-2xl cursor-pointer hover:bg-gray-700"
              type="submit">Payment
      </button>

    </form>
  </div>
</template>

<script>
export default {
  props: ["total"],
  data() {
    return {
      name: "RightBody",
      form: {
        email: "",
        phone: "",
        name: ""
      }
    }
  },
  methods: {
    checkout() {
      this.$emit("checkout", this.form)
    }
  }
}
</script>

<style scoped>

</style>
