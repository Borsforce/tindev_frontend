<template>
  <component :is="name" role="img" />
</template>

<script>
const context = require.context('@/assets/icons/', false, /.svg$/);
const icons = {};

context.keys().forEach((fileName) => {
  const iconName = fileName.replace(/^\.\/(.+)\.svg$/, '$1');
  const componentConfig = context(fileName);
  delete componentConfig.default.render().props.width;
  delete componentConfig.default.render().props.height;
  componentConfig.default.render().props.viewBox = '0 0 15 15';
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
      const icon = icons[this.name];

      if (this.$attrs.height) {
        icon.default.render().props.height = this.$attrs.height;
      }
      if (this.$attrs.width) {
        icon.default.render().props.width = this.$attrs.width;
      }
      return icon;
    },
  },
};
</script>
