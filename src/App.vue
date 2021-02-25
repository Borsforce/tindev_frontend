<template>
  <div class="overview-page">
    <div class='header'>
      <div class='overview-logo'>
        <img alt='Tindev' src='@/assets/logo.png' />
      </div>
      <div class='overview--icon-wrapper'>
        <Icon name='message'/>
        <Icon name='user'/>
        <Icon name='settings'/>
      </div>
    </div>
    <div class='sidebar'>
      <router-link to="/">{{ $t('menu.home') }}</router-link>
      <router-link to="/profile/">{{ $t('menu.profile') }}</router-link>
      <router-link to="/job-finder/">{{ $t('menu.jobFinder') }}</router-link>
      <router-link to="/projects/">{{ $t('menu.projects') }}</router-link>
      <router-link to="/companies/">{{ $t('menu.companies') }}</router-link>
      <router-link to="/messages/">{{ $t('menu.messages') }}</router-link>
      <router-link to="/settings/">{{ $t('menu.settings') }}</router-link>
      <router-view />
    </div>
    <div class='footer'>
      <img alt='Tindev' src='@/assets/logo.png' />
      <router-link to="/">{{ $t('menu.home') }}</router-link>
      <router-link to="/profile/">{{ $t('menu.profile') }}</router-link>
      <router-link to="/job-finder/">{{ $t('menu.jobFinder') }}</router-link>
      <router-link to="/projects/">{{ $t('menu.projects') }}</router-link>
    </div>
  </div>
</template>

<style lang='scss'>
  @import '@/assets/scss/home.scss';
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import Icon from '@/components/Icon.vue';
// import Button from '../components/Button.vue';
// import IconButton from '../components/IconButton.vue';

export default {
  name: 'Home',
  components: {
    // Button,
    // IconButton,
    // Icon,
  },
};
</script>
