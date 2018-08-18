<template>
  <div id="app">
    <div class="colorblind8">
      <TestOutput v-if="showTestOutout" v-bind:pageToTest="pageToTestUrl"/>
    </div>
    <div>
      <input type="url" name="pageUrl" id="pageUrl" v-model="pageToTestUrl">
      <button v-if="pageToTestUrl" v-on:click="showTestOutout = true">Start tests</button>
    </div>
  </div>
</template>

<script>
import TestOutput from './components/TestOutput.vue'

export default {
  name: 'app',
  components: {
    TestOutput
  },
  data: function () {
    return {
      pageToTestUrl: "",
      showTestOutout: false
    }
  }
}
</script>
