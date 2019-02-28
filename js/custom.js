$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});

    $('.slider').slick({
  autoplay: true,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: false,
  dots: true,
}).slickAnimation();
// written by lohith 
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    items: 4,
    margin:10,
    nav:true,
    navText: [
      "<i class='icofont-simple-left'></i>",
      "<i class='icofont-simple-right'></i>"
    ],
    stagepadding: 50,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
  });
    
});
///////////////////
$('.carousel1').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='icofont-simple-left'></i>",
    "<i class='icofont-simple-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    580: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$('.carousel4').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='icofont-simple-left'></i>",
    "<i class='icofont-simple-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
});
var btn = $('#backtotop');
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});




     $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });


$("button.expnd").click(function(){
      $(this).toggleClass("cls-btns").removeClass('expnd');
  $(".expand-divs").toggleClass("container");
     
});





$(".btn").click(function(){
  $(".input").toggleClass("active").focus;
  $(this).toggleClass("animate");
  $(".input").val("");
});


