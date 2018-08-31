<template>
  <div class="source-picker has-my-3">
    <div class="source-input-container" v-if="tempToTest.sourceInput == 'url'">
      <label for="pageUrl">Website URL</label>
      <input type="url" name="pageUrl" id="pageUrl" v-model="tempToTest.url" placeholder="https://www.mywebsite.com">
    </div>
    <div class="source-input-container" v-if="tempToTest.sourceInput == 'img'">
      <label for="imageFile">Select an image</label>
      <input type="file" name="imageFile" id="imageFile" accept="image/png, image/jpeg" v-on:change="onFileChange">
    </div>
    <ul class="list-inline">
      <li>
        <label class="input-label">
          <input name="source" id="sourceInputUrl" type="radio" value="url" v-model="tempToTest.sourceInput "> 
          URL
        </label>
      </li>
      <li>
        <label class="input-label">
          <input name="source" id="sourceInputImg" type="radio" value="img" v-model="tempToTest.sourceInput "> 
          Image
        </label>
      </li>
    </ul>
    <button v-if="tempToTest.url || tempToTest.image" v-on:click="emitValuesToTest" class="btn is-light has-mt-3">Start test</button>
  </div>
</template>

<script>
export default {
  name: "SourcePicker",
  data: function() {
    return {
      tempToTest: {
        sourceInput: "url",
        image: "",
        url: ""
      }
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();

      reader.onload = e => {
        this.tempToTest.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    emitValuesToTest() {
      const value = this.tempToTest;
      this.$emit("onValuesToTestClick", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.source-picker {
  margin-bottom: 1rem;

  .source-input-container {
    label,
    input {
      display: block;
    }
  }
}
</style>

