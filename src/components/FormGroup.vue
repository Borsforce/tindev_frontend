<template>
  <div class="w-full">
    <div class="flex flex-start md:text-xl">{{ this.$props.title }}</div>
    <slot v-for="slot in this.$slots">{{ slot }}</slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormGroup',
  props: { title: { type: String, default: null } },
});
</script>
