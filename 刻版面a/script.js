$(document).ready(function () {
  $("#collapse").on("click", function () {
    $("#side-content").toggleClass("activea");
    $(".container-right").toggleClass("activec");
    $(".fa-toggle-off").toggleClass("fa-toggle-on");
    // 切換時禁用或啟用 hover 效果
    $(".container-left").toggleClass("disable-hover");
  });

  $(".container-left")
    .mouseenter(function () {
      if ($("#side-content").hasClass("activea")) {
        $("#side-content").addClass("activeb");
        $(".container-right").addClass("actived");
      }
    })
    .mouseleave(function () {
      $("#side-content").removeClass("activeb");
      $(".container-right").removeClass("actived");
    });

  $("#myCollapse1").click(function () {
    if (!$("#content1").hasClass("show")) {
      $("#content1").collapse("show");
    }
    if ($("#content2").hasClass("show")) {
      $("#content2").collapse("hide");
    }
  });

  $("#myCollapse2").click(function () {
    if (!$("#content2").hasClass("show")) {
      $("#content2").collapse("show");
    }
    if ($("#content1").hasClass("show")) {
      $("#content1").collapse("hide");
    }
  });

  $("#content1").collapse("show");
  $("#content2").collapse("hide");
});
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// particlesJS.load("particles-js", "assets/particles.json", function () {
//   console.log("callback - particles.js config loaded");
// });

const particlesJSON = {};
particlesJS("particles-js", particlesJSON);

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#000000" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#ff0000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#0c0c0c",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// ＝＝＝＝＝＝＝

document.addEventListener("DOMContentLoaded", function () {
  // 等待3秒後執行
  setTimeout(function () {
    anime({
      targets: ".welcome-container",
      opacity: [0, 1], // 由透明度 0 到 1 的動畫
      easing: "easeInOutQuad",
      duration: 0,
      complete: function (anim) {
        // 三秒後淡出
        setTimeout(function () {
          anime({
            targets: ".welcome-container",
            opacity: [1, 0], // 由透明度 1 到 0 的動畫
            easing: "easeInOutQuad",
            duration: 2000,
            complete: function () {
              // 動畫結束後隱藏元素
              document.getElementById("welcomeContainer").style.display =
                "none";
            },
          });
        }, 2000);
      },
    });
  }, 0);
});
