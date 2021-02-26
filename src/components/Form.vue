<template>
  <form
    :class="centered && 'form--centered'"
    @submit.prevent="true"
    @submit.once="this.$props.onSubmit"
  >
    <slot v-for="slot in this.$slots">{{ slot }}</slot>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Form',
  props: {
    onSubmit: { type: Function, default: () => null },
    centered: { type: Boolean, default: false },
  },
});
</script>
<style></style>
