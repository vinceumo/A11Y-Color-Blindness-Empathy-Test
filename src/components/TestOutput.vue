<template>
  <div class="test-output">
    <iframe v-bind:src="pageToTest" frameborder="0" onload="console.log('Load');"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'TestOutput',
    props: {
      pageToTest: String,
    },
  }
</script>

<style lang="scss" scoped>
.test-output {
  height: calc(100vh - 2rem);
  width: calc(100% - 2rem);
  padding: 1rem;

  iframe {
    height: 100%;
    width: 100%;
    margin-top: -1.5rem;
  }
}
</style>
