$(document).ready(function () {
  $("#about").hover(function () {
    $("#about").html("About Us  <i class='fa fa-angle-up' id='iconUp'>");
    $("#iconDown").hide();
    $("ul ul").slideDown("slow");
  });
  $("ul ul li").hover(function () {
    $("#about").html("About Us  <i class='fa fa-angle-up' id='iconUp'>");
    $("#iconDown").hide();
  });
  $("#about").mouseleave(function () {
    $("#iconUp").hide();
    $("#about").html("About Us  <i class='fa fa-angle-down'>");
  });
  $("#slideup-home").hover(function () {
    $("ul ul").slideUp("slow");
  });
  $("#slideup-invesment").hover(function () {
    $("ul ul").slideUp("slow");
  });
  $("#slideup-product").hover(function () {
    $("ul ul").slideUp("slow");
  });
  $("#slideup-careers").hover(function () {
    $("ul ul").slideUp("slow");
  });
  $("#slideup-contact").hover(function () {
    $("ul ul").slideUp("slow");
  });

  $("ul ul").mouseleave(function () {
    $("#iconUp").hide();
    $("#about").html("About Us  <i class='fa fa-angle-down'>");
    $("ul ul").slideUp("slow");
  });
});

$("ul ul li a").click(function () {
  $("ul ul").slideUp("slow");
});

