<template>
  <div class="container mx-auto card rounded-lg">
    <img :src="image" class="rounded-full avatar" />
    <p class="text-left title">{{ title }}</p>
    <p class="text-left meta">{{ meta }}</p>+
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    image: String,
    title: String,
    meta: String,
    callback: Function,
  },
};
</script>

<style scoped>
  .card {
    background-color: #131315;
    color: #fff;
  }
  .avatar {
    width: 53px;
    height: 53px;
    position: absolute;
    margin-top: -22px;
    margin-left: -3px;
  }
  .title {
    padding-top: 12px;
    padding-left: 57px;
    font-size: 18px;
    font-family: Poppins;
    font-weight: 700;
    line-height: 25px;
  }
  .meta {
    padding-top: 16px;
    color: #717171;
    font-family: Poppins;
    font-size: 12px;
    line-height: 17px;
  }
</style>
