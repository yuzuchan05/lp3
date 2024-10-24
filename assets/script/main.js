/* 手動slider
-----------------------------------------*/
var mySwiper = new Swiper(".swiper", {
  loop: true,
  speed: 1000,
  slidesPerView: 1,  // SP表示時のスライド数
  slidesPerGroup: 1,
  spaceBetween: 15,
  centeredSlides: false, // スライドを中央揃えしない
  watchOverflow: true, // スライド数が少ない場合に無限ループを防ぐ

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
    },
  },
  breakpoints: {
      768: {
          slidesPerView: 3,   // pc表示(768~1199px)時のスライド数
          slidesPerGroup: 1,
          spaceBetween: 12,
          pagination: {
              el: null,
          },
      },
  },
});