//=============header====================

//해더 온오프
let header = document.querySelector("header")
let logo = document.querySelector(".logo >a >img");
let navli = document.querySelectorAll("nav ul li ")
let navDetail = document.querySelector(".navDetail")

navli.forEach(li => {
  li.addEventListener("mouseenter", function () {
    openHeader(li);
  });
});

navDetail.addEventListener("mouseenter", function () {
  navli.forEach(li => {
    li.addEventListener("mouseenter", function () {
      openHeader(li);
    });
  });
})

navDetail.addEventListener("mouseleave", function () {

  navli.forEach(li => {
    closeHeader();
  })
});

header.addEventListener("mouseleave", function () {

  navli.forEach(li => {
    closeHeader();
  })
});

header.addEventListener("mouseenter", function () {

  navli.forEach(li => {
    li.addEventListener("mouseenter", function () {
      openHeader(li);
    });
  });
});



function openHeader(li) {

  let allmenuwrap = document.querySelector(".allmenuwrap");
  if (allmenuwrap.classList.contains("active"))
    return;

  let curNav = li.dataset.nav;
  let navDetailUls = navDetail.querySelectorAll('ul');


  navDetailUls.forEach(function (navdetail) {
    if (navdetail.dataset.nav == curNav) {
      navdetail.style.display = "flex";
    } else {
      navdetail.style.display = "none";
    }
  });



  navli.forEach(li => {
    let a = li.querySelector("a");
    if (a) a.style.color = "black";
  });

  // 여기에 호버 시 실행할 코드 작성
  header.style.backgroundColor = "white";
  logo.src = "/img/logo2.png";
  navDetail.style.maxHeight = "80px";

}

function closeHeader() {

  navli.forEach(LI => {
    navli.forEach(li => {
      let a = li.querySelector("a");
      if (a) a.style.color = "white";
    });


  })

  // 여기에 호버 시 실행할 코드 작성
  header.style.backgroundColor = "#ffffff00";
  logo.src = "/img/logo1.png";
  navDetail.style.maxHeight = 0;

}

// 햄버거 아이콘과 gnb 영역 선택
let hamburger = document.querySelector(".fa-bars");
let gnb = document.querySelector(".gnb");
let allmenuwrap = document.querySelector(".allmenuwrap");

// 햄버거 아이콘 클릭 시 동작
hamburger.addEventListener("click", function (e) {
  e.preventDefault(); // 클릭 시 새로고침 방지

  // gnb에 active 클래스 추가/제거 (토글)
  gnb.classList.toggle("active");
  allmenuwrap.classList.toggle("active");
  // 햄버거 아이콘을 X 아이콘으로 변경
  if (hamburger.classList.contains("fa-bars")) {
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-xmark");
  } else {
    hamburger.classList.remove("fa-xmark");
    hamburger.classList.add("fa-bars");
  }
});

//=============================================================






//===============sec1======================
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".fade-up-js");

  targets.forEach(el => {
    // 초기 스타일 설정
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
  });

  function handleScrollFade() {
    targets.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 50) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", handleScrollFade);
  window.addEventListener("load", handleScrollFade);
});

let inline_img = document.querySelectorAll(".inline-img");
function blockScrollWhenVisible() {

  const scrollTop = document.documentElement.scrollTop; // ← 여기 변수 이름을 맞추자!

  if (scrollTop > 500) {
    document.addEventListener("scroll", function () {
      inline_img.forEach(img => {
        img.style.width = scrollTop - 500 + "px";
      });
    })
  }



}

window.addEventListener("scroll", blockScrollWhenVisible);

//=============================
const imgViewer = document.querySelector(".sec5 .imgViewer");
const imgViewer_Ul = document.querySelector(".sec5 .imgViewer ul");


function checkImgViewerPosition() {
  const rect = imgViewer.getBoundingClientRect();
  if (rect.top <= 0) {
    document.body.classList.add("stop-scrolling");
    document.documentElement.classList.add("stop-scrolling");
  }

}

window.addEventListener("scroll", checkImgViewerPosition);

//=================================
var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  effect: "fade",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});