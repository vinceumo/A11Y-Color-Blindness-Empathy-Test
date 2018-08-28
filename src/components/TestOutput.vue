<template>
  <div class="test-output">
    <div class="iframe-container" v-if="outputToTest.sourceInput == 'url'">
        <iframe v-bind:src="outputToTest.url" frameborder="0" onload="console.log('Load');" onerror="console.log('error');"></iframe>
    </div>
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
  padding: 1rem;

  .iframe-container {
    height: calc(100vh - 2rem);
    width: calc(100% - 2rem);

    iframe {
      height: 100%;
      width: 100%;
      margin-top: -1.5rem;
    }
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
}
</style>
