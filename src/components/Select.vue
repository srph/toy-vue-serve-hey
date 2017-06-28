<template>
  <div class="wrapper">
    <select v-bind="$props"
      :value="value"
      @input="input"
      @change="change">
      <slot></slot>
    </select>
  </div>
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
  .wrapper {
    position: relative;
  }

  .wrapper::before {
    content: "";
    display: block;
    position: absolute;
    right: calc(var(--form-size) / 2);
    top: calc(var(--form-size) / 3);
    height: 6px;
    width: 6px;
    border: 1px solid transparent;
    border-left-color: #000;
    border-bottom-color: #000;
    pointer-events: none;
    transform: rotate(-45deg);
  }

  select {
    display: block;
    padding: 0 calc(var(--form-size) / 4);
    padding-right: var(--form-size);
    width: 100%;
    height: var(--form-size);
    font-family: var(--font-family);
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius);
    outline: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
</style>