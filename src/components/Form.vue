<template>
  <form @submit.prevent="true" @submit.once="this.$props.onSubmit" class="w-full rounded-3xl">
    <slot v-for="slot in this.$slots">{{ slot }}</slot>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Form',
  props: { onSubmit: { type: Function, default: () => null } },
});
</script>
<style></style>
