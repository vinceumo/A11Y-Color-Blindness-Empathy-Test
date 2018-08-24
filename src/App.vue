<template>
<div>
  <div class="container">
    <h1>A11Y <br>
    Color blindness empathy test</h1>
    <div>
      <label for="pageUrl">Website URL</label>
      <input type="url" name="pageUrl" id="pageUrl" v-model="pageToTestUrl" placeholder="https://www.mywebsite.com">
      <button v-if="pageToTestUrl" v-on:click="showTestOutput = true">Start tests</button>
    </div>
    <TestPicker v-if="showTestOutput" v-for="(item, index) in tests" v-bind:key="item.name + index" v-bind:tests="{name: item.name}" v-on:change="getTestPickerValue"/>
  </div>
  <TestOutput v-if="showTestOutput" v-bind:pageToTest="pageToTestUrl" v-bind:class="currentTest"/>
</div>
</template>

<script>
import TestPicker from './components/TestPicker.vue'
import TestOutput from './components/TestOutput.vue'

export default {
name: 'app',
components: {
  TestPicker,
  TestOutput
},
data: function () {
  return {
    currentTest: "",
    pageToTestUrl: "",
    showTestOutput: false,
    tests: [
      {name: "protanopia"},
      {name: "protanomaly"},
      {name: "deuteranopia"},
      {name: "deuteranomaly"},
      {name: "tritanopia"},
      {name: "tritanomaly"},
      {name: "achromatopsia"},
      {name: "achromatomaly"}, 
      {name: "grayscale"} 
    ]
  }
},
methods: {
  getTestPickerValue(value) {
    this.currentTest = value;
  },
}
}
</script>
