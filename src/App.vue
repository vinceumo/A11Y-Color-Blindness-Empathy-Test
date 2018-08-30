<template>
<div class="page-container">
  <header class="has-bg-dark has-py-5">
    <div class="container">
      <h1>A11Y<br>
      Color blindness empathy test</h1>
    </div>
  </header>
  <main class="has-py-5">
    <div class="container">
      <SourcePicker v-on:emitValuesToTestEvent="getValuesToTest"/>
      <ul v-if="showTest" class="list-unstyle test-pickers has-p-3 has-mb-3">
        <TestPicker v-for="(item, index) in tests" v-bind:key="item.name + index" v-bind:tests="{name: item.name}" v-on:change="getTestPickerValue"/>
      </ul>
    </div>
    <TestOutput v-if="showTest" v-bind:outputToTest="toTest" v-bind:class="currentTest"/>
  </main>
  <footer class="has-py-5 has-bg-dark">
    <div class="container">
      <div v-if="showTest && toTest.sourceInput == 'url'">
        <h2>Why is my site showing as a blank white box?</h2>
        <p>Some websites do not allow to be embedded in other websites. There is no work around. Alternatively, you can provide a screenshot of the website you wish to test or use the browser plugin.</p>
        <hr>
      </div>
      <ul class="list-unstyle plugins">
        <li><a href="https://chrome.google.com/webstore/detail/plugins/mmcblfncjaclajmegihojiekebofjcen" class="btn is-dark">Chrome plugin</a></li>
        <li><a href="https://chrome.google.com/webstore/detail/plugins/mmcblfncjaclajmegihojiekebofjcen" class="btn is-dark">Firefox plugin</a></li>
        <li><a href="https://chrome.google.com/webstore/detail/plugins/mmcblfncjaclajmegihojiekebofjcen" class="btn is-dark">Edge plugin</a></li>
      </ul>
    </div>
  </footer>
</div>
</template>

<script>
import SourcePicker from "./components/SourcePicker.vue";
import TestPicker from "./components/TestPicker.vue";
import TestOutput from "./components/TestOutput.vue";

export default {
  name: "app",
  components: {
    SourcePicker,
    TestPicker,
    TestOutput
  },
  data: function() {
    return {
      currentTest: "",
      toTest: {},
      tests: [
        { name: "none" },
        { name: "protanopia" },
        { name: "protanomaly" },
        { name: "deuteranopia" },
        { name: "deuteranomaly" },
        { name: "tritanopia" },
        { name: "tritanomaly" },
        { name: "achromatopsia" },
        { name: "achromatomaly" },
        { name: "grayscale" }
      ]
    };
  },
  methods: {
    getTestPickerValue(value) {
      this.currentTest = value;
    },
    getValuesToTest(value) {
      this.toTest = value;
    }
  },
  computed: {
    showTest: function() {
      return (
        (this.toTest.sourceInput == "url" && this.toTest.url) ||
        (this.toTest.sourceInput == "img" && this.toTest.image)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1 0 auto;
  }
}


@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .page-container {
    height: 100vh; 
    min-height: 100%;   

    main {
      flex: 1 1 auto; 
    }
  }
}

.test-pickers {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  border: 3px dashed color(dark);

  @include min(#{bp(sm)}){
    grid-template-columns: 1fr 1fr;
  }
}

.plugins {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .btn {
    margin: 0.5rem;
  }
}
</style>

