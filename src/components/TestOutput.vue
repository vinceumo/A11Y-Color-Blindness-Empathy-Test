<template>
  <div class="test-output">
    <div class="iframe-container" v-if="outputToTest.sourceInput == 'url'">
        <iframe v-bind:src="outputToTest.url" frameborder="0"></iframe>
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
  padding: 0.5rem;

  .iframe-container {
    height: calc(100vh - 5rem);
    width: 100%;

    iframe {
      height: 100%;
      width: 100%;
      background-color: hsl(0, 0%, 100%);
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
