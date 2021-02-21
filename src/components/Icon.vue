<template>
  <component :is="name" role="img" />
</template>

<script>
const context = require.context('@/assets/icons/', false, /.svg$/);
const icons = {};

context.keys().forEach((fileName) => {
  const iconName = fileName.replace(/^\.\/(.+)\.svg$/, '$1');
  const componentConfig = context(fileName);
  icons[iconName] = componentConfig.default || componentConfig;
});

export default {
  name: 'Icon',
  components: icons,

  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value);
      },
    },
  },
  computed: {
    iconComponent() {
      return icons[this.name];
    },
  },
};
</script>
