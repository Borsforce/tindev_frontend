<template>
  <div class="badgegroup">
    <a :href="$props.link"
      ><span class="badgegroup__badge"><Icon :name="$props.badge"/></span
    ></a>
  </div>
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
