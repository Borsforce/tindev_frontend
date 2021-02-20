<template>
  <div>
    <img :src="name" />
    <p>{{ title }}</p>
    <p>{{ subtitle }}</p>
    <p>{{ description }}</p>
    <a :href="link">link</a>
    <div v-for="badge in badges" :key="badge">
      <Badge :badge="badge.badge" :link="badge.link" />
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue';

export default {
  name: 'InfoBox',
  props: {
    image: String,
    title: String,
    subtitle: String,
    description: String,
    link: String,
    badges: {
      badge: String,
      link: String,
    },
  },
  components: {
    Badge,
  },
};
</script>
