<template>
  <li>
    <label class="input-label"><input v-bind:name="testName" type="radio" v-bind:value="tests.class" v-on:change="emitTestPickerValue"> {{tests.name}}</label>
  </li>
</template>

<script>
export default {
  name: "TestPicker",
  props: {
    testName: String,
    tests: Object,
    value: String
  },
  methods: {
    emitTestPickerValue(event) {
      const value = event.target.value;
      this.$emit("onTestValueChange", value);
    }
  }
};
</script>

<style lang="scss" scoped>
  label {
    text-transform: capitalize;
  }
</style>
