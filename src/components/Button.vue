<template>
  <button v-bind="$props" :class="{ '-small': size === 'small', '-alternate': alternate }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    // ['small']
    size: String,
    alternate: {
      type: Boolean,
      default: false
    }
  },
  template: '<button v-bind="$props"><slot></slot></button>'
}
</script>

<style scoped>
button {
  padding: 0 calc(var(--form-size) / 2);
  height: var(--form-size);
  line-height: calc(var(--form-size) - 1);
  background: #2a2f54;
  display: inline-block;
  color: var(--color-white);
  font-family: var(--font-family);
  border: transparent;
  border-radius: var(--border-radius);
  cursor: pointer;
}

button:focus {
  outline: 0;
}

button.-small {
  padding: 0 calc(var(--form-size-small) / 2);
  height: var(--form-size-small);
}

button.-alternate {
  color: #2a2f54;
  background: #f5f7f9;
}

button + button {
  margin-left: 8px;
}
</style>