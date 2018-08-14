<template>
  <div class="test-output">
    <iframe src="https://www.cosmos.co.uk/" frameborder="0"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'TestOutput'
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
