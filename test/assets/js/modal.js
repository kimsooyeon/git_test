$(document).ready(function() {
    $('#fullpage').fullpage({
        //sectionsColor: ['rgb(241, 241, 241)', 'rgb(228, 228, 228)', 'rgb(212, 212, 212)', 'rgb(204, 204, 204)', 'rgb(190, 190, 190)'],
        anchors: ['main', 'hot', 'deadline', 'byfield', 'organ', 'footer'],
        menu: '#menu',
        autoScrolling: false,
        responsiveWidth: 1600,
        bigSectionsDestination: top,
        keyboardScrolling: true,
        navigation: true,
        navigationTooltips: ['Main', 'HOT 지원사업', '마감임박', '분야별 지원사업', '주관기관'],
    });

    /* main visual */
    let ww = window.innerWidth;
    let vSwiper;

    responsiveSwiper();
    function initSwiper(effect) {
        if (typeof(vSwiper) == 'object') vSwiper.destroy();

        return vSwiper = new Swiper('.v_swiper', {
            loop: true,
            loopAdditionalSlides: 1,
            autoplay : {
                delay : 5000,
                disableOnInteraction : false,
            },
            pagination: {
                el: '.v_swiper_control .swiper-pagination',
                type : 'fraction',
                clickable: true,		
            },
            navigation: {
                nextEl: '.v_swiper_control .swiper-button-next',
                prevEl: '.v_swiper_control .swiper-button-prev',
            },
            effect: effect,
        })
    }
    function responsiveSwiper() {
        if (ww >= 1200) {
        // 슬라이드 효과
            initSwiper('fade');
        } else if (ww < 1200) {
        // 페이드 효과
            initSwiper('slide');
        }
    }
    window.addEventListener('resize', function() {
        ww = window.innerWidth;
        responsiveSwiper();
    });

    /* main visual control */
    $('.v_swiper_control .swiper-button-pause').on('click', function(){
        if($('.v_swiper_control').hasClass('active')){
            $('.v_swiper_control').removeClass('active');
            vSwiper.autoplay.stop();
        } else {
            $('.v_swiper_control').addClass('active');
            vSwiper.autoplay.start();
        }
    });

	/* popupzone */
    var pzSwiper = new Swiper('.pz_swiper', {
        loop: true,
        loopAdditionalSlides: 1,
        autoplay : {
            delay : 2000,
            disableOnInteraction : false,
        },
        pagination: {
            el: '.pz_swiper_control .swiper-pagination',
            type : 'fraction',
            clickable: true,		
        },
        navigation: {
            nextEl: '.pz_swiper_control .swiper-button-next',
            prevEl: '.pz_swiper_control .swiper-button-prev',
        },
    });

    /* popupzone control */
    $('.pz_swiper_control .swiper-button-pause').on('click', function(){
        if($('.pz_swiper_control').hasClass('active')){
            $('.pz_swiper_control').removeClass('active');
            pzSwiper.autoplay.stop();
        } else {
            $('.pz_swiper_control').addClass('active');
            pzSwiper.autoplay.start();
        }
    });

	/* byfield_tab */
	$('.byfield_tab li').on('click', function(){
        $('.byfield_tab li').removeClass('on');
		$(this).addClass('on');
    });

	/* organ1 swiper */
    var organ1Swiper = new Swiper('.organ_swiper.organ1', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
		allowTouchMove : false,
        /*
        autoplay : {
            delay : 2000,
            disableOnInteraction : false,
        },
        */
        pagination: {
            el: '.organ_swiper_control.organ1 .swiper-pagination',
            type : 'fraction',
            clickable: true,		
        },
        navigation: {
            nextEl: '.organ_swiper_control.organ1 .swiper-button-next',
            prevEl: '.organ_swiper_control.organ1 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1,  // 0-500
                spaceBetween: 20,
				allowTouchMove : true,
            },
            768: {
                slidesPerView: 2,  //500-768
                spaceBetween: 20,
				allowTouchMove : true,
            },
            
        },
    });

    /* organ1 swiper control */
    $('.organ_swiper_control.organ1 .swiper-button-pause').on('click', function(){
        if($('.organ_swiper_control.organ1').hasClass('active')){
            $('.organ_swiper_control.organ1').removeClass('active');
            organ1Swiper.autoplay.stop();
        } else {
            $('.organ_swiper_control.organ1').addClass('active');
            organ1Swiper.autoplay.start();
        }
    });

    /* organ2 swiper */
    var organ2Swiper = new Swiper('.organ_swiper.organ2', {
        slidesPerView: 3,   
		spaceBetween: 20,
        loop: true,
        loopAdditionalSlides: 1,
        /*
        autoplay : {
            delay : 2000,
            disableOnInteraction : false,
        },
        */
        pagination: {
            el: '.organ_swiper_control.organ2 .swiper-pagination',
            type : 'fraction',
            clickable: true,		
        },
        navigation: {
            nextEl: '.organ_swiper_control.organ2 .swiper-button-next',
            prevEl: '.organ_swiper_control.organ2 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1,  // 0-500
                spaceBetween: 20,
				allowTouchMove : true,
            },
            768: {
                slidesPerView: 2,  //500-768
                spaceBetween: 20,
				allowTouchMove : true,
            },
            
        },
    });

    /* organ2 swiper control */
    $('.organ_swiper_control.organ2 .swiper-button-pause').on('click', function(){
        if($('.organ_swiper_control.organ2').hasClass('active')){
            $('.organ_swiper_control.organ2').removeClass('active');
            organ2Swiper.autoplay.stop();
        } else {
            $('.organ_swiper_control.organ2').addClass('active');
            organ2Swiper.autoplay.start();
        }
    });

    /* mSearch (모바일 검색영역) */
    $('.mSearch').on('click', function(){
        if($('.main_top').hasClass('on')){
            $('.main_top').removeClass('on');
            $('.mSearch').removeClass('on');
        } else {
            $('.main_top').addClass('on');
            $('.mSearch').addClass('on');
        }
    });

	/* top_util (로그인 후 마이페이지 부분) */
	if ($(window).width() <= 1200) {
		$('.utilBtn + ul').css('display','flex');
	} else {
		$('.utilBtn + ul').css('display','none');
	}
	$('.utilBtn').on('click', function(e) {
		if ($(window).width() <= 1200) {
			
		} else {
			e.preventDefault();
		}
		if(!$(this).hasClass('on')){
			$('.utilBtn').addClass('on');
			$('.utilBtn + ul').slideDown({
				duration: 500,
				start: function(){
					$(this).css({
						display: "flex"
					});
				}
			});
		} else {
			$('.utilBtn').removeClass('on');
			$('.utilBtn + ul').slideUp();
		}
	});

	$(window).on('resize', function(){
		if ($(window).width() <= 1200) {
			$('.utilBtn + ul').css('display','flex');
			$('.utilBtn + ul li a').css({'background':'#fff','color':'#000'});
			$('.utilBtn').on('click', function(e) {
				e.preventDefault();
			});
		}
	});

});