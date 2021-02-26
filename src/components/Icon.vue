<template>
  <component :is="name" role="img" :width="width" :height="height" />
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
    width: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
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
