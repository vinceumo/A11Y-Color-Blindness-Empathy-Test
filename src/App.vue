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
  <footer class="has-py-5 has-bg-dark">
    <div class="container">
      <div v-if="showTest && toTest.sourceInput == 'url'">
        <h2>Why is my site showing as a blank white box?</h2>
        <p>Some websites do not allow to be embedded in other websites. There is no workaround. Alternatively, you can provide a screenshot of the website you wish to test or use the browser plugin.</p>
        <hr>
      </div>
      <h2>Why this app?</h2>
      <p><i>A11Y - Color blindness empathy test</i> was build to help designers and developers to understand color blindness and visual imparity.</p>
      <p>This website is base on <a href="https://lukyvj.github.io/accecss/">AcceCSS</a> Sass mixin by <a href="https://twitter.com/LukyVj">LukyVj</a>. This mixin allows this app to emulate 8 types of color blindness, plus grayscale to check the contrast of your website.</p>
      <p>If you want to learn about color blindness, here are few resources:</p>
      <ul>
        <li><a href="https://www.nhs.uk/conditions/Colour-vision-deficiency/">Colour vision deficiency (colour blindness) - NHS</a></li>
        <li><a href="https://nei.nih.gov/health/color_blindness/facts_about">Facts About Color Blindness - NIH</a></li>
        <li><a href="https://99designs.co.uk/blog/tips/designers-need-to-understand-color-blindness/">Why all designers need to understand color blindness  - 99designs</a></li>
        <li><a href="https://medium.com/intrepid-s-insights/designing-for-and-with-color-blindness-48392aab3d87">Designing For (and With) Color Blindness - Aaron Tenbuuren</a></li>
        <li><a href="https://uxcellence.com/2018/accessible-color-contrast">Designing for Accessibility: Color & Contrast - UXcellence</a></li>
      </ul>
      <hr>
      <!-- <ul class="list-unstyle plugins">
        <li><a href="#" class="btn is-dark">Chrome plugin</a></li>
        <li><a href="#" class="btn is-dark">Firefox plugin</a></li>
        <li><a href="#" class="btn is-dark">Edge plugin</a></li>
      </ul> -->
      <ul class="list-inline has-text-center has-my-4">
        <li><a href="https://github.com/vinceumo/a11y-empathy-test">Code</a></li>
        <li><a href="http://www.vincent-humeau.com/">Made by Vincent Humeau</a></li>
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