var swiper = new Swiper(".theSwiper", {
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var delay = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

$(function () {
  var pause = 100;

  $(window).resize(function () {
    delay(function () {
      var width = $(window).width();
      if (width >= 768 && width <= 1024) {
        $("#swiper-program").show();
        $("#new-program").show();
        $("#new-association").show();
        $("#new-award").show();
        $("#line-bar").hide();
        $(".style-footer-bar").hide();

        $("#new-home").show();
        $("#new-about").show();
        $("#new-legal").show();
        $("#swiper-program").hide();

        var swiper = new Swiper(".yourSwiper", {
          slidesPerView: 2,
          freeMode: true,
          spaceBetween: 30,
          lazy: true,
          watchSlidesProgress: true,

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        $(document).ready(() => {
          $(".nav-bar .check-btn i").click(() => {
            $(".nav-bar .check-btn i").css("display", "none");
            $(".nav-bar .check-btn span").css("display", "block");
            $(".nav-bar ul").css("left", "0px");
          });
          $(".nav-bar .check-btn span").click(() => {
            $(".nav-bar .check-btn i").css("display", "block");
            $(".nav-bar .check-btn span").css("display", "none");
            $(".nav-bar ul").css("left", "-1100px");
          });
          $(".nav-bar ul a").click(() => {
            $(".nav-bar .check-btn i").css("display", "block");
            $(".nav-bar .check-btn span").css("display", "none");

            $(".nav-bar ul").css("left", "-1100px");
          });
        });

        var lastScrollTop = 0;
        navbar = document.getElementById("nav-bar1");
        window.addEventListener("scroll", function () {
          var scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop) {
            navbar.style.top = "-80px";
            $(".nav-bar li a").css("color", "black");
            $("#nav-bar1").css("background-color", "white");
            $("#item").css("color", "black");
            $("#item2").css("color", "black");
            $("#item3").css("color", "black");
            $("#item4").css("color", "black");
            $("#item5").css("color", "black");
            $("#item6").css("color", "black");
            $(".check-btn").css("color", "black");
          } else {
            navbar.style.top = "0";
          }
          if (scrollTop <= 100) {
            $("#nav-bar1").css("background-color", "#1D2432");
            $(".nav-bar ul li a").css("color", "black");
            $("ul ul li a").css("color", "black");
            $(".check-btn").css("color", "white");
          }
          lastScrollTop = scrollTop;
        });

        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 2,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        $("#program  .program").hide();
        $("#program .and").hide();
        $("#program .association").hide();
        $("#program #img-1280").hide();
        $("#program .ass").show();
        $("#program #role").hide();
        $("#program #name").hide();
        $("#program #img-768 ").show();
        $("#program .img-768 ").show();
        $("#program .tab-plet").show();
        $("#program .tab-plet2").show();

        $("#program #p1 .ass").css("color", "#FFBE0B");

        $("#program #p1 .ass").css("margin-top", "100px");

        $("#program #img-768").css("margin-top", "60px");

        $("#program .img-768").css("margin-top", "60px");

        $("#program .tab-plet").css("margin-top", "60px");

        $("#program .tab-plet2").css("margin-top", "60px");

        // Block 1
        $(document).ready(() => {
          $("#new-home h2").click(() => {
            $("#new-home ul").slideToggle("slow");
          });
        });

        $(document).ready(() => {
          $("#new-about h2").click(() => {
            $("#new-about ul").slideToggle("slow");
          });

          $(document).ready(() => {
            $("#new-legal h2").click(() => {
              $("#new-legal ul").slideToggle("slow");
            });
          });
        });
        $(".menu-footer-bar #line4").hide();
        $("#end-deligh").hide();
        $("#line-bar").show();
        const lineBar = `
          <div> 
              <hr>      
               <p>
               2021 © Delightech PLC. All Rights Reserved.
               </p>
          </div>
        `;
        const LineBar = document.getElementById("line-bar");
        LineBar.innerHTML = lineBar;
        //Block2
        $(".container .for-tabplet").hide();
        $(".container .for-tabplet2").hide();
        $(".container .for-tabplet3").hide();
        $(".container .program-768").hide();
        $(".container .program-768").css("margin-top", "150px");
        $(".container .for-tabplet").css("margin-top", "60px");
        $(".container .program-768 ").css("color", "#FFBE0B");
        $(".container .for-tabplet2").css("margin-top", "60px");
        $(".container .for-tabplet3").css("margin-top", "60px");

        $("#program #name2").css("font-size", "24px");
        $("#program #role2").css("opacity", "0.7");

        // Block3
        $("#program #award .competed").hide();
        $("#program #clear").hide();
        $("#program #award #header").show();
        $(".container .award-768").show();
        $(".container .award-768-2").show();

        $(".container  #name3").css("font-size", "24px");
        $(".container #role3").css("opacity", "0.7");
        $("#program #award #header").css("color", "#FFBE0B");
        $("#program #award #header h1").css("margin-top", "150px");

        // Block 4
        $(".container .header-award").show();
        $(".container .header-award").html(
          "<h1 class='text-center'>AWARD</h1>"
        );
        $(".container .header-award").css("margin-top", "50px");
        $(".container .header-award").css("color", "#FFBE0B");
        $(".container .img-winner").show();
        $(".container .img-winner2").show();

        $(".container .img-winner2 img").css("margin-top", "70px");
        $(".container .img-winner img").css("margin-top", "70px");
        $(".container .img-winner #money").css("font-size", "20px");
        $(".container .img-winner2 #money").css("font-size", "20px");

        const arrProgram = `
              <h1 class='text-center'>ASSOCIATION</h1>
              <div  style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper programSwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class='text-center'>
                          <img class='center-block' src="Picture/Association&Program/yeac.png" alt="">
                          <p id="name">YEAC</p>  
                                   <p id="role">
                                     Young Entrepreneurs Association Cambodia
                                   </p>   
                    </div>
                </div>
                <div class="swiper-slide">
                <div class='text-center'>
                      <img class='center-block' src="Picture/Association&Program/caft.png" alt="">
                      <p id="name">CAFT</p>  
                      <p id="role">
                       (Cambodia Association of Finance and Technology)
                      </p>
                </div>
                 </div>
                <div class="swiper-slide">
                     <div class='text-center'>
                     <img id="img-1280" src="Picture/Association&Program/cdta.png" alt="">
                     <p id="name">CDTA</p>
                     <p id="role">(Cambodia Digital 
                     Tech Association)</p>
                     </div>
                </div>
                <div class="swiper-slide">
                        <div class='text-center'>
                        <img id="img-1280" src="Picture/Association&Program/fasmec.png" alt="">
                        <p id="name">FASMEC</p>
                        <p id="role">FASMEC Microfinace Plc.</p>
                       </div>
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>
              `;

        const newSwiper = document.getElementById("new-program");
        newSwiper.innerHTML = arrProgram;

        var swiper = new Swiper(".programSwiper", {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        const arrAssociation = `

      <h1 class='text-center'>PROGRAM</h1>
      <div  style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper associationSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class='text-center'>
            <img class='center-block' src="Picture/Association&Program/angkor500.png" alt="">   
            <p id="name">500 START-UPS</p>    
                  
            </div>
        </div>
        <div class="swiper-slide">
        <div class='text-center'>
             <img class='center-block' src="Picture/Association&Program/bio-program.png" alt="">      
             <p id="name">BIO Program</p> 
        </div>
         </div>
        <div class="swiper-slide">
             <div class='text-center'>
               <img  src="Picture/Association&Program/antler.png" alt="" class="center-block">
               <p id="name">ANTLER</p>
             </div>
        </div>
        
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>

      `;
        const newAssociation = document.getElementById("new-association");
        newAssociation.innerHTML = arrAssociation;
        var swiper = new Swiper(".associationSwiper", {
          spaceBetween: 30,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        const arrAward = `

      <h1 class='text-center'>COMPETED IN & AWARDS</h1>
      <div  style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper awardSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class='text-center'>
            <img class='center-block' src="Picture/Association&Program/techo-startup.png" alt="">       
            <p id="name">TECHO STARTUP CENTER</p>  
            <p id="role">
              (Digital Platform Accelerator)
            </p>      
                  
            </div>
        </div>
        <div class="swiper-slide">
        <div class='text-center'>
        <img class='center-block' src="Picture/Association&Program/yeac.png" alt="">      
         
        <p id="name">YEAC</p>  
        <p id="role">
         YEAC 
          Young Entrepreneurs 
          Association Cambodia
        </p> 
        </div>
         </div>
        <div class="swiper-slide">
        <div class='text-center'>
             <img class='center-block' src="Picture/Association&Program/winner.png" alt=""> 
             <p  id="winner">1st Place Winner</p>
          <p id="bg-color-winner">
            Out of the eight teams competed in the final round, Deligtech was 
            awared 1st place for its outstanding initiative in The Digital SME Accelerator Programme.     
          </p>
        </div>     
        </div>
        <div class="swiper-slide">
            <div class='text-center'>
                 <img class='center-block' src="Picture/Association&Program/member-yeac.png" alt="" > 
                 <p id="member">Member of YEAC</p>
                 <p id="bg-color-member">
              Delightech was awarded the 
              top 11th team out of all of the 
              teams competed in CYEA, and is 
              now a member of Young 
              Entrepeneurs Association 
              Cambodia.
            </p>
            </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>

      `;
        const newAward = document.getElementById("new-award");
        newAward.innerHTML = arrAward;
        var swiper = new Swiper(".awardSwiper", {
          spaceBetween: 30,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        const newHome = `
        <h2>HOME<i class="fa fa-angle-down" aria-hidden="true"></i></h2>
         <ul>
            
           <li><a href="">About Us</a></li>
           <li ><a href="#invest">Inventors</a></li>
           <li><a href="#product">Product</a></li>
           <li ><a href="#career">Careers</a></li>
           <li><a href="asset/contact.html">Contact</a></li>
         </ul>
         <hr>
        `;
        const home = document.getElementById("new-home");
        home.innerHTML = newHome;
        const newAbout = `
       <h2>ABOUT US  <i class="fa fa-angle-down" aria-hidden="true"></i></h2>
       <ul>
          <li><a href="#team">Founder</a></li>
          <li><a href="#mentors">Mentors</a></li>
          <li><a href="#statement">Statements</a></li>
         <li><a href="#recognition">Recognitions</a></li>
         <li><a href="#program">Associations / Programs</a></li>
         <li><a href="#award">Awards</a></li>
       </ul>
       <hr>
       `;
        const about = document.getElementById("new-about");
        about.innerHTML = newAbout;

        const newLegal = `<h2>LEGAL NOTICE  <i class="fa fa-angle-down" aria-hidden="true"></i></h2>
      <ul>
         <li><a href="">Privacy Policy </a></li>
         <li><a href="">Security Tips</a></li>
      </ul>  
     
      `;
        const legal = document.getElementById("new-legal");
        legal.innerHTML = newLegal;
      } else if (width >= 479 && width <= 768) {
        // code for mobile landscape

        var swiper = new Swiper(".yourSwiper", {
          slidesPerView: 1,
          freeMode: true,
          spaceBetween: 30,
          lazy: true,
          watchSlidesProgress: true,

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        $(document).ready(() => {
          $(".nav-bar .check-btn i").click(() => {
            $(".nav-bar .check-btn i").css("display", "none");
            $(".nav-bar .check-btn span").css("display", "block");
            $(".nav-bar ul").css("left", "0px");
          });
          $(".nav-bar .check-btn span").click(() => {
            $(".nav-bar .check-btn i").css("display", "block");
            $(".nav-bar .check-btn span").css("display", "none");
            $(".nav-bar ul").css("left", "-1100px");
          });
          $(".nav-bar ul a").click(() => {
            $(".nav-bar .check-btn i").css("display", "block");
            $(".nav-bar .check-btn span").css("display", "none");

            $(".nav-bar ul").css("left", "-1100px");
          });
        });

        const newHome = `
                   <h2>HOME<i class="fa fa-angle-down" aria-hidden="true"></i></h2>
                    <ul>
                       
                      <li><a href="">About Us</a></li>
                      <li ><a href="#invest">Inventors</a></li>
                      <li><a href="#product">Product</a></li>
                      <li ><a href="#career">Careers</a></li>
                      <li><a href="asset/contact.html">Contact</a></li>
                    </ul>
                    <hr>
                   `;
        const home = document.getElementById("new-home");
        home.innerHTML = newHome;
        const newAbout = `
                  <h2>ABOUT US  <i class="fa fa-angle-down" aria-hidden="true"></i></h2>
                  <ul>
                     <li><a href="#team">Founder</a></li>
                     <li><a href="#mentors">Mentors</a></li>
                     <li><a href="#statement">Statements</a></li>
                    <li><a href="#recognition">Recognitions</a></li>
                    <li><a href="#program">Associations / Programs</a></li>
                    <li><a href="#award">Awards</a></li>
                  </ul>
                  <hr>
                  `;
        const about = document.getElementById("new-about");
        about.innerHTML = newAbout;

        const newLegal = `<h2>LEGAL NOTICE  <i class="fa fa-angle-down" aria-hidden="true"></i></h2>
                 <ul>
                    <li><a href="">Privacy Policy </a></li>
                    <li><a href="">Security Tips</a></li>
                 </ul>  
                
                 `;
        const legal = document.getElementById("new-legal");
        legal.innerHTML = newLegal;

        var lastScrollTop = 0;
        navbar = document.getElementById("nav-bar1");
        window.addEventListener("scroll", function () {
          var scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop) {
            navbar.style.top = "-80px";
            $(".nav-bar li a").css("color", "black");
            $("#nav-bar1").css("background-color", "white");
            $("#item").css("color", "black");
            $("#item2").css("color", "black");
            $("#item3").css("color", "black");
            $("#item4").css("color", "black");
            $("#item5").css("color", "black");
            $("#item6").css("color", "black");
            $(".check-btn").css("color", "black");
          } else {
            navbar.style.top = "0";
          }
          if (scrollTop <= 100) {
            $("#nav-bar1").css("background-color", "#1D2432");
            $(".nav-bar ul li a").css("color", "black");
            $("ul ul li a").css("color", "black");
            $(".check-btn").css("color", "white");
          }
          lastScrollTop = scrollTop;
        });

        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        $("#program  .program").hide();
        $("#program .and").hide();
        $("#program .association").hide();
        $("#program #img-1280").hide();
        $("#program .ass").show();
        $("#program #role").hide();
        $("#program #name").hide();
        $("#program #img-768 ").show();
        $("#program .img-768 ").show();
        $("#program .tab-plet").show();
        $("#program .tab-plet2").show();
        $("#program #p1 .ass").html("<h1 class='text-center'>ASSOCIATION</h1>");

        $("#program #p1 .ass").css("color", "#FFBE0B");

        $("#program #p1 .ass").css("margin-top", "100px");

        $("#program #img-768").css("margin-top", "60px");

        $("#program .img-768").css("margin-top", "60px");

        $("#program .tab-plet").css("margin-top", "60px");

        $("#program .tab-plet2").css("margin-top", "60px");

        $("#swiper-program").hide();

        $("#new-program").show();
        $("#new-association").show();
        $("#new-award").show();
        $("#line-bar").show();
        $(".style-footer-bar").hide();

        $("#new-home").show();
        $("#new-about").show();
        $("#new-legal").show();

        const arrProgram = `
       <h1 class='text-center'>ASSOCIATION</h1>
       <div  style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper programSwiper">
       <div class="swiper-wrapper">
         <div class="swiper-slide">
             <div class='text-center'>
                   <img class='center-block' src="Picture/Association&Program/yeac.png" alt="">
                   <p id="name">YEAC</p>  
                            <p id="role">
                              Young Entrepreneurs Association Cambodia
                            </p>   
             </div>
         </div>
         <div class="swiper-slide">
         <div class='text-center'>
               <img class='center-block' src="Picture/Association&Program/caft.png" alt="">
               <p id="name">CAFT</p>  
               <p id="role">
                (Cambodia Association of Finance and Technology)
               </p>
         </div>
          </div>
         <div class="swiper-slide">
              <div class='text-center'>
              <img id="img-1280" src="Picture/Association&Program/cdta.png" alt="">
              <p id="name">CDTA</p>
              <p id="role">(Cambodia Digital 
              Tech Association)</p>
              </div>
         </div>
         <div class="swiper-slide">
                 <div class='text-center'>
                 <img id="img-1280" src="Picture/Association&Program/fasmec.png" alt="">
                 <p id="name">FASMEC</p>
                 <p id="role">FASMEC Microfinace Plc.</p>
                </div>
         </div>
       </div>
       <div class="swiper-button-next"></div>
       <div class="swiper-button-prev"></div>
       <div class="swiper-pagination"></div>
     </div>
       `;

        const newSwiper = document.getElementById("new-program");
        newSwiper.innerHTML = arrProgram;

        var swiper = new Swiper(".programSwiper", {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        $(document).ready(() => {
          $("#new-home h2").click(() => {
            $("#new-home ul").slideToggle("slow");
          });
        });

        $(document).ready(() => {
          $("#new-about h2").click(() => {
            $("#new-about ul").slideToggle("slow");
          });

          $(document).ready(() => {
            $("#new-legal h2").click(() => {
              $("#new-legal ul").slideToggle("slow");
            });
          });
        });

        const arrAssociation = `

      <h1 class='text-center'>PROGRAM</h1>
      <div  style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper associationSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class='text-center'>
            <img class='center-block' src="Picture/Association&Program/angkor500.png" alt="">   
            <p id="name">500 START-UPS</p>    
                  
            </div>
        </div>
        <div class="swiper-slide">
        <div class='text-center'>
             <img class='center-block' src="Picture/Association&Program/bio-program.png" alt="">      
             <p id="name">BIO Program</p> 
        </div>
         </div>
        <div class="swiper-slide">
             <div class='text-center'>
               <img  src="Picture/Association&Program/antler.png" alt="" class="center-block">
               <p id="name">ANTLER</p>
             </div>
        </div>
        
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>

      `;
        const newAssociation = document.getElementById("new-association");
        newAssociation.innerHTML = arrAssociation;
        var swiper = new Swiper(".associationSwiper", {
          spaceBetween: 30,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        const arrAward = `

      <h1 class='text-center'>COMPETED IN & AWARDS</h1>
      <div  style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper awardSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class='text-center'>
            <img class='center-block' src="Picture/Association&Program/techo-startup.png" alt="">       
            <p id="name">TECHO STARTUP CENTER</p>  
            <p id="role">
              (Digital Platform Accelerator)
            </p>      
                  
            </div>
        </div>
        <div class="swiper-slide">
        <div class='text-center'>
        <img class='center-block' src="Picture/Association&Program/yeac.png" alt="">      
         
        <p id="name">YEAC</p>  
        <p id="role">
         YEAC 
          Young Entrepreneurs 
          Association Cambodia
        </p> 
        </div>
         </div>
        <div class="swiper-slide">
        <div class='text-center'>
             <img class='center-block' src="Picture/Association&Program/winner.png" alt=""> 
             <p  id="winner">1st Place Winner</p>
          <p id="bg-color-winner">
            Out of the eight teams competed in the final round, Deligtech was 
            awared 1st place for its outstanding initiative in The Digital SME Accelerator Programme.     
          </p>
        </div>     
        </div>
        <div class="swiper-slide">
            <div class='text-center'>
                 <img class='center-block' src="Picture/Association&Program/member-yeac.png" alt="" > 
                 <p id="member">Member of YEAC</p>
                 <p id="bg-color-member">
              Delightech was awarded the 
              top 11th team out of all of the 
              teams competed in CYEA, and is 
              now a member of Young 
              Entrepeneurs Association 
              Cambodia.
            </p>
            </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>

      `;
        const newAward = document.getElementById("new-award");
        newAward.innerHTML = arrAward;
        var swiper = new Swiper(".awardSwiper", {
          spaceBetween: 30,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        const lineBar = `
          <div>
              <hr>
               <p>
               2021 © Delightech PLC. All Rights Reserved.
               </p>
          </div>
        `;
        const LineBar = document.getElementById("line-bar");
        LineBar.innerHTML = lineBar;
      } else if (width <= 479) {
        // code for mobile portrait

        var swiper = new Swiper(".yourSwiper", {
          slidesPerView: 1,
          freeMode: true,
          spaceBetween: 30,
          lazy: true,
          watchSlidesProgress: true,

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
        $(document).ready(() => {
          $(".nav-bar .check-btn i").click(() => {
            $(".nav-bar .check-btn i").css("display", "none");
            $(".nav-bar .check-btn span").css("display", "block");
            $(".nav-bar ul").css("left", "0px");
          });
          $(".nav-bar .check-btn span").click(() => {
            $(".nav-bar .check-btn i").css("display", "block");
            $(".nav-bar .check-btn span").css("display", "none");
            $(".nav-bar ul").css("left", "-1100px");
          });
          $(".nav-bar ul a").click(() => {
            $(".nav-bar .check-btn i").css("display", "block");
            $(".nav-bar .check-btn span").css("display", "none");

            $(".nav-bar ul").css("left", "-1100px");
          });
        });

        const newHome = `
                   <h2>HOME<i class="fa fa-angle-down" aria-hidden="true"></i></h2>
                    <ul>
                       
                      <li><a href="">About Us</a></li>
                      <li ><a href="#invest">Inventors</a></li>
                      <li><a href="#product">Product</a></li>
                      <li ><a href="#career">Careers</a></li>
                      <li><a href="asset/contact.html">Contact</a></li>
                    </ul>
                    <hr>
                   `;
        const home = document.getElementById("new-home");
        home.innerHTML = newHome;
        const newAbout = `
                  <h2>ABOUT US  <i class="fa fa-angle-down" aria-hidden="true"></i></h2>
                  <ul>
                     <li><a href="#team">Founder</a></li>
                     <li><a href="#mentors">Mentors</a></li>
                     <li><a href="#statement">Statements</a></li>
                    <li><a href="#recognition">Recognitions</a></li>
                    <li><a href="#program">Associations / Programs</a></li>
                    <li><a href="#award">Awards</a></li>
                  </ul>
                  <hr>
                  `;
        const about = document.getElementById("new-about");
        about.innerHTML = newAbout;

        const newLegal = `<h2>LEGAL NOTICE  <i class="fa fa-angle-down" aria-hidden="true"></i></h2>
                 <ul>
                    <li><a href="">Privacy Policy </a></li>
                    <li><a href="">Security Tips</a></li>
                 </ul>  
                 
                 `;
        const legal = document.getElementById("new-legal");
        legal.innerHTML = newLegal;

        var lastScrollTop = 0;
        navbar = document.getElementById("nav-bar1");
        window.addEventListener("scroll", function () {
          var scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop) {
            navbar.style.top = "-80px";
            $(".nav-bar li a").css("color", "black");
            $("#nav-bar1").css("background-color", "white");
            $("#item").css("color", "black");
            $("#item2").css("color", "black");
            $("#item3").css("color", "black");
            $("#item4").css("color", "black");
            $("#item5").css("color", "black");
            $("#item6").css("color", "black");
            $(".check-btn").css("color", "black");
          } else {
            navbar.style.top = "0";
          }
          if (scrollTop <= 100) {
            $("#nav-bar1").css("background-color", "#1D2432");
            $(".nav-bar ul li a").css("color", "black");
            $("ul ul li a").css("color", "black");
            $(".check-btn").css("color", "white");
          }
          lastScrollTop = scrollTop;
        });

        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        $("#program  .program").hide();
        $("#program .and").hide();
        $("#program .association").hide();
        $("#program #img-1280").hide();
        $("#program .ass").show();
        $("#program #role").hide();
        $("#program #name").hide();
        $("#program #img-768 ").show();
        $("#program .img-768 ").show();
        $("#program .tab-plet").show();
        $("#program .tab-plet2").show();
        $("#program #p1 .ass").html("<h1 class='text-center'>ASSOCIATION</h1>");

        $("#program #p1 .ass").css("color", "#FFBE0B");

        $("#program #p1 .ass").css("margin-top", "100px");

        $("#program #img-768").css("margin-top", "60px");

        $("#program .img-768").css("margin-top", "60px");

        $("#program .tab-plet").css("margin-top", "60px");

        $("#program .tab-plet2").css("margin-top", "60px");

        $("#swiper-program").hide();

        $("#new-program").show();
        $("#new-association").show();
        $("#new-award").show();
        $("#line-bar").show();
        $(".style-footer-bar").hide();

        $("#new-home").show();
        $("#new-about").show();
        $("#new-legal").show();

        const arrProgram = `
       <h1 class='text-center'>ASSOCIATION</h1>
       <div  style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper programSwiper">
       <div class="swiper-wrapper">
         <div class="swiper-slide">
             <div class='text-center'>
                   <img class='center-block' src="Picture/Association&Program/yeac.png" alt="">
                   <p id="name">YEAC</p>  
                            <p id="role">
                              Young Entrepreneurs Association Cambodia
                            </p>   
             </div>
         </div>
         <div class="swiper-slide">
         <div class='text-center'>
               <img class='center-block' src="Picture/Association&Program/caft.png" alt="">
               <p id="name">CAFT</p>  
               <p id="role">
                (Cambodia Association of Finance and Technology)
               </p>
         </div>
          </div>
         <div class="swiper-slide">
              <div class='text-center'>
              <img id="img-1280" src="Picture/Association&Program/cdta.png" alt="">
              <p id="name">CDTA</p>
              <p id="role">(Cambodia Digital 
              Tech Association)</p>
              </div>
         </div>
         <div class="swiper-slide">
                 <div class='text-center'>
                 <img id="img-1280" src="Picture/Association&Program/fasmec.png" alt="">
                 <p id="name">FASMEC</p>
                 <p id="role">FASMEC Microfinace Plc.</p>
                </div>
         </div>
       </div>
       <div class="swiper-button-next"></div>
       <div class="swiper-button-prev"></div>
       <div class="swiper-pagination"></div>
     </div>
       `;

        const newSwiper = document.getElementById("new-program");
        newSwiper.innerHTML = arrProgram;

        var swiper = new Swiper(".programSwiper", {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        $(document).ready(() => {
          $("#new-home h2").click(() => {
            $("#new-home ul").slideToggle("slow");
          });
        });

        $(document).ready(() => {
          $("#new-about h2").click(() => {
            $("#new-about ul").slideToggle("slow");
          });

          $(document).ready(() => {
            $("#new-legal h2").click(() => {
              $("#new-legal ul").slideToggle("slow");
            });
          });
        });

        const arrAssociation = `

      <h1 class='text-center'>PROGRAM</h1>
      <div  style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper associationSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class='text-center'>
            <img class='center-block' src="Picture/Association&Program/angkor500.png" alt="">   
            <p id="name">500 START-UPS</p>    
                  
            </div>
        </div>
        <div class="swiper-slide">
        <div class='text-center'>
             <img class='center-block' src="Picture/Association&Program/bio-program.png" alt="">      
             <p id="name">BIO Program</p> 
        </div>
         </div>
        <div class="swiper-slide">
             <div class='text-center'>
               <img  src="Picture/Association&Program/antler.png" alt="" class="center-block">
               <p id="name">ANTLER</p>
             </div>
        </div>
        
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>

      `;
        const newAssociation = document.getElementById("new-association");
        newAssociation.innerHTML = arrAssociation;
        var swiper = new Swiper(".associationSwiper", {
          spaceBetween: 30,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        const arrAward = `

      <h1 class='text-center'>COMPETED IN & AWARDS</h1>
      <div  style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper awardSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class='text-center'>
            <img class='center-block' src="Picture/Association&Program/techo-startup.png" alt="">       
            <p id="name">TECHO STARTUP CENTER</p>  
            <p id="role">
              (Digital Platform Accelerator)
            </p>      
                  
            </div>
        </div>
        <div class="swiper-slide">
        <div class='text-center'>
        <img class='center-block' src="Picture/Association&Program/yeac.png" alt="">      
         
        <p id="name">YEAC</p>  
        <p id="role">
         YEAC 
          Young Entrepreneurs 
          Association Cambodia
        </p> 
        </div>
         </div>
        <div class="swiper-slide">
        <div class='text-center'>
             <img class='center-block' src="Picture/Association&Program/winner.png" alt=""> 
             <p  id="winner">1st Place Winner</p>
          <p id="bg-color-winner">
            Out of the eight teams competed in the final round, Deligtech was 
            awared 1st place for its outstanding initiative in The Digital SME Accelerator Programme.     
          </p>
        </div>     
        </div>
        <div class="swiper-slide">
            <div class='text-center'>
                 <img class='center-block' src="Picture/Association&Program/member-yeac.png" alt="" > 
                 <p id="member">Member of YEAC</p>
                 <p id="bg-color-member">
              Delightech was awarded the 
              top 11th team out of all of the 
              teams competed in CYEA, and is 
              now a member of Young 
              Entrepeneurs Association 
              Cambodia.
            </p>
            </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>

      `;
        const newAward = document.getElementById("new-award");
        newAward.innerHTML = arrAward;
        var swiper = new Swiper(".awardSwiper", {
          spaceBetween: 30,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        const lineBar = `
          <div>
             <hr>
               <p>
               2021 © Delightech PLC. All Rights Reserved.
               </p>
          </div>
        `;
        const LineBar = document.getElementById("line-bar");
        LineBar.innerHTML = lineBar;
      } else if (width >= 1200) {
        var swiper = new Swiper(".yourSwiper", {
          slidesPerView: 3,
          freeMode: true,
          spaceBetween: 30,
          lazy: true,
          watchSlidesProgress: true,

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        $(".nav-bar ul ").css("left", "0px");

        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        var lastScrollTop = 0;
        navbar = document.getElementById("nav-bar1");
        window.addEventListener("scroll", function () {
          var scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop) {
            navbar.style.top = "-80px";
            $(".nav-bar li a").css("color", "black");
            $("#nav-bar1").css("background-color", "white");
            $("#item").css("color", "black");
            $("#item2").css("color", "black");
            $("#item3").css("color", "black");
            $("#item4").css("color", "black");
            $("#item5").css("color", "black");
            $("#item6").css("color", "black");
            $(".check-btn").css("color", "black");
          } else {
            navbar.style.top = "0";
          }
          if (scrollTop <= 100) {
            $("#nav-bar1").css("background-color", "#1D2432");
            $(".nav-bar ul li a").css("color", "white");
            $("ul ul li a").css("color", "black");
            $(".check-btn").css("color", "white");
          }
          lastScrollTop = scrollTop;
        });

        $("#program  .association").show();
        $("#program  .program").show();
        $("#program .and").show();
        $("#program .ass").hide();
        $("#program #img-1280").show();
        $("#program #role").show();
        $("#program #name").show();
        $("#program #img-768 ").hide();
        $("#program .img-768").hide();
        $("#program .tab-plet").hide();
        $("#program .tab-plet2").hide();
        $(".container .program-768").hide();
        $(".container .for-tabplet").hide();
        $(".container .for-tabplet2").hide();
        $(".container .for-tabplet3").hide();

        $("#program #award .competed").show();
        $("#program #clear").show();
        $("#program #award #header").hide();
        $(".container .award-768").hide();
        $(".container .award-768-2").hide();
        $(".container .header-award").hide();
        $(".container .img-winner").hide();
        $(".container .img-winner2").hide();

        $("#swiper-program").show();
        $("#new-program").hide();
        $("#new-association").hide();
        $("#new-award").hide();
        $("#line-bar").hide();
        $(".style-footer-bar").show();

        $("#new-home").hide();
        $("#new-about").hide();
        $("#new-legal").hide();
      } else if (width >= 1024 && width <= 1200) {
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 2,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        var swiper = new Swiper(".yourSwiper", {
          slidesPerView: 2,
          freeMode: true,
          spaceBetween: 30,
          lazy: true,
          watchSlidesProgress: true,

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        $("#program  .program").hide();
        $("#program .and").hide();
        $("#program .association").hide();
        $("#program #img-1280").hide();
        $("#program .ass").show();
        $("#program #role").hide();
        $("#program #name").hide();
        $("#program #img-768 ").show();
        $("#program .img-768 ").show();
        $("#program .tab-plet").show();
        $("#program .tab-plet2").show();
        $("#program #p1 .ass").html("<h1 class='text-center'>ASSOCIATION</h1>");

        $("#program #p1 .ass").css("color", "#FFBE0B");

        $("#program #p1 .ass").css("margin-top", "100px");

        $("#program #img-768").css("margin-top", "60px");

        $("#program .img-768").css("margin-top", "60px");

        $("#program .tab-plet").css("margin-top", "60px");

        $("#program .tab-plet2").css("margin-top", "60px");

        // Block 1
        $("#program #img-768").html(
          " <img class='center-block' src='Picture/Association&Program/yeac.png' alt=''>  <p id='name2'>YEAC</p>  <p id='role2'>  Young Entrepreneurs Association Cambodia</p>"
        );
        $("#program .img-768").html(
          " <img class='center-block' src='Picture/Association&Program/caft.png' alt=''>  <p id='name2'>CAFT</p>  <p id='role2'> (Cambodia Association of Finance and Technology)  </p>"
        );
        $("#program .tab-plet").html(
          " <img class='center-block'  src='Picture/Association&Program/cdta.png' alt=''>  <p id='name2'>CDTA</p>  <p id='role2'> (Cambodia Digital Tech Association)  </p>"
        );
        $("#program .tab-plet2").html(
          " <img class='center-block'  src='Picture/Association&Program/fasmec.png' alt=''>  <p id='name2'>FASMEC</p>  <p id='role2'> FASMEC Microfinace Plc. </p>"
        );

        //Block2
        $(".container .for-tabplet").show();
        $(".container .for-tabplet2").show();
        $(".container .for-tabplet3").show();
        $(".container .program-768").show();
        $(".container .program-768").css("margin-top", "150px");
        $(".container .for-tabplet").css("margin-top", "60px");
        $(".container .program-768 ").css("color", "#FFBE0B");
        $(".container .for-tabplet2").css("margin-top", "60px");
        $(".container .for-tabplet3").css("margin-top", "60px");

        $(".container .program-768").html(
          "<h1 class='text-center'>PROGRAM</h1>"
        );
        $(".container .for-tabplet").html(
          " <img class='center-block' src='Picture/Association&Program/angkor500.png'> <p id='name2'>500 START-UPS</p> "
        );
        $(".container .for-tabplet2").html(
          " <img class='center-block' src='Picture/Association&Program/bio-program.png'> <p id='name2'>BIO PROGRAM</p> "
        );
        $(".container .for-tabplet3").html(
          " <img class='center-block' src='Picture/Association&Program/antler.png'> <p id='name2'>ANTLER</p> "
        );

        $("#program #name2").css("font-size", "24px");
        $("#program #role2").css("opacity", "0.7");

        // Block3
        $("#program #award .competed").hide();
        $("#program #clear").hide();
        $("#program #award #header").show();
        $(".container .award-768").show();
        $(".container .award-768-2").show();

        $(".container .award-768").html(
          "<img class='center-block' src='Picture/Association&Program/techo-startup.png' > <p id='name3'>TECHO STARTUP CENTER </p>  <p id='role3'>(Digital Platform Accelerator)</p> "
        );
        $(".container .award-768-2").html(
          "<img class='center-block' src='Picture/Association&Program/yeac.png' > <p id='name3'>YEAC</p>  <p id='role3'>YEAC Young Entrepreneurs  Association Cambodia</p> "
        );
        $("#program #award #header").html(
          "<h1 class='text-center'>COMPETED</h1>"
        );

        $(".container  #name3").css("font-size", "24px");
        $(".container #role3").css("opacity", "0.7");
        $("#program #award #header").css("color", "#FFBE0B");
        $("#program #award #header h1").css("margin-top", "150px");

        // Block 4
        $(".container .header-award").show();
        $(".container .header-award").html(
          "<h1 class='text-center'>AWARD</h1>"
        );
        $(".container .header-award").css("margin-top", "50px");
        $(".container .header-award").css("color", "#FFBE0B");
        $(".container .img-winner").show();
        $(".container .img-winner2").show();

        $(".container .img-winner").html(
          "<img class='center-block' src='Picture/Association&Program/winner.png'> <p id='money'>1st Place Winner</p> <p> Out of the eight teams competed in the final round, Deligtech was awared 1st place for its outstanding initiative in The Digital SME Accelerator Programme.  </p> "
        );
        $(".container .img-winner2").html(
          "<img class='center-block' src='Picture/Association&Program/member-yeac.png'> <p id='money'>Member of YEAC</p> <p> Delightech was awarded the  top 11th team out of all of the   teams competed in CYEA, and is  now a member of Young Entrepeneurs Association  Cambodia.</p> "
        );
        $(".container .img-winner2 img").css("margin-top", "70px");
        $(".container .img-winner img").css("margin-top", "70px");
        $(".container .img-winner #money").css("font-size", "20px");
        $(".container .img-winner2 #money").css("font-size", "20px");

        var lastScrollTop = 0;
        navbar = document.getElementById("nav-bar1");
        window.addEventListener("scroll", function () {
          var scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop) {
            navbar.style.top = "-80px";
            $(".nav-bar li a").css("color", "black");
            $("#nav-bar1").css("background-color", "white");
            $("#item").css("color", "black");
            $("#item2").css("color", "black");
            $("#item3").css("color", "black");
            $("#item4").css("color", "black");
            $("#item5").css("color", "black");
            $("#item6").css("color", "black");
            $(".check-btn").css("color", "black");
          } else {
            navbar.style.top = "0";
          }
          if (scrollTop <= 100) {
            $("#nav-bar1").css("background-color", "#1D2432");
            $(".nav-bar ul li a").css("color", "white");
            $("ul ul li a").css("color", "black");
            //$(".check-btn").css("color","white");
          }
          lastScrollTop = scrollTop;
        });

        $("#swiper-program").show();
        $("#new-program").hide();
        $("#new-association").hide();
        $("#new-award").hide();
        $("#line-bar").hide();
        $(".style-footer-bar").show();

        $(".nav-bar ul ").css("left", "0px");
        $("#new-home").hide();
        $("#new-about").hide();
        $("#new-legal").hide();
      }
    }, pause);
  });

  $(window).resize();
});
