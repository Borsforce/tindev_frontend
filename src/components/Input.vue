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

<style lang="scss">
.inputgroup {
  .input {
    font-family: 'Poppins';
    font-size: 1rem;
    width: 100%;
    height: 30px;
    color: $textColor;
    background-color: transparent;
    padding: 0.5rem 1rem;
    border: 1px solid;
    border-radius: 0.8rem;
    border-color: rgba(255, 255, 255, 0.15);
    outline: none;
    margin-bottom: 1.5rem;

    &:focus {
      border-color: rgba(255, 255, 255, 0.4);
      background-color: rgba(255, 255, 255, 0.035);
    }
  }
}
</style>
