<template>
  <div id="app">
    <span id="nav">
      <router-link to="/order"></router-link>
      <router-link to="/success"></router-link>
      <router-link to="/invoice"></router-link>
      <router-link to="/payment"></router-link>
    </span>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
