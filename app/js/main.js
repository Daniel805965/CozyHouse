var swiper = new Swiper('.js-our-friends', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: '.js-our-friends-next',
      prevEl: '.js-our-friends-prev',
    },
  });

  var swiper = new Swiper('.Pets-swiper', {
    slidesPerView: 8,
    slidesPerColumn: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });