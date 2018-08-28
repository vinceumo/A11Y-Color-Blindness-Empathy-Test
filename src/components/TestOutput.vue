<template>
  <div class="test-output">
    <iframe v-if="outputToTest.sourceInput == 'url'" v-bind:src="outputToTest.url" frameborder="0" onload="console.log('Load');"></iframe>
    <img v-if="outputToTest.sourceInput == 'img'" v-bind:src="outputToTest.image">
  </div>
</template>

<script>
export default {
  name: "TestOutput",
  props: {
    outputToTest: Object
  }
};
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

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
}
</style>
