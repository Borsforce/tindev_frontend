<template>
  <button
    v-if="size === 'sm'"
    type="button"
  >
    <slot></slot>
  </button>
  <button
    v-if="size === 'lg'"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    size: {
      type: String,
      default: 'sm',
    },
    variant: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style scoped></style>
