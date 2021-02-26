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

<style lang="scss">
.hidden {
  display: none;
}
.inputgroup {
  .inputcheckbox {
    display: flex;
    box-sizing: border-box;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 7px;
    border: 2px solid $brandPrimary;
    outline: none;
    box-shadow: none;
    background-color: $darkBackground;
    cursor: pointer;

    &::after {
      display: block;
      box-sizing: border-box;
      content: '';
      position: relative;
      top: 50%;
      left: 50%;
      border-radius: 3px;
      transform: translate(-50%, -50%);
      width: 0.7rem;
      height: 0.7rem;
    }
  }
  .inputcheckbox.checked::after {
    background-color: $brandPrimary;
  }
  .inputcheckbox:not(.checked)::after {
    background-color: transparent;
  }
  .inputcheckbox.round {
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
