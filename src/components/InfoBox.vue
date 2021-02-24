<template>
  <div>
    <img :src="$props.name" class="avatar" />
    <p class="head-text">{{ $props.title }}</p>
    <p class="sub-text">{{ $props.subtitle }}</p>
    <p class="desc-text">{{ $props.description }}</p>
    <a :href="$props.link"><p class="link-text">link</p></a>
    <div v-for="badge in badges" :key="badge">
      <Badge :badge="badge.badge" :link="badge.link" class="badge" />
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue';

export default {
  name: 'InfoBox',
  props: {
    image: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    credits: {
      type: Number,
      default: 0,
    },
    subtitle: {
      type: String,
      default: undefined,
    },
    description: {
      type: String,
      default: undefined,
    },
    link: {
      type: String,
      default: undefined,
    },
    badges: {
      badge: {
        type: String,
        default: undefined,
      },
      link: {
        type: String,
        default: undefined,
      },
    },
  },
  components: {
    Badge,
  },
};
</script>

<style scoped lang="scss">
  .avatar {
    width: 120px;
    height: 120px;
    border: 2px solid #9C5EEB;
    border-radius: 50%;
  }
  p {
    color: #fff;
    font-family: Poppins;
  }
  .head-text {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
  }
  .sub-text {
    font-size: 14px;
    line-height: 20px;
  }
  .link-text {
    font-size: 14px;
    line-height: 20px;
  }
  .desc-text {
    color: #B7B7B7;
    font-size: 14px;
    line-height: 20px;
  }
  .badge {
    height: 22px;
    width: 22px;
  }
</style>
