<template>
  <li>
    <label class="input-label"><input name="tests" type="radio" v-bind:value="tests.name" v-on:change="emitTestPickerValue"> {{tests.name}}</label>
  </li>
</template>

<script>
export default {
  name: "TestPicker",
  props: ["tests", "value"],
  methods: {
    emitTestPickerValue(event) {
      const value = event.target.value;
      this.$emit("change", value);
    }
  }
};
</script>

<style lang="scss" scoped>
  label {
    text-transform: capitalize;
  }
</style>
