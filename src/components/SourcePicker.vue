<template>
  <div class="source-picker">
    <div class="source-input-container" v-if="sourceInput == 'url'">
      <label for="pageUrl">Website URL</label>
      <input type="url" name="pageUrl" id="pageUrl" v-model="tempUrlToTest" placeholder="https://www.mywebsite.com">
    </div>
    <div class="source-input-container" v-if="sourceInput == 'img'">
      <label for="imageFile">Select an image</label>
      <input type="file" name="imageFile" id="imageFile" accept="image/png, image/jpeg">
    </div>
    <div>
      <label><input name="source" id="sourceInputUrl" type="radio" value="url" v-model="sourceInput"> URL</label>
      <label><input name="source" id="sourceInputImg" type="radio" value="img" v-model="sourceInput"> Image</label>
    </div>
    <button v-if="tempUrlToTest" v-on:click="emitUrlToTest">Start tests</button>
  </div>
</template>

<script>
export default {
  name: 'SourcePicker',
  data: function() {
    return {
      tempUrlToTest: "",
      sourceInput: "url",
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

    .source-input-container {
      label, input {
        display: block;
      }
    }
  }
</style>

