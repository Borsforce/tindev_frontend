<template>
  <div class="skillgroup">
    <span class="skillgroup__head-text">{{ $props.title }}</span>
    <span class="skillgroup__desc-text">{{ $props.description }}</span>
    <hr />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Skill',
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
});
</script>
