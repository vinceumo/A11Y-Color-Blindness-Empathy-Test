<template>
<div>
  <div class="container">
    <h1>A11Y <br>
    Color blindness empathy test</h1>
    <SourcePicker v-on:emitValuesToTestEvent="getValuesToTest"/>
    <div v-if="showTest">
      <TestPicker v-for="(item, index) in tests" v-bind:key="item.name + index" v-bind:tests="{name: item.name}" v-on:change="getTestPickerValue"/>
    </div>
  </div>
  <TestOutput v-if="showTest" v-bind:outputToTest="toTest" v-bind:class="currentTest"/>
  <footer>
    <div class="container">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut fugit placeat assumenda magni? Exercitationem aperiam delectus minima autem, culpa neque ab cupiditate, dignissimos, adipisci accusantium quibusdam iusto eaque inventore? Veniam?</p>
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

</style>

