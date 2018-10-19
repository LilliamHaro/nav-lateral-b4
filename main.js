$(document).ready(function(){
  $('.nav-cross').on('click',function(event){
      $('.collapse').removeClass('show');
      $('.nav-item').removeClass('nav-item-show');
      $('.nav-cross').removeClass('nav-item-show');
      $('.nav-social ul li').removeClass('nav-item-show')
      // to right
      // $('.nav-cross svg g').removeClass('svg-hover');
  })
  $('.nav-link').on('click',function(){
    $('.collapse').removeClass('show');
    $('.nav-item').removeClass('nav-item-show');
    $('.nav-cross').removeClass('nav-item-show');
    $('.nav-social ul li').removeClass('nav-item-show')
    // to right
    // $('.nav-cross svg g').removeClass('svg-hover');
  })

  $('.navbar-toggler').on('click',function(event){
    setTimeout(function(){
      $('.nav-item').addClass('nav-item-show');
    },350)

    setTimeout(function(){
      $('.nav-cross').addClass('nav-item-show');
      $('.nav-social ul li').addClass('nav-item-show')
    },500)

    setTimeout(function(){
      $('.nav-social ul li').addClass('nav-item-show')
    },900)
  })
  

  $('.nav-cross').on('mouseover',function(event){
    $('.nav-cross svg g').addClass('svg-hover');
  })
  $('.nav-cross').on('mouseout',function(event){
    $('.nav-cross svg g').removeClass('svg-hover');
  })
  
})