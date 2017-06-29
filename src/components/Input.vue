<template>
  <input v-bind="$props"
    :value="value"
    :class="{ '-danger': error }"
    @input="input"
    @change="change">
</template>

<script>
  export default {
    name: 'ui-input',
    props: {
      value: null,
      error: Boolean
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
  input {
    display: block;
    padding: 0 calc(var(--form-size) / 4);
    width: 100%;
    height: var(--form-size);
    font-family: var(--font-family);
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius);
  }

  input:focus {
    outline: 0;
  }

  input.-danger {
    border-color: red;
  }
</style>