<template>
  <div class="inputgroup as-row">
    <label :for="this.$attrs.id" class="inputlabel">{{ this.$attrs.label }}</label>
    <input
      type="radio"
      :name="this.$attrs.name"
      :class="`${this.isRounded()}`"
      :id="this.$attrs.id"
      :aria-describedby="this.$attrs.id"
      :required="this.$attrs.required"
      :placeholder="this.$attrs.placeholder"
      :checked="this.$attrs.checked"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Checkbox',
  methods: {
    isRounded() {
      return `inputradio ${'round' in this.$attrs ? 'round' : ''}`;
    },
  },
});
</script>
