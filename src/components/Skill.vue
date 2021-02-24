<template>
  <span class="head-text">{{ $props.title }}</span>
  <span class="desc-text">{{ $props.description }}</span>
  <hr />
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

<style scoped>
  span {
    font-family: Poppins;
    color: #fff;
    display: block;
  }
  .head-text {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
  }
  .desc-text {
    font-size: 14px;
    line-height: 17px;
  }
  hr {
    background-color: #5E5E5E;
  }
</style>
