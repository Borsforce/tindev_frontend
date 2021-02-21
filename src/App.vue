<template>
  <div class="grid grid-cols-1 md:grid-cols-6 grid-flow-col font-custom">
    <Navbar class="col-span-full md:col-span-1" />
  </div>
  <router-view />
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

