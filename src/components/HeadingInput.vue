<template>
  <textarea
    v-bind="$props"
    v-if="type === 'textarea'"
    v-autosize
    :value="value"
    :class="{ 'heading-input': true, '-danger': error }"
    @input="input"
    @change="change"></textarea>
  <input
    v-bind="$props"
    v-else
    :value="value"
    :class="{ 'heading-input': true, '-danger': error }"
    @input="input"
    @change="change"></input>
</template>

<script>
  export default {
    name: 'heading-input',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: null,
      error: Boolean
    },
    methods: {
      change(evt) {
        console.log('change', evt.target.value);
        this.$emit('change', evt.target.value);
      },

      input(evt) {
        console.log('input', evt.target.value);
        this.$emit('input', evt.target.value);
      }
    }
  }
</script>

<style scoped>
.heading-input {
  font-size: var(--font-size-h3);
  display: block;
  padding: calc(var(--form-size) / 4);
  width: 100%;
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  outline: 0;
  font-family: var(--font-family);
  resize: none;
}

.heading-input:hover,
.heading-input:focus {
  transition: 200ms border ease;
  border-color: var(--color-gray-light);
}

.heading-input.-danger:hover,
.heading-input.-danger:focus {
  border-color: red;
}
</style>