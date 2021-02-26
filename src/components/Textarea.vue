<template>
  <div class="inputgroup">
    <label :for="this.$attrs.id" class="inputlabel">{{ this.$attrs.label }}</label>
    <textarea
      class="textarea"
      :name="this.$attrs.name"
      :id="this.$attrs.id"
      v-model="this.text_area"
      :aria-describedby="this.$attrs.id"
      :required="this.$attrs.required"
      :placeholder="this.$attrs.placeholder"
      :rows="this.text_area.split('\n').length"
    ></textarea>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Textarea',
  data() {
    return {
      text_area: '',
      textareaRows: 1,
    };
  },
  methods: {},
});
</script>
