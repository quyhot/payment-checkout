<template>
  <div class="flex flex-row justify-between p-5">
    <div class="flex border-2 rounded-[5px] items-center"><img src="/images/shipping.png" alt="image"></div>
    <div class="flex flex-col justify-around font-bold mx-5 w-[400px]">
      <div class="flex">
        {{ data.name }}
      </div>
      <div class="flex text-gray-500">
        {{ data.deliveryTime || 'a day' }}
      </div>
    </div>
    <div class="flex items-center text-gray-500">
      <label for="draft" class="peer-checked/draft:text-sky-500">{{ data.price }} $</label>
      <div v-if="transportId === data._id">
        <input type="radio" id="draft" :value="data._id" class="peer/draft ml-2" name="status" @change="changeInput" checked />
      </div>
      <div v-else>
        <input type="radio" id="draft" :value="data._id" class="peer/draft ml-2" name="status" @change="changeInput"/>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "ShippingMethod",
  props: ["data", "error","transportId"],
  methods: {
    changeInput(e) {
      this.$emit("changeShippingMethod2", {id: e.target.value})
    }
  }
}
</script>

<style scoped>
img {
  width: 100px;
  height: auto;
}
</style>
