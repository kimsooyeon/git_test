$(function () {
  /* Left Menu 슬라이드 */
  $('.toggle').on('click', function () {
    if ($('.left_nav').hasClass('close')) {
      $('.left_nav').removeClass('close');
    } else {
      $('.left_nav').addClass('close');
    }
  });

  /* 모달팝업 js */
  $('.btn[class*="popup_"],a[class*="popup_"]').click(function (e) {
    e.preventDefault();
    var popNum;
    var str = $(this).attr('class'); // 클래스 모두 가져옴
    var afterStr = str.split(' '); // 공백을 기준으로 클래스를 나눠 배열에 저장
    $.each(afterStr, function (index, popCl) {
      if (popCl.startsWith('popup_')) {
        // 배열 요소 중에 popup_로 시작하는 단어가 있다면
        popNum = popCl.split('_').reverse()[0]; // _를 기준으로 나누어서 숫자만 추출
      }
    });
    $('#popup_' + popNum).bPopup({
      // #popup_ + 숫자 해서 모달 출력
      follow: [false, false],
      positionStyle: 'fixed',
      opacity: 0.5,
    });
  });
  $('.popup').draggable();
  $('.popup').draggable({
    cancel: '.popup-body',
    containment: 'parent',
    scroll: false,
  });
});
