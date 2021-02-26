<template>
  <div class="inputgroup">
    <label :for="this.$attrs.id" class="inputlabel">{{ this.$attrs.label }}</label>
    <div
      v-on:click="this.toggleInput()"
      :class="`inputcheckbox ${this.isChecked() ? 'checked' : ''}`"
    ></div>
    <input
      type="checkbox"
      hidden
      :id="this.$attrs.id"
      :aria-describedby="this.$attrs.id"
      :value="this.state"
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
  data() {
    return {
      state: this.$attrs.checked !== undefined,
    };
  },
  methods: {
    toggleInput() {
      this.state = !this.state;
    },
    isChecked() {
      return this.state;
    },
  },
});
</script>
