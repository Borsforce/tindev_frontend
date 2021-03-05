<template>
  <div class="infoboxgroup">
    <div class="infoboxgroup__card">
      <div class="infoboxgroup__grid-1">
        <img :src="$props.image" class="infoboxgroup__avatar" />
        <div class="infoboxgroup__info-block">
          <span class="infoboxgroup__head-text">{{ $props.title }}</span>
          <span class="infoboxgroup__sub-text">{{ $props.subtitle }}</span>
          <a :href="$props.link"
            ><span class="infoboxgroup__link-text">{{ $props.link }}</span></a
          >
        </div>
        <div class="infoboxgroup__badges">
          <slot v-for="badge in $props.badges" :key="badge">
            <Badge :badge="badge.badge" :link="badge.link" class="infoboxgroup__badge" />
          </slot>
        </div>
      </div>
      <div class="infoboxgroup__grid-2">
        <p class="infoboxgroup__desc-text">{{ $props.description }}</p>
        <a :href="$props.link"
          ><p class="infoboxgroup__link-text">{{ $props.link }}</p></a
        >
      </div>
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
