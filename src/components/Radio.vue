<template>
  <div class="w-full flex flex-col inputgroup">
    <label :for="this.$attrs.id" class="w-full mt-1 flex flex-start md:text-3xl label">{{
      this.$props.label
    }}</label>
    <input
      type="radio"
      class="form-control p-3 pl-4 pr-4 rounded-full border radio"
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
  name: 'Checkbox',
  props: { label: { type: String, default: null } },
});
</script>

<style>
.radio {
  width: 1rem;
  height: 1rem;
}
</style>
