<template>
  <div class="inputgroup">
    <label v-on:click="this.toggleInput()" :for="this.$attrs.id" class="inputgroup__label">{{
      this.$attrs.label
    }}</label>
    <div
      v-on:click="this.toggleInput()"
      :class="
        `inputgroup__input inputgroup__checkbox ${
          this.isChecked() ? 'inputgroup__checkbox--checked' : ''
        } ${'round' in this.$attrs ? 'inputgroup__checkbox--round' : ''}`
      "
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
