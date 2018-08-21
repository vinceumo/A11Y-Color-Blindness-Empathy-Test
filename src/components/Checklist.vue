<template>
  <div>
    <label><input name="tests" type="radio"> {{tests.name}}</label>
  </div>
</template>

<script>
  export default {
    name: 'Checklist',
    props: ['tests'],
  }
</script>