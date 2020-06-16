$(function(){
    $('.slider').slick({
        autoplay: true,
        arrows: false,
        variableWidth: true
    });
});


$(function(){
    $('.partners__slider').slick({
        autoplay: true,
        arrows: false,
        variableWidth: true
    });
});

new WOW().init();

$(document).ready(function(){

        $("#menu").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
     
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
     
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
             
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

    $(document).ready(function(){
        PopUpHide();
    });
    function PopUpShow(){
        $("#modal").show();
    }
    function PopUpHide(){
        $("#modal").hide();
    }