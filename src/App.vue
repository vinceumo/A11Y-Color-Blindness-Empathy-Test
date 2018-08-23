<template>
  <div id="app">
    <div>
      <TestPicker v-for="(item, index) in tests" v-bind:key="item.name + index" v-bind:tests="{name: item.name, status: item.status}" v-on:change="getTestPickerValue"/>
    </div>
    {{ currentTest }}
    <div v-bind:class="currentTest">
      <TestOutput v-if="showTestOutput" v-bind:pageToTest="pageToTestUrl"/>
    </div>
    <div>
      <input type="url" name="pageUrl" id="pageUrl" v-model="pageToTestUrl">
      <button v-if="pageToTestUrl" v-on:click="showTestOutput = true">Start tests</button>
    </div>
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
      pageToTestUrl: "https://www.cosmos.co.uk/",
      showTestOutput: true,
      tests: [
        {name: "protanopia", status: null},
        {name: "protanomaly", status: null},
        {name: "deuteranopia", status: null},
        {name: "deuteranomaly", status: null},
        {name: "tritanopia", status: null},
        {name: "tritanomaly", status: null},
        {name: "achromatopsia", status: null},
        {name: "achromatomaly", status: null}, 
        {name: "grayscale", status: null} 
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
