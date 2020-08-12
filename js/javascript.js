//FONT
(function(d) {
    var config= {
      kitId: "osj7bdi",
      scriptTimeout: 3000,
      async: true
    }

    ,
    h=d.documentElement,
    t=setTimeout(function() {
        h.className=h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
      }

      ,

      config.scriptTimeout),
    tk=d.createElement("script"),
    f=false,
    s=d.getElementsByTagName("script")[0],
    a;
    h.className +=" wf-loading";
    tk.src="https://use.typekit.net/"+ config.kitId + ".js";
    tk.async=true;

    tk.onload=tk.onreadystatechange=function() {
      a=this.readyState;
      if (f || (a && a !="complete"&& a !="loaded")) return;
      f=true;
      clearTimeout(t);

      try {
        Typekit.load(config);
      }

      catch (e) {}
    }

    ;
    s.parentNode.insertBefore(tk, s);
  }

)(document);

//lottie

var mainArt=document.getElementById("mainArt");

var animItemMain=lottie.loadAnimation( {
    container: mainArt, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./json/main/main-art.json" // the path to the animation json
  }

);

var mailArt=document.getElementById("mailImg");

var animItemMail=lottie.loadAnimation( {
    container: mailArt, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./json/mail/letter.json" // the path to the animation json
  }

);

var webArt=document.getElementById("webImg");

var animItemWeb=lottie.loadAnimation( {
    container: webArt, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./json/web/web.json" // the path to the animation json
  }

);

var webArt=document.getElementById("phoneImg");

var animItemWeb=lottie.loadAnimation( {
    container: webArt, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./json/phone/phone.json" // the path to the animation json
  }

);

//slick.js

$(function() {
    function sliderSetting() {
      var width=$(window).width();

      if (width <=599) {
        $(".plan, .why") .not(".slick-initialized") .slick( {
            autoplay: false,
            fade: false,
            dots: true,
            arrows: true
          }

        );
      }

      else {
        $(".plan.slick-initialized").slick("unslick");
      }
    }

    sliderSetting();

    $(window).resize(function() {
        sliderSetting();
      }

    );
  }

);

//navbar