<template>
  <div class="nav font-custom">
    <router-link to="/">{{ $t('menu.home') }}</router-link>
    <router-link to="/profile/">{{ $t('menu.profile') }}</router-link>
    <router-link to="/job-finder/">{{ $t('menu.jobFinder') }}</router-link>
    <router-link to="/projects/">{{ $t('menu.projects') }}</router-link>
    <router-link to="/companies/">{{ $t('menu.companies') }}</router-link>
    <router-link to="/messages/">{{ $t('menu.messages') }}</router-link>
    <router-link to="/settings/">{{ $t('menu.settings') }}</router-link>
    <router-link to="/login/">{{ $t('menu.login') }}</router-link>
  </div>
  <router-view />
</template>
<style lang="scss">
@import './assets/scss/base/main.scss';
</style>
