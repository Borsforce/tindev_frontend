<template>
  <a :href="this.$props.link"><Icon :name="$props.badge" /></a>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Badge',
  props: {
    badge: {
      type: String,
      default: undefined,
    },
    link: {
      type: String,
      default: undefined,
    },
  },
});
</script>
