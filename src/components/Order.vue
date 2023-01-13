<template>
  <div id="app">
    <Header />
    <Body />
  </div>
</template>

<script>

import Header from '@/components/Header'
import Body from '@/components/Body'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Order",
  components: {
    // HelloWorld,
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    // eslint-disable-next-line vue/no-reserved-component-names
    Body
  }
}
</script>

<style scoped>

</style>
