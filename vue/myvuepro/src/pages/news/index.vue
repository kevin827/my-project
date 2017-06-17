<template>
	<div>
	    <header-top title="新闻"></header-top>
		<div class="main">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
		</div>

		<footer-bottom></footer-bottom>


	</div>
</template>


<script>
   import Vue from "vue"
   import headerTop from '../../components/common/header'
   import footerBottom from '../../components/common/footer'
   import {Toast} from 'mint-ui';
   export default {
      data() {
          return {

          }
		},
	    components:{
			headerTop,
			footerBottom
		},
     mounted(){
       var dom=document.querySelector(".swiper-container");
       var mySwiper =new this.$swiper(dom, {
         direction: 'vertical',
         loop: true,

         // 如果需要分页器
         pagination: '.swiper-pagination',

         // 如果需要前进后退按钮
         nextButton: '.swiper-button-next',
         prevButton: '.swiper-button-prev',

         // 如果需要滚动条
         scrollbar: '.swiper-scrollbar',
       })
     }

   }
   Toast({
     message: 'Upload Complete',
     position: 'bottom',
     duration: 5000
   });
</script>


<style scoped>
  .swiper-container {
    width: 100%;
    height: 200px;
  }
  .swiper-slide{
      background: red;
    }
</style>
