document.addEventListener('DOMContentLoaded', function () {
  const heroSwiper = new Swiper('.hero__content', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.hero__navigation__btn_next',
      prevEl: '.hero__navigation__btn_prev',
    },
    effect: 'fade',
    speed: 400,
  })

  // -----------------------------------

  if ($(window).width() >= 769) {
    window.addEventListener('scroll', function () {
      let header = document.querySelector('header')
      header.classList.toggle('scroll', window.scrollY > 150)
    })

    $('.sublist').mouseover(function () {
      $('.sublist')
        .not(this)
        .removeClass('active')
        .find('.header-dropdown')
        .slideUp(0)
      $(this).addClass('active').find('.header-dropdown').slideDown(0)
    })

    $('.header-dropdown__list li').mouseover(function () {
      $(this).parent().find('li').removeClass('active')
      $(this).addClass('active')
      var data = $(this).data('sublist')
      $(this)
        .parent()
        .next()
        .find('.header-dropdown__sublist')
        .removeClass('active')
      $(this)
        .parent()
        .next()
        .find('.header-dropdown__sublist[data-sublist=' + data + ']')
        .addClass('active')
    })

    $('.header').mouseleave(function () {
      $('.header-dropdown').slideUp(0)
      $('.sublist').removeClass('active')
    })

    $('.header-list > li:not(".sublist")').mouseover(function () {
      $('.sublist').removeClass('active').find('.header-dropdown').slideUp(0)
    })

    $('.header-search-btn').click(function (e) {
      e.preventDefault()
      $(this).closest('form').addClass('active')
    })

    $(document).mouseup(function (e) {
      var div = $('.header-search')
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.header-search').removeClass('active')
      }
    })
  } else {
    $('.sublist').click(function () {
      $('.sublist')
        .not(this)
        .removeClass('active')
        .find('.header-dropdown')
        .slideUp()
      $(this).toggleClass('active').find('.header-dropdown').slideToggle()
    })
  }

  // // --------------------------------------------

  const menuBurger = document.querySelector('.header__burger')
  const navItem = document.querySelectorAll('.nav__link')
  const menuBody = document.querySelector('.header__nav')

  if (menuBurger) {
    menuBurger.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock')
      menuBurger.classList.toggle('_active')
      menuBody.classList.toggle('header__nav_active')
    })

    if (navItem) {
      navItem.forEach((element) => {
        element.addEventListener('click', function () {
          document.body.classList.remove('_lock')
          menuBurger.classList.remove('_active')
          menuBody.classList.remove('header__nav_active')
        })
      })
    }
  }

  // ---------------------------------------------------------
})
