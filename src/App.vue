<template>
  <div id="app">
    <root></root>
  </div>
</template>

<script>
import Root from './Root';

export default {
  name: 'app',
  components: {
    Root
  }
}
</script>

<style>
:root {
  --color-white: #fff;
  --color-black: #000;
  --color-link: #16a085;
  --color-gray: #C4C4C4;
  --color-gray-light: #ddd;
  --color-gray-dark: #ABAEBC;
  --color-primary: #26e081;
  --color-success: #26e081;
  --color-danger: #D0011B;
  --color-info: #6FA4CF;
  --color-sub: #26262C;
  --color-sub-light: #404040;

  --font-family: 'Avenir', 'Avenir Next', 'Proxima Nova', San Francisco, -apple-system, BlinkMacSystemFont, ".SFSNText-Regular", Segoe UI, Ubuntu, Helvetica, sans-serif;
  --font-size-base: 14px;
  --font-size-h1: 4rem;
  --font-size-h2: 2.5rem;
  --font-size-h3: 2rem;
  --font-size-h4: 1.5rem;
  --font-size-h5: 1rem;
  --font-size-h6: 0.75rem;

  --form-size: 36px;
  --form-size-small: 24px;
  --grid-gutter: 16px;
  --grid-gutter-large: 32px;

  --border-radius: 4px;
  --border-radius-rounded: 24px;
}

* {
  box-sizing: border-box;
}

html, body {
  background: #f5f7f9;
  font-size: var(--font-size-base);
  font-family: var(--font-family);
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1rem;
}

h6 {
  font-size: 0.75rem;
}

h1, h2, h3, h4, h5, h6, p {
  margin-top: 0;
}

h1, h2, h3 {
  margin-bottom: 16px;
}

h4, h5, h6, p {
  margin-bottom: 8px;
}

p {
  line-height: 1.5;
}

a {
  color: --color-link;

  &, &:hover {
    text-decoration: none;
  }
}
</style>
