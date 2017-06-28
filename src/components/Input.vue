<template>
  <input v-bind="$props"
    :value="value"
    @input="input"
    @change="change">
</template>

<script>
  export default {
    name: 'ui-input',
    props: {
      value: null
    },
    methods: {
      change(evt) {
        this.$emit('change', evt.target.value);
      },

      input(evt) {
        this.$emit('input', evt.target.value);
      }
    }
  }
</script>

<style scoped>
  input,
  select {
    display: block;
    padding: 0 calc(var(--form-size) / 4);
    width: 100%;
    height: var(--form-size);
    font-family: var(--font-family);
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius);
  }

  input:focus,
  select:focus {
    outline: 0;
  }
</style>