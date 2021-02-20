<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Skill title="Test" description="blablablablalbasl"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Skill from '@/components/Skill.vue';

export default {
  name: 'Home',
  components: {
    Skill,
  },
};
</script>
