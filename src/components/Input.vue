<template>
  <div class="w-full flex flex-col inputgroup">
    <label :for="this.$attrs.id" class="w-full mt-1 flex flex-start md:text-3xl label">{{
      this.$props.label
    }}</label>
    <input
      :type="this.$props.type"
      class="form-control p-3 pl-4 pr-4 rounded-xl  border input"
      :id="this.$attrs.id"
      :aria-describedby="this.$attrs.id"
      :required="this.$attrs.required"
      :placeholder="this.$props.placeholder"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    label: { type: String, default: null },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
  },
});
</script>

<style>
.input {
  color: white;
  background-color: transparent;
  border-color: rgba(255, 255, 255, 0.2);
  outline: none;
}
.input:focus {
  border-color: rgba(255, 255, 255, 0.4);
}
</style>
