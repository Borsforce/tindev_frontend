<template>
  <p>{{ title }}</p>
  <p>{{ description }}</p>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped>

</style>
