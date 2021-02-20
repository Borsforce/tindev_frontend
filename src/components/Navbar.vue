<template>
  <nav class="flex flex-col content-between text-left text-lg text-white p-12 text-white bg-navbar leading-6">
    <router-link to="/" class='font-bold'>{{ $t('menu.home') }}</router-link>
    <router-link to="/profile/" class='mt-7'>{{ $t('menu.profile') }}</router-link>
    <router-link to="/job-finder/" class='mt-7'>{{ $t('menu.jobFinder') }}</router-link>
    <router-link to="/projects/" class='mt-7'>{{ $t('menu.projects') }}</router-link>
    <router-link to="/companies/" class='mt-7'>{{ $t('menu.companies') }}</router-link>
    <router-link to="/messages/" class='mt-7'>{{ $t('menu.messages') }}</router-link>
    <router-link to="/settings/" class='mt-7'>{{ $t('menu.settings') }}</router-link>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>
<style>
.bg-navbar{
  background-color: #181818;
}
</style>
