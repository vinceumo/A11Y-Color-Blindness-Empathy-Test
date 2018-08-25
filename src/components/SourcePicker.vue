<template>
  <div class="source-picker">
    <div>
      <label for="pageUrl">Website URL</label>
      <input type="url" name="pageUrl" id="pageUrl" v-model="tempUrlToTest" placeholder="https://www.mywebsite.com">
      <button v-if="tempUrlToTest" v-on:click="emitUrlToTest">Start tests</button>
    </div>
    <div>
      <label><input name="source" type="radio" value="url" checked> URL</label>
      <label><input name="source" type="radio" value="img" checked> Image</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SourcePicker',
  data: function() {
    return {
      tempUrlToTest: ""
    } 
  },
  methods: {
    emitUrlToTest() {
      const value = this.tempUrlToTest;
      this.$emit('emitUrlToTestEvent', value);
    },
  }
}
</script>

<style lang="scss" scoped>
  .source-picker {
    margin-bottom: 1rem;
  }
</style>

