<template>
<div class="page-container">
  <header class="has-bg-dark has-py-5">
    <div class="container">
      <h1>A11Y<br>Color blindness empathy test</h1>
    </div>
  </header>
  <main class="has-py-5">
    <div class="container">
      <SourcePicker v-on:onValuesToTestClick="getValuesToTest"/>
      <h2 v-if="showTest">Color blindness tests:</h2>
      <ul v-if="showTest" class="list-unstyle test-pickers has-p-3 has-mb-3">
        <TestPicker v-for="(item, index) in colorBlindessTests" v-bind:key="item.name + index" v-bind:tests="{name: item.name, class: item.class}" v-bind:testName="'colorBlindness'" v-on:onTestValueChange="getColorBlindTestPickerValue"/>
      </ul>
      <h2 v-if="showTest">Vision loss tests:</h2>
      <ul v-if="showTest" class="list-unstyle test-pickers has-p-3 has-mb-3">
        <TestPicker v-for="(item, index) in lowVisionTests" v-bind:key="item.name + index" v-bind:tests="{name: item.name, class: item.class}"  v-bind:testName="'visionLoss'" v-on:onTestValueChange="getLowVisionPickerValue"/>
      </ul>
    </div>
    <div v-bind:class="currentLowVisionTest">
      <TestOutput v-if="showTest" v-bind:outputToTest="toTest" v-bind:class="currentColorBlindTest"/>
    </div>
  </main>
  <PageFooter v-bind:sourceInput="toTest.sourceInput" v-bind:isTestShown="showTest"/>
</div>
</template>

<script>
import PageFooter from "./components/PageFooter.vue";
import SourcePicker from "./components/SourcePicker.vue";
import TestPicker from "./components/TestPicker.vue";
import TestOutput from "./components/TestOutput.vue";

export default {
  name: "app",
  components: {
    PageFooter,
    SourcePicker,
    TestPicker,
    TestOutput
  },
  data: function() {
    return {
      currentColorBlindTest: "",
      currentLowVisionTest: "",
      toTest: {},
      colorBlindessTests: [
        { name: "none", class: "" },
        { name: "protanopia", class: "protanopia" },
        { name: "protanomaly", class: "protanomaly" },
        { name: "deuteranopia", class: "deuteranopia" },
        { name: "deuteranomaly", class: "deuteranomaly" },
        { name: "tritanopia", class: "tritanopia" },
        { name: "tritanomaly", class: "tritanomaly" },
        { name: "achromatopsia", class: "achromatopsia" },
        { name: "achromatomaly", class: "achromatomaly" },
        { name: "grayscale", class: "grayscale" }
      ],
      lowVisionTests: [
        { name: "none", class: "" },
        { name: "moderate vision loss", class: "vision-loss-moderate" },
        { name: "severe vision loss", class: "vision-loss-severe" },
        { name: "blidness", class: "vision-blindness" }
      ],
    };
  },
  methods: {
    getColorBlindTestPickerValue(value) {
      this.currentColorBlindTest = value;
    },
    getLowVisionPickerValue(value) {
      this.currentLowVisionTest = value;
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

