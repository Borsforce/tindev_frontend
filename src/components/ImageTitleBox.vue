<template>
  <div
    class="container flex flex-col items-start text-left p-4 rounded-3xl m-auto w-auto imagetitlebox"
  >
    <div class="flex flex-row w-full">
      <img :src="this.$props.image" class="w-20 image" />
      <div class="p-2 text-lg flex flex-col w-full items-start">
        <span class="font-bold w-full">{{ this.$props.title }}</span>
        <span v-if="this.$props.location !== undefined" class="">{{ this.$props.location }}</span>
      </div>
    </div>
    <span
      v-if="this.$props.description !== undefined"
      class="flex items-start p-2 text-lg w-full "
      >{{ this.$props.description }}</span
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageTitleBox',
  props: {
    image: { type: String },
    title: { type: String, default: '' },
    location: { type: String, default: undefined },
    description: { type: String, default: undefined },
  },
});
</script>

<style>
.imagetitlebox {
  color: white;
  background-color: #111;
}
.title {
  width: 100%;
}
</style>
