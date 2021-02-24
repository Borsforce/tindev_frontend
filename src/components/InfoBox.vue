<template>
  <div class="card">
    <div class="grid-1">
      <img :src="$props.image" class="avatar" />
      <div class="info-block">
        <span class="head-text">{{ $props.title }}</span>
        <span class="sub-text">{{ $props.subtitle }}</span>
        <a :href="$props.link"><span class="link-text">{{ $props.link }}</span></a>
      </div>
      <div class="badges">
        <slot v-for="badge in $props.badges" :key="badge">
          <Badge :badge="badge.badge" :link="badge.link" class="badge" />
        </slot>
      </div>
    </div>
    <div class="grid-2">
      <p class="desc-text">{{ $props.description }}</p>
      <a :href="$props.link"><p class="link-text">{{ $props.link }}</p></a>
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
  .badges {
    margin-top: 16px;
    margin-bottom: 37px;
  }
  .info-block {
    display: inline-block;
    margin-left: 18px;
    vertical-align: top;
  }
  .grid-1 {
    grid-area: "grid1";
    margin-top: 50px;
    margin-left: 50px;
  }
  .grid-2 {
    grid-area: "grid2";
    margin-left: 85px;
    margin-top: 50px;
    margin-right: 155px;
  }
  .card {
    display: grid;
    grid-template-rows: auto;
    grid-template-areas:
      "grid1 grid2";
    background-color: #131315;
    border-radius: 30px;
  }
  .avatar {
    width: 120px;
    height: 120px;
    border: 2px solid #9C5EEB;
    border-radius: 50%;
  }
  span, p {
    color: #fff;
    font-family: Poppins;
    display: block;
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
