<template>
  <div class="home">
    <div class="flex items-center align-center  justify-center mb-4">
      <Button size="sm" variant="primary">test123</Button>
      <Button size="sm" variant="secondary">test123</Button>
      <Button size="lg" variant="primary">test123</Button>
      <Button size="lg" variant="secondary">test123</Button>
      <Button>test123</Button>
    </div>
    <div class="flex items-center justify-center">
      <IconButton variant="primary">
        <Icon name="cross-1" width="15" height="15" />
      </IconButton>
      <span title="spacer"></span>
      <IconButton variant="secondary">
        <Icon name="cross-1" width="15" height="15" />
      </IconButton>
      <span title="spacer"></span>
      <IconButton size="lg" variant="primary">
        <Icon name="cross-1" width="30" height="30" />
      </IconButton>
      <span title="spacer"></span>
      <IconButton size="lg" variant="secondary">
        <Icon name="cross-1" width="30" height="30" />
      </IconButton>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import IconButton from '../components/IconButton.vue';
import Icon from '../components/Icon.vue';

export default {
  name: 'Home',
  components: {
    Button,
    IconButton,
    Icon,
  },
};
</script>
