<template>
  <div class="inputgroup inputgroup--as-row">
    <label v-on:click="this.toggleInput()" :for="this.$attrs.id" class="inputgroup__label">{{
      this.$attrs.label
    }}</label>
    <div
      v-on:click="this.toggleInput()"
      :class="
        `inputgroup__input inputgroup__radio ${
          this.isChecked() ? 'inputgroup__radio--checked' : ''
        } ${'round' in this.$attrs ? 'inputgroup__radio--round' : ''}`
      "
    ></div>
    <input
      type="radio"
      hidden
      :name="this.$attrs.name"
      :id="this.$attrs.id"
      :aria-describedby="this.$attrs.id"
      :required="this.$attrs.required"
      :placeholder="this.$attrs.placeholder"
      :value="this.isChecked()"
      :checked="this.isChecked()"
      v-on:click="this.toggleInput()"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Radio',
  methods: {
    toggleInput() {
      this.state = !this.state;
    },
    isChecked() {
      return this.state;
    },
  },
  data() {
    return {
      state: this.$attrs.checked ?? false,
    };
  },
});
</script>
