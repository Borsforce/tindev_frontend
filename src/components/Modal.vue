<template>
  <div class="container relative p-8 m-auto modal">
    <div class="flex relative modalheader">
      <div class="mr-auto items-start md:text-2xl">{{ this.$props.title }}</div>
      <div class="cursor-pointer p-2">X</div>
    </div>
    <slot v-for="slot in this.$slots">{{ slot }}</slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: { title: { type: String, default: '' } },
});
</script>

<style>
.modal {
  border-radius: 3rem;
  background-color: #111;
  color: white;
}
</style>
