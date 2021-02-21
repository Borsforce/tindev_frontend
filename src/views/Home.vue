<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Icon name="activity-log" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Icon from '@/components/Icon.vue';

export default {
  name: 'Home',
  components: {
    Icon,
  },
};
</script>
