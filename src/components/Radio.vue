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

<style lang="scss">
.inputgroup {
  .inputradio {
    display: flex;
    box-sizing: border-box;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 7px;
    border: 2px solid $brandPrimary;
    outline: none;
    cursor: pointer;
    background-color: $darkBackground;
    opacity: 0.6;
    &:hover {
      opacity: 0.8;
    }
    &:focus {
      opacity: 1;
    }
    &::before {
      display: flex;
      box-sizing: border-box;
      content: '';
      position: absolute;
      border-radius: 7px;
      width: 1.7rem;
      height: 1.7rem;
      overflow: hidden;
      border: 2px solid $brandPrimary;
      background-color: $darkBackground;
    }
    &::after {
      box-sizing: border-box;
      content: '';
      position: relative;
      top: 50%;
      left: 50%;
      border-radius: 3px;
      transform: translate(-50%, -50%);
      width: 0.6rem;
      height: 0.6rem;
    }
    &:checked {
      opacity: 1;
    }
    &:checked::after {
      background-color: $brandPrimary;
    }
    &:not(:checked)::after {
      background-color: transparent;
    }
  }

  .inputradio.round {
    border-radius: 100%;
    &::before {
      border-radius: 100%;
    }
    &::after {
      border-radius: 100%;
    }
  }
}
</style>
