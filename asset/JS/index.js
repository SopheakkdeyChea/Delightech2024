 
          $(document).ready(function(){
            $("#about").hover(function(){
               $("#about").html("About Us  <i class='fa fa-angle-up' id='iconUp'>");
               $("#iconDown").hide();
               $("ul ul").slideDown("slow");
           });
           $("ul ul li").hover(function(){      
            $("#about").html("About Us  <i class='fa fa-angle-up' id='iconUp'>");
               $("#iconDown").hide();
           });   
           $("#about").mouseleave(function(){
               $("#iconUp").hide();
               $("#about").html("About Us  <i class='fa fa-angle-down'>");    
            });
            $("#slideup-home").hover(function(){
              $("ul ul").slideUp("slow");
            });
            $("#slideup-invesment").hover(function(){
              $("ul ul").slideUp("slow");
            })
            $("#slideup-product").hover(function(){
              $("ul ul").slideUp("slow");
            })
            $("#slideup-careers").hover(function(){
              $("ul ul").slideUp("slow");
            })
            $("#slideup-contact").hover(function(){
              $("ul ul").slideUp("slow");
            })
    
            $("ul ul").mouseleave(function(){
               $("#iconUp").hide();
               $("#about").html("About Us  <i class='fa fa-angle-down'>");
                $("ul ul").slideUp("slow");
            });
           });
  
           $("ul ul li a").click(function(){
             $("ul ul").slideUp("slow");
             
      });

      
      var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();
    
    $(function() {
        var pause = 100;
        
    
        $(window).resize(function() {
            delay(function() {
                var width = $(window).width();
                if( width >= 768 && width <= 1024 ) {
                  var lastScrollTop=0;
              navbar=document.getElementById("nav-bar1");
              window.addEventListener("scroll",function(){
                  var scrollTop=window.pageYOffset ||document
                  .documentElement.scrollTop;
                  if(scrollTop>lastScrollTop){
                      navbar.style.top ="-80px";
                      $(".nav-bar li a").css("color","black")
                      $("#nav-bar1").css("background-color", "white");
                      $("#item").css("color", "black");
                      $("#item2").css("color", "black");
                      $("#item3").css("color", "black");
                      $("#item4").css("color", "black");
                      $("#item5").css("color", "black");
                      $("#item6").css("color", "black");
                      $(".check-btn").css("color","black");
                     
                  }else{
                      navbar.style.top="0";
                  }
                  if(scrollTop <100){
                      $("#nav-bar1").css("background-color", "#1D2432");
                      $("ul li a").css("color","black");
                      $("ul ul li a").css("color","black");
                      $(".check-btn").css("color","white");
                  }
                  lastScrollTop=scrollTop;
              });
    
              $(document).ready(()=>{
                      $(".nav-bar .check-btn i").click(()=>{
                          $(".nav-bar .check-btn i").css("display","none");
                          $(".nav-bar .check-btn span").css("display","block");
                      });
                      $(".nav-bar .check-btn span").click(()=>{
                         $(".nav-bar .check-btn i").css("display","block");
                         $(".nav-bar .check-btn span").css("display","none");
                         
                   });
                   $(".nav-bar ul a").click(()=>{
                     $(".nav-bar .check-btn i").css("display","block");
                       $(".nav-bar .check-btn span").css("display","none");
                    
                       
                   });
                 });
    
    
    
                } else if( width >= 479 && width <= 768 ){
                  var lastScrollTop=0;
              navbar=document.getElementById("nav-bar1");
              window.addEventListener("scroll",function(){
                  var scrollTop=window.pageYOffset ||document
                  .documentElement.scrollTop;
                  if(scrollTop>lastScrollTop){
                      navbar.style.top ="-80px";
                      $(".nav-bar li a").css("color","black")
                      $("#nav-bar1").css("background-color", "white");
                      $("#item").css("color", "black");
                      $("#item2").css("color", "black");
                      $("#item3").css("color", "black");
                      $("#item4").css("color", "black");
                      $("#item5").css("color", "black");
                      $("#item6").css("color", "black");
                      $(".check-btn").css("color","black");      
                  }else{
                      navbar.style.top="0";
                  }
                  if(scrollTop <=100){
                      $("#nav-bar1").css("background-color", "#1D2432");
                      $("ul li a").css("color","black");
                      $("ul ul li a").css("color","black");
                      $(".check-btn").css("color","white");
                  }
                  lastScrollTop=scrollTop;
              });
              $(document).ready(()=>{
                      $(".nav-bar .check-btn i").click(()=>{
                          $(".nav-bar .check-btn i").css("display","none");
                          $(".nav-bar .check-btn span").css("display","block");
                      });
                      $(".nav-bar .check-btn span").click(()=>{
                         $(".nav-bar .check-btn i").css("display","block");
                         $(".nav-bar .check-btn span").css("display","none");
                         
                   });
                   $(".nav-bar ul a").click(()=>{
                     $(".nav-bar .check-btn i").css("display","block");
                       $(".nav-bar .check-btn span").css("display","none");
                    
                       
                   });
                 });
                }else if(width<=479){
                  var lastScrollTop=0;
              navbar=document.getElementById("nav-bar1");
              window.addEventListener("scroll",function(){
                  var scrollTop=window.pageYOffset ||document
                  .documentElement.scrollTop;
                  if(scrollTop>lastScrollTop){
                      navbar.style.top ="-80px";
                      $(".nav-bar li a").css("color","black")
                      $("#nav-bar1").css("background-color", "white");
                      $("#item").css("color", "black");
                      $("#item2").css("color", "black");
                      $("#item3").css("color", "black");
                      $("#item4").css("color", "black");
                      $("#item5").css("color", "black");
                      $("#item6").css("color", "black");
                      $(".check-btn").css("color","black");
                     
                  }else{
                      navbar.style.top="0";
                  }
                  if(scrollTop <=100){
                      $("#nav-bar1").css("background-color", "#1D2432");
                      $("ul li a").css("color","black");
                      $("ul ul li a").css("color","black");
                      $(".check-btn").css("color","white");
                  }
                  lastScrollTop=scrollTop;
              });
    
              $(document).ready(()=>{
                      $(".nav-bar .check-btn i").click(()=>{
                          $(".nav-bar .check-btn i").css("display","none");
                          $(".nav-bar .check-btn span").css("display","block");
                      });
                      $(".nav-bar .check-btn span").click(()=>{
                         $(".nav-bar .check-btn i").css("display","block");
                         $(".nav-bar .check-btn span").css("display","none");
                         
                   });
                   $(".nav-bar ul a").click(()=>{
                     $(".nav-bar .check-btn i").css("display","block");
                       $(".nav-bar .check-btn span").css("display","none");
                    
                       
                   });
                 });
    
                }
                
                else if( width >= 1024 && width <= 1200 ){
                  var lastScrollTop=0;
              navbar=document.getElementById("nav-bar1");
              window.addEventListener("scroll",function(){
                  var scrollTop=window.pageYOffset ||document
                  .documentElement.scrollTop;
                  if(scrollTop>lastScrollTop){
                      navbar.style.top ="-80px";
                      $(".nav-bar li a").css("color","black")
                      $("#nav-bar1").css("background-color", "white");
                      $("#item").css("color", "black");
                      $("#item2").css("color", "black");
                      $("#item3").css("color", "black");
                      $("#item4").css("color", "black");
                      $("#item5").css("color", "black");
                      $("#item6").css("color", "black");
                      $(".check-btn").css("color","black");
                     
                  }else{
                      navbar.style.top="0";
                  }
                  if(scrollTop <100){
                      $("#nav-bar1").css("background-color", "#1D2432");
                      $("ul li a").css("color","white");
                      $("ul ul li a").css("color","black");
                      $(".check-btn").css("color","white");
                  }
                  lastScrollTop=scrollTop;
              });
                }else if( width >= 1200 ){
                  var lastScrollTop=0;
              navbar=document.getElementById("nav-bar1");
              window.addEventListener("scroll",function(){
                  var scrollTop=window.pageYOffset ||document
                  .documentElement.scrollTop;
                  if(scrollTop>lastScrollTop){
                      navbar.style.top ="-80px";
                      $(".nav-bar li a").css("color","black")
                      $("#nav-bar1").css("background-color", "white");
                      $("#item").css("color", "black");
                      $("#item2").css("color", "black");
                      $("#item3").css("color", "black");
                      $("#item4").css("color", "black");
                      $("#item5").css("color", "black");
                      $("#item6").css("color", "black");
                      $(".check-btn").css("color","black");
                     
                  }else{
                      navbar.style.top="0";
                  }
                  if(scrollTop <100){
                      $("#nav-bar1").css("background-color", "#1D2432");
                      $("ul li a").css("color","white");
                      $("ul ul li a").css("color","black");
                      $(".check-btn").css("color","white");
                  }
                  lastScrollTop=scrollTop;
              });
                }
              }, pause );
        });
    
        $(window).resize();
    });
    

