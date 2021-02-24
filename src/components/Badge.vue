<template>
  <a :href="$props.link"><span class="badge"><Icon :name="$props.badge" /></span></a>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from '@/components/Icon.vue';

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
  components: {
    Icon,
  },
});
</script>

<style scoped lang="scss">
  .badge {
    color: #545455;
    svg {
      width: 22px;
      height: 22px;
    }
  }
</style>
