<template>
  <div class="carousel">
    <!-- swiper -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in swiperData" :key="index">
        <img class="myswiper_img" :src="item" alt />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carousel",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        autoplay: {
          delay: 100000,
          disableOnInteraction: false
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="less" scoped>
.carousel {
  /deep/ .swiper-pagination-bullet-active {
    background: #fff;
  }
  .myswiper_img {
    width: 100%;
    height: 4rem;
  }
}
</style>
