<template>
  <div class="container relative p-8 m-auto swipe">
    <div class="carousel_row">
      <carousel :initialSlide="0">
        <!-- Hier mit funkt das Carousel -->
        <slide v-for="(slide, key) in this.filterProps()" :key="slide">
          <img v-if="key == 'image'" :src="slide" class="slider_image" />
          <p v-if="key == 'description'" class="silder_text"> {{slide}} </p>
          <p v-if="key == 'informations'" class="silder_text"> {{slide}} </p>
        </slide>
        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
    <div class="title_row">
      <span class="title">{{ this.$props.title }}</span>
      <span class="subtitle">{{ this.$props.subtitle }}</span>
    </div>
    <div class="button_row">
      <IconButton>
        <Icon name="cross-2" />
      </IconButton>
      <IconButton>
        <Icon name="check" />
      </IconButton>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel,
  Slide,
  Pagination,
} from 'vue3-carousel';
import IconButton from './IconButton.vue';
import Icon from './Icon.vue';

export default defineComponent({
  name: 'Swipe',
  props: {
    image: { type: String, default: '' },
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    informations: { type: String, default: '' },
    description: { type: String, default: '' },
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    IconButton,
    Icon,
  },
  methods: {
    filterProps() {
      const result = {
        image: this.$props.image,
        informations: this.$props.informations,
        description: this.$props.description,
      };
      return result;
    },
  },
});
</script>
