<template>
  <div class="test-output">
    <iframe v-bind:src="pageToTest" frameborder="0"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'TestOutput',
    props: {
      pageToTest: String,
    }
  }
</script>

<style lang="scss" scoped>
.test-output {
  height: 100vh;
  width: 100%;
  iframe {
    height: 100%;
    width: 100%;
  }
}
  
</style>
