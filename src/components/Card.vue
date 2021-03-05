<template>
  <div class="cardgroup">
    <div class="cardgroup__card">
      <img :src="$props.image" class="cardgroup__avatar" />
      <p>
        <span class="cardgroup__title">{{ $props.title }}</span>
        <span class="cardgroup__meta">{{ $props.meta }}</span>
      </p>
      <p>
        <Icon name="star" class="cardgroup__card-icon like" />
        <Icon name="chat-bubble" class="cardgroup__card-icon cardgroup__comment" />
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from '@/components/Icon.vue';

export default defineComponent({
  name: 'Card',
  props: {
    image: { type: String, default: undefined },
    title: { type: String, default: undefined },
    meta: { type: String, default: undefined },
    callback: { type: Function, default: undefined },
  },
  components: {
    Icon,
  },
});
</script>
