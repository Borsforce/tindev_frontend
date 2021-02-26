<template>
  <button
    v-if="size === 'sm'"
    v-bind:class="[variant === 'primary' ? 'bg-gray-900' : 'bg-purple-400']"
    type="button"
    class="text-white rounded p-1 items-center justify-center focus:outline-none"
  >
    <slot></slot>
  </button>
  <button
    v-if="size === 'lg'"
    v-bind:class="[variant === 'primary' ? 'bg-gray-900' : 'bg-purple-400']"
    type="button"
    class="text-white font-bold rounded-full p-4 items-center justify-center focus:outline-none"
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
