<template>
  <div class="overview-page container">
    <div class='header'>
      <div class='overview-logo'>
        <img alt='Tindev' src='@/assets/logo.png' />
      </div>
      <div class='overview--icon-wrapper'>
        <Icon name='envelope-closed'/>
        <Icon name='person'/>
        <Icon name='gear'/>
      </div>
    </div>
    <div class='sidebar'>
      <div class='overview-profile-info'>
        <div class='overview-profile-info--image'>
          <img alt='Tindev' src='@/assets/profile-image.png' />
        </div>
        <div class='overview-profile-info--text'>
          <h6> Joeel56</h6>
          <span>Frontend Dev</span>
        </div>
      </div>
      <div class='overview-sidebar--links'>
        <router-link to="/">{{ $t('menu.home') }}</router-link>
        <router-link to="/profile/">{{ $t('menu.profile') }}</router-link>
        <router-link to="/job-finder/">{{ $t('menu.jobFinder') }}</router-link>
        <router-link to="/projects/">{{ $t('menu.projects') }}</router-link>
        <router-link to="/companies/">{{ $t('menu.companies') }}</router-link>
        <router-link to="/messages/">{{ $t('menu.messages') }}</router-link>
        <router-link to="/settings/">{{ $t('menu.settings') }}</router-link>
        <router-view />
      </div>
    </div>
    <div class='main'>
    </div>
    <div class='footer'>
      <img alt='Tindev' src='@/assets/logo.png' />
      <span>{{ $t('footer.gtc') }}</span>
      <router-link to="/">{{ $t('menu.home') }}</router-link>
      <router-link to="/profile/">{{ $t('menu.profile') }}</router-link>
      <router-link to="/job-finder/">{{ $t('menu.jobFinder') }}</router-link>
      <router-link to="/projects/">{{ $t('menu.projects') }}</router-link>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import Button from '../components/Button.vue';
// import IconButton from '../components/IconButton.vue';

export default {
  name: 'Home',
  components: {
    // Button,
    // IconButton,
    Icon,
  },
};

</script>
<style lang='scss'>
  @import './assets/scss/base/main.scss';
  @import '@/assets/scss/home.scss';
</style>
