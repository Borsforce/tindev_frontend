<template>
  <form class="form">
    <FormGroup>
      <slot v-for="slot in this.$slots">{{ slot }}</slot>
    </FormGroup>
    <div class="formoptions">
      <button type="submit" class="formoption submitbutton">Submit</button>
    </div>
  </form>
</template>

<script>
import { defineComponent } from 'vue';
import FormGroup from './FormGroup.vue';

export default defineComponent({
  components: { FormGroup },
  name: 'Form',
  data() {
    return {};
  },
});
</script>
<style lang="scss">
.form {
  display: flex;
  width: 100%;
  flex-flow: row wrap;

  .formoptions {
    display: flex;
    flex-flow: row-reverse wrap;
    align-items: flex-end;
    width: 100%;

    .formoption {
      align-self: flex-end;
    }

    .submitbutton {
      margin-top: 2rem;
    }
  }
}
</style>
