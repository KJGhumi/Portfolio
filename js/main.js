let ht = $(window).height();
let wt = $(window).width();

$('section').height(ht);

// 화면의 사이즈가 변하면 section 높이값을 고정
$(window).resize(function(){
  let ht = $(window).height();
  $('section').height(ht);
});

$('ul#menu li').click(function(e){

  // 고유의 기능을 막아준다. (a)
  e.preventDefault();

  let ht = $(window).height();
  let i = $(this).index();
  
  // 인덱스 값*높이 값
  let nowTop = i * ht;
  // 해당 위치로 스크롤
  $('html, body').stop().animate({scrollTop : nowTop},1000);
  console.log(nowTop);
});

// 스크롤 될 때 마다 현재 영역에 해당하는 메뉴 활성화
$(window).scroll(function(){

  let ht = $(window).height();

  // 현재 문서가 스크롤 된 거리
  let scroll = $(window).scrollTop();

  for( let i = 0; i < 8; i++ ) {
    if ( scroll >= ht * i && scroll < ht * (i+1)  ) {
      $('ul#menu li').removeClass();
      $('ul#menu li').eq(i).addClass('on');
    }
  }

  
});

// 마우스 휠의 움직임에 따라 화면 스크롤
$('section').mousewheel(function(event, delta){

  if( delta > 0 ) {
    let prev = $(this).prev().offset().top;
    $('html, body').stop().animate({scrollTop : prev}, 1000);
  } else if( delta < 0 ) {
    let next = $(this).next().offset().top;
    $('html, body').stop().animate({scrollTop : next}, 1000);
  }
});

// $(".progress span").each(function () {
//     $(this).animate(
//       {
//         width: $(this).attr("data-progress") + "%",
//       }, 1000);
// });

$(window).scroll(function(){

  let ht = $(window).height();
  // 현재 문서가 스크롤 된 거리
  let scroll = $(window).scrollTop();

  if ( scroll >= ht* 2 && scroll < ht * 3 ) {
    $('.bar .progress span').addClass('on');
  } else {
    $('.bar .progress span').removeClass();
  }

});

// gsap

const fadeEls1 = document.querySelectorAll('.fade1');
// console.log(fadeEls)
fadeEls1.forEach( function(fadeEl, index){
  //  gsap.to(요소, 지속시간, {옵션})
    gsap.to(fadeEl, 1, {
      // index를 활용하여 순차적응로 화면에 출력
      // 0.7, 1.4, 2.1, 2.8
      delay : (index + 1) * 0.5,
      opacity: 1
    });
});

$(window).scroll(function(){

  let ht = $(window).height();
  // 현재 문서가 스크롤 된 거리
  let scroll = $(window).scrollTop();

  const fadeEls2 =document.querySelectorAll('.fade2');
  if ( scroll >= ht * 1 && scroll < ht * 2 ) {
    fadeEls2.forEach( function(fadeEl, index){
        gsap.to(fadeEl, 1, {
          delay : (index + 1) * 0.5,
          opacity: 1
        });
    });
  } else {
    fadeEls1.opacity = 0;
  }

  const fadeEls3 =document.querySelectorAll('.fade3');
  if ( scroll >= ht * 2 && scroll < ht * 3 ) {
    fadeEls3.forEach( function(fadeEl){
        gsap.to(fadeEl, 1, {
          opacity: 1
        });
    });
  }

  const fadeEls4 =document.querySelectorAll('.fade4');
  if ( scroll >= ht * 3 && scroll < ht * 4 ) {
    fadeEls4.forEach( function(fadeEl, index){
        gsap.to(fadeEl, 1, {
          delay : (index + 1) * 0.3,
          opacity: 1
        });
    });
  }
  const fadeEls5 =document.querySelectorAll('.fade5');
  if ( scroll >= ht * 4 && scroll < ht * 5 ) {
    fadeEls5.forEach( function(fadeEl, index){
        gsap.to(fadeEl, 1, {
          delay : (index + 1) * 0.3,
          opacity: 1
        });
    });
  }
  const fadeEls6 =document.querySelectorAll('.fade6');
  if ( scroll >= ht * 5 && scroll < ht * 6 ) {
    fadeEls6.forEach( function(fadeEl, index){
        gsap.to(fadeEl, 1, {
          delay : (index + 1) * 0.5,
          opacity: 1
        });
    });
  }

});