<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Card image="https://yt3.ggpht.com/ytc/AAUvwnhBQAGf2nrKM3qY6B2LdZfGIkhKpjfYF87WF9Zj=s88-c-k-c0x00ffffff-no-rj"
          title="Test"
          meta="3 mins ago"
          :callback="(() => console.log('test'))"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'Home',
  components: {
    Card,
  },
};
</script>
