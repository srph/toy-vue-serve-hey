<template>
  <div v-if="notification.length" class="toast-notification">
    <div class="item">
      {{ notification }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    data() {
      return {
        timeout: null,
        notification: ''
      }
    },
    methods: {
      notify(message) {
        clearTimeout(this.timeout);
        this.notification = message;
        this.timeout = setTimeout(this.remove, 10000);
      },

      remove() {
        this.notification = '';
      }
    }
  }
</script>

<style scoped>
.toast-notification {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 32px;
  right: 32px;
  pointer-events: none;
  z-index: 1000;
}

.toast-notification > .item {
  display: inline-block;
  padding: 16px;
  font-size: var(--font-size-h5);
  color: var(--color-white);
  background: #333;
  border-radius: var(--border-radius);
  pointer-events: all;
}

.toast-notification > .item:not(:last-child) {
  margin-bottom: 16px;
}

.toast-notification > .item.-enter {
  opacity: 0;
  transform: translateY(20px);
}

.toast-notification > .item.-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: 0.3s all ease;
}

.toast-notification > .item.-leave {
  opacity: 1;
  transform: translateY(0);
}

.toast-notification > .item.-leave-active {
  opacity: 0;
  transform: translateY(-20px);
  transition: 0.3s all ease;
}
</style>