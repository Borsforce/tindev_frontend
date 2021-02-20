<template>
  <div class="grid grid-cols-1 md:grid-cols-6 grid-flow-col">
    <Navbar class="col-span-full md:col-span-1" />
    <figure class="bg-gray-100 rounded-xl p-8 col-span-full md:col-span-5">
      <img class="w-32 h-32" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
      <div class="pt-6 space-y-4">
        <blockquote>
          <p class="text-lg">
            “Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to
            customize, adapts to any design, and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div>
            Sarah Dayan
          </div>
          <div>
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
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
<style>
</style>
