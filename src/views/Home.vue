<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <VSpacer />
    <HSpacer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import VSpacer from '../components/VSpacer.vue';
import HSpacer from '../components/HSpacer.vue';

export default {
  name: 'Home',
  components: { HSpacer, VSpacer },
};
</script>
