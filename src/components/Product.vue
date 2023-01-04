<template>
  <div class="flex flex-row justify-between p-5">
    <div class="flex border-2 rounded-[5px] items-center"><img src="/images/img.png" alt="image"></div>
    <div class="flex flex-col justify-around font-bold mx-5 w-[400px]">
      <div class="flex">
        {{ data.name }}
      </div>
      <div class="flex">
        <div>Amout:&nbsp;</div>
        <div>{{ data.amount }}</div>
      </div>
    </div>
    <div class="items-start text-gray-500 pt-3">
      $ {{ data.price * data.amount }}
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Product",
  props: ["data"],
  data() {
    return {}
  },
  mounted() {
    // console.log('data ', this.data)
  }
}
</script>

<style scoped>
img {
  width: 100px;
  height: auto;
}
</style>
