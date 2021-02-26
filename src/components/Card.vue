<template>
  <div class="container mx-auto card rounded-lg">
    <img :src="image" class="rounded-full avatar" />
    <p>
      <span class="text-left title">{{ title }}</span>
      <span class="meta">{{ meta }}</span>
    </p>
    <p>
      <span class="like" v-on:click="() => console.log('Like!')">Like</span>
      <span class="comment" v-on:click="() => console.log('Comment!')">Comment</span>
    </p>
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
  text-align: left;
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
  padding-left: 9px;
  color: #717171;
  font-family: Poppins;
  font-size: 12px;
  line-height: 17px;
}
.like {
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding-bottom: 15px;
  padding-left: 55px;
}
.comment {
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding-bottom: 15px;
  padding-left: 28px;
}
</style>
