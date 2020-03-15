<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="img-shadow">
      <!-- slides -->
      <swiper-slide>
        <img class="banner swiper-lazy" data-src="/assets/map-main-01.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="banner swiper-lazy" data-src="/assets/map-main-02.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="banner swiper-lazy" data-src="/assets/map-main-03.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="banner swiper-lazy" data-src="/assets/map-main-04.png" alt="" />
      </swiper-slide>
      <!-- Optional controls -->
      <div
        class="swiper-pagination swiper-pagination-white"
        slot="pagination"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        lazy: true,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style scoped>
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");
</style>
