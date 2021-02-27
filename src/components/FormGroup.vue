<template>
  <div class="formgroup">
    <div class="formgrouptitle">{{ this.$attrs.title }}</div>
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

<style lang="scss">
.formgroup {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  .formgrouptitle {
    width: 100%;
  }
}
</style>
