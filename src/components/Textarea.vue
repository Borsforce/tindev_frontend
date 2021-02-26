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

<style lang="scss">
.inputgroup {
  .textarea {
    display: inline-flex;
    font-family: 'Poppins';
    font-size: 1rem;
    width: 100%;
    min-height: 3rem;
    height: auto;
    color: $textColor;
    background-color: transparent;
    padding: 0.5rem 1rem;
    padding-bottom: 2rem;
    border: 1px solid;
    border-radius: 0.8rem;
    border-color: rgba(255, 255, 255, 0.15);
    outline: none;
    margin-bottom: 1.5rem;
    resize: none;

    &[contenteditable]:empty::before {
      content: attr(placeholder);
      color: gray;
    }

    &:focus {
      border-color: rgba(255, 255, 255, 0.4);
      background-color: rgba(255, 255, 255, 0.035);
    }
  }
}
</style>
