<template>
  <div class="card">
    <img :src="$props.image" class="avatar" />
    <p>
      <span class="title">{{ $props.title }}</span>
      <span class="meta">{{ $props.meta }}</span>
    </p>
    <p>
      <Icon name="star" class="card-icon like" />
      <Icon name="chat-bubble" class="card-icon comment" />
    </p>
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

<style scoped lang="scss" >
  .card-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    padding-bottom: 15px;
  }
  .like {
    padding-left: 55px;
  }
  .comment {
    padding-left: 28px;
  }
  .card {
    background-color: #131315;
    color: #fff;
    text-align: left;
    border-radius: 25px;
  }
  .avatar {
    width: 53px;
    height: 53px;
    position: absolute;
    margin-top: -22px;
    margin-left: -3px;
    border-radius: 50%;
    border: 2px solid #9C5EEB;
  }
  .title {
    padding-top: 12px;
    padding-left: 57px;
    font-size: 18px;
    font-family: Poppins;
    font-weight: 700;
    line-height: 25px;
  }
  .meta {
    padding-top: 16px;
    padding-left: 9px;
    color: #717171;
    font-family: Poppins;
    font-size: 12px;
    line-height: 17px;
  }
</style>
