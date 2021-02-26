<template>
  <div class="inputgroup">
    <label v-if="this.$attrs.label" :for="this.$attrs.id" class="inputlabel">{{
      this.$attrs.label
    }}</label>
    <input
      :type="this.$attrs.type"
      :name="this.$attrs.name"
      class="input"
      :id="this.$attrs.id"
      :aria-describedby="this.$attrs.id"
      :required="this.$attrs.required"
      :placeholder="this.$attrs.placeholder"
      :value="this.$attrs.value"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
});
</script>
