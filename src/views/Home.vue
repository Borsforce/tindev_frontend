<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <InfoBox image="Test" title="Test" subtitle="Test" description="Test" link="Test"
    :badges="[{badge: 'Test1', link: 'Test1'},{badge: 'Test2', link: 'Test2'}]" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'Home',
  components: {
    InfoBox,
  },
};
</script>
