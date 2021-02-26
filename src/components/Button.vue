<template>
  <button
    v-if="size === 'sm'"
    v-bind:class="[variant === 'primary' ? 'bg-gray-900' : 'bg-purple-400']"
    type="button"
    class="uppercase leading-tight text-white font-bold rounded-full py-2 px-7 items-center justify-center focus:outline-none"
  >
    <slot></slot>
  </button>
  <button
    v-if="size === 'lg'"
    v-bind:class="[variant === 'primary' ? 'bg-gray-900' : 'bg-purple-400']"
    type="button"
    class="text-2xl uppercase leading-tight text-white font-bold rounded-full py-3 px-8 items-center justify-center focus:outline-none"
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
