<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Search/>
  </div>
</template>

<script>
import Search from './components/Search.vue'

export default {
  name: 'app',
  components: {
    Search
  }
}
</script>
