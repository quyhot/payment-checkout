<template>
  <div class="flex flex-row justify-between items-center p-4 border-b-2 w-full min-w-fit px-20">
    <div class="flex items-center justify-center ">
      <div class=" text-2xl flex font-bold p-2">Quyhot</div>
      <div class="ml-5 border-l-2 text-xl flex text-gray-500 pl-5 py-2 font-bold">Order Overview</div>
    </div>
    <div class="flex flex-end py-2">
      <div class="flex items-center justify-center ">
        <div class="font-bold flex flex-row">
          <div class="p-1 rounded-full w-fit flex items-center aspect-square mr-2 bg-green-300">
            <font-awesome-icon icon="fa-solid fa-check" class="text-green-800"/>
          </div>
          Information
        </div>
        <div class="flex border-t-2 border-dashed w-[50px] mx-5 border-gray-500"></div>
        <div class="font-bold flex flex-row">
          <div class="p-1 bg-gray-400 rounded-full mr-2 text-[16px] flex items-center justify-center w-[24px] h-[24px]">
            2
          </div>
          Payment Details
        </div>
        <div class="flex border-t-2 border-dashed w-[50px] mx-5 border-gray-500">
        </div>
        <div class="font-bold flex-row flex text-gray-500">
          <div class="p-1 bg-gray-400 rounded-full mr-2 text-[16px] flex items-center justify-center w-[24px] h-[24px]">
            3
          </div>
          Complete Order
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Header',
  components: {},
}
</script>

<style scoped>

.dotted-view {
  border: none;
  border-top: 1px dotted #f00;
  color: #fff;
  background-color: #fff;
  height: 1px;
  width: 50%;
}

</style>
