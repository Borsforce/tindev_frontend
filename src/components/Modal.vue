<template>
  <div class="modal">
    <div class="modalheader">
      <span class="title">{{ this.$attrs['modal-title'] }}</span>
      <div class="modaloptions">
        <span class="option modalclose" v-on:click="this.onClose()">
          <Icon name="cross-1" />
        </span>
      </div>
    </div>
    <Form>
      <slot v-for="slot in this.$slots">{{ slot }}</slot>
    </Form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';
import Form from './Form.vue';

export default defineComponent({
  name: 'Modal',
  components: { Icon, Form },
  data() {
    return {};
  },
  methods: {
    onClose() {
      if ('onClose' in this.$attrs) {
        this.$attrs.onClose();
      }
    },
  },
});
</script>

<style lang="scss">
.modal {
  display: flex;
  flex-flow: row wrap;
  border-radius: 2rem;
  background-color: $moduleColor;
  color: $textColor;
  padding: 2.5rem;

  .modalheader {
    display: flex;
    width: 100%;
    margin-bottom: 1.5rem;
    align-items: center;

    .title {
      width: auto;
      height: auto;
      font-size: 2rem;
      font-weight: 500;
    }

    .modaloptions {
      display: flex;
      flex-flow: row wrap;
      margin-left: auto;
      align-items: flex-end;
    }

    .modalclose {
      align-self: flex-end;
      cursor: pointer;
      opacity: 0.4;

      &:hover {
        opacity: 0.6;
      }

      &:active {
        opacity: 1;
      }

      svg {
        transform: scale(1.5);
        justify-self: center;
      }
    }
  }
}
</style>
