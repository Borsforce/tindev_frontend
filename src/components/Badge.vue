<template>
  <a :href="link">{{ badge }}</a>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    badge: String,
    link: String,
  },
};
</script>
