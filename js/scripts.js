$(document).ready(function(){
    var waypoint = new Waypoint({
      element: document.getElementById('index'),
      handler: function() {
        $(".menu > ul li").removeClass("active");
        $(".index_link").addClass("active");
      }
    })
    var waypoint = new Waypoint({
      element: document.getElementById('how_it_works'),
      handler: function() {
        $(".menu > ul li").removeClass("active");
        $(".howitworks_link").addClass("active");
      }
    })
    var waypoint = new Waypoint({
      element: document.getElementById('our_team'),
      handler: function() {
        $(".menu > ul li").removeClass("active");
        $(".ourteam_link").addClass("active");
      }
    })
    var waypoint = new Waypoint({
      element: document.getElementById('pricing'),
      handler: function() {
        $(".menu > ul li").removeClass("active");
        $(".pricing_link").addClass("active");
      }
    })
    var waypoint = new Waypoint({
      element: document.getElementById('services'),
      handler: function() {
        $(".menu > ul li").removeClass("active");
        $(".services_link").addClass("active");
        $("#services .general, #services .nurse, #services .kine, #services .care, #services .care, #services .examn, #services .traslation").css({
          "transform": "scale(1)",
          "-webkit-transform" : "scale(1)",
          "-ms-transform-transform" : "scale(1)"
        });
      }
    })
    var waypoint = new Waypoint({
      element: document.getElementById('contact'),
      handler: function() {
        $(".menu > ul li").removeClass("active");
        $(".contact_link").addClass("active");
      }
    })
    //SELECT
    $(".pricing").change(function(){
      if ($(".pricing option:selected").val()=="normal")
      {
       $(".pricing_result").val( "Precio normal" );
        $(".pricing_result").css({ 
            "width":'80px'
        });
      }
      else
      {
        $(".pricing_result").val( "Esta comuna tiene recargo por zona" );
        $(".pricing_result").css({ 
            "width":'220px'
        });
      }
    });
    //POPUP FAQ
    $(".faq").click(function(){
        $(".bg_pop").fadeIn("fast");
        $(".faq_pop").fadeIn("slow");
        no_scrollbody();
    });
    $(".info").click(function(){
        $(".bg_pop").fadeIn("fast");
        $(".info_pop").fadeIn("slow");
        no_scrollbody();
    });
    $(".job").click(function(){
        $(".bg_pop").fadeIn("fast");
        $(".job_pop").fadeIn("slow");
        no_scrollbody();
    });
    $(".map").click(function(){
        $(".bg_pop").fadeIn("fast");
        $(".map_pop").fadeIn("slow");
        no_scrollbody();
    });
    //CLOSE ALL POP
    $(".close, .bg_pop").click(function(){
        $(".bg_pop").fadeOut("slow");
        $(".job_pop").fadeOut("fast");
        $(".info_pop").fadeOut("fast");
        $(".faq_pop").fadeOut("fast");
        $(".map_pop").fadeOut("fast");
        $(".success_pop").fadeOut("fast");
        scrollbody();
    });
    //DESPLEGAR EL MENU MOBILE
    $(".mobile_menu").click(function(){
        if($(".menu > ul").css("height")=='0px')
            {
                $(".menu > ul").css({
                                                    "height":'auto'
                                                });
                $(".mobile_menu").addClass("active");
            }
        else{
                $(".menu > ul").css({
                                                    "height":''
                                                });
                $(".mobile_menu").removeClass("active");
            }
    });
    $(".menu > ul a").click(function(){
        $(".menu > ul").css({
                            "height":''
                        });
        $(".mobile_menu").removeClass("active");
    });
    $(window).scroll(function(){
        $(".menu > ul").css({
                            "height":''
                        });
        $(".mobile_menu").removeClass("active");
    });
    //AGREGAR CLASE
    $('.menu > ul a li').click(function() {
        $('.menu > ul a li').removeClass('active');
        $(this).addClass('active');
    });
    //SMOOTH SCROLL
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
});
//SLIDER
$(document).ready(function($) {
  $('.my-slider').unslider({
    keys: true,
    dots: true,
    fluid: true,
    speed: 1000,
    delay: 5000,
    autoplay: true,
  });
});
//SCROLL
function no_scrollbody()
{
    $html = $('html'); 
    $body = $('body'); 
    var initWidth = $body.outerWidth();
    var initHeight = $body.outerHeight();

    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    $html.data('scroll-position', scrollPosition);
    $html.data('previous-overflow', $html.css('overflow'));
    $html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);   

    var marginR = $body.outerWidth()-initWidth;
    var marginB = $body.outerHeight()-initHeight; 
    $body.css({'margin-right': marginR,'margin-bottom': marginB});
}
function scrollbody()
{
    $html = $('html');
    $body = $('body');
    $html.css('overflow', $html.data('previous-overflow'));
    var scrollPosition = $html.data('scroll-position');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);    

    $body.css({'margin-right': 0, 'margin-bottom': 0});
        $("body, html").css({
                        "overflow-x":'hidden'
        });
}

function success()
{
  $(".bg_pop").fadeIn("fast");
  $(".success_pop").fadeIn("slow");
  no_scrollbody();
}

//SCROLL
$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $(".navbar_brand > img").css({
          "width":'200px',
          "display": 'block',
          "position": 'relative',
          "margin": '0 auto',
          "marginTop": '0.5rem',
          "marginBottom": '0.2rem'
        });
        $(".navbar_brand button").fadeOut("fast");
        $(".aux, .facebook, .twitter, .instagram").fadeOut("fast");
        $(".menu").css({
          "top":'4.3rem'
        });
        $(".mobile_menu").css({
          "top":'3.2rem'
        });
    } else{
        $(".navbar_brand > img").css({
          "width":'',
          "display": '',
          "position": '',
          "margin": '',
          "marginTop": '',
          "marginBottom": ''
        });

        $(".navbar_brand button").fadeIn("slow");
        $(".aux, .facebook, .twitter, .instagram").fadeIn("slow");
        $(".menu").css({
          "top":''
        });
        $(".mobile_menu").css({
          "top":''
        });
    }
});