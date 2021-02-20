<template>
  <div class="w-full flex flex-col inputgroup">
    <label :for="this.$attrs.id" class="w-full md:text-3xl label">{{ this.$props.label }}</label>
    <textarea
      class="form-control p-3 pl-4 pr-4 rounded-xl border textarea"
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
  name: 'Textarea',
  props: {
    label: { type: String, default: null },
    placeholder: { type: String, default: '' },
  },
});
</script>

<style>
.textarea {
  color: white;
  background-color: transparent;
  border-color: rgba(255, 255, 255, 0.2);
  outline: none;
  resize: none;
}
.textarea:focus {
  border-color: rgba(255, 255, 255, 0.4);
}
</style>
