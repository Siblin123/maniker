//=============header====================

//해더 온오프
let header = document.querySelector("header")
let logo = document.querySelector(".logo >a >img");
let navli = document.querySelectorAll("nav ul li ")

console.log(navli);
let navDetail = document.querySelector(".navDetail")
let ESG = document.querySelector(".ESG")
let service_var = document.querySelector(".service_var")
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
  logo.src = "./img/logo2.png";
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
  logo.src = "./img/logo1.png";
  navDetail.style.maxHeight = 0;

}

//마우스 아래로 내릴시 header가리기 올릴시 header 보이기
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {

  if (window.scrollY === 0) {
    // 최상단
    header.style.backgroundColor = "#ffffff00";
    logo.src = "./img/logo1.png";
    ESG.style.color = "white";
    ESG.style.borderColor = "white";
    hamburger.style.color = "white";
    service_var.style.color = "white";

  navli.forEach(li => {
    li.querySelector("a").style.color = "white";
    console.log("@");
  });
} else {
  // 최상단 아님
  header.style.backgroundColor = "#ffffff";
  logo.src = "./img/logo2.png";
  ESG.style.color = "black";
  ESG.style.borderColor = "black";
  hamburger.style.color = "black";
  service_var.style.color = "black";
  
    navli.forEach(li => {
      li.querySelector("a").style.color = "black";
    });

  }


  let currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    header.classList.add("ScrollDown");
    header.style.maxHeight = "0%";
  } else if (currentScrollY < lastScrollY) {
    header.classList.remove("ScrollDown");
    header.style.maxHeight = "100%";
  }

  lastScrollY = currentScrollY;
});


// 햄버거 아이콘과 gnb 영역 선택
let hamburger = document.querySelector(".fa-bars");
let hamburger_Parent = hamburger.parentElement;
let gnb = document.querySelector(".gnb");
let allmenuwrap = document.querySelector(".allmenuwrap");//pc전체메뉴
let allmenu_M = document.querySelector(".allmenu_M");//모바일 전체메뉴

// 햄버거 아이콘 클릭 시 동작
hamburger_Parent.addEventListener("click", function (e) {
  e.preventDefault(); // 클릭 시 새로고침 방지

  // gnb에 active 클래스 추가/제거 (토글)
  gnb.classList.toggle("active");

  if (window.innerWidth > 500) {
    allmenuwrap.classList.toggle("active");
  } else {
    allmenu_M.classList.toggle("active");
  }

  // 햄버거 아이콘을 X 아이콘으로 변경
  if (hamburger.classList.contains("fa-bars")) {
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-xmark");
    logo.src = "./img/logo2.png";
  } else {
    hamburger.classList.remove("fa-xmark");
    hamburger.classList.add("fa-bars");
    logo.src = "./img/logo1.png";
  }
});


//모바일 전체 서브메뉴 리스트 열기
let menu_title_M = document.querySelectorAll(".menu-title_M");

menu_title_M.forEach(function (menu_title) {
  menu_title.addEventListener("click", function () {
    let menuList = menu_title.nextElementSibling;

    // 1. 이미 열려 있는 경우 → 닫고 종료
    if (menuList.classList.contains("active")) {
      menuList.classList.remove("active");
      return; // 여기서 종료
    }

    // 2. 열려있는 다른 모든 메뉴 닫기
    document.querySelectorAll(".menu-List_M.active").forEach(function (openList) {
      openList.classList.remove("active");
    });

    // 3. 현재 클릭한 항목 열기
    menuList.classList.add("active");
  });
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











//=================sec3================

const imgBoxes = document.querySelectorAll(".imgBox img");

window.addEventListener("scroll", () => {
  const centerY = window.innerHeight / 2;

  imgBoxes.forEach((box) => {
    const rect = box.getBoundingClientRect();
    const boxCenter = rect.top + rect.height / 2;

    if (boxCenter < centerY) {
      box.style.transform = "scale(1.3)";
      box.style.transition = "transform 0.3s ease"; // 부드럽게 전환
    } else {
      box.style.transform = "scale(1)";
      box.style.transition = "transform 0.3s ease";
    }
  });
});




const scrollContainer = document.querySelector(".smooth-scroll");
let currentScroll = 0;
let targetScroll = 0;
let ease = 0.2;  // 부드러움 정도

function smoothScroll() {
  targetScroll = window.pageYOffset;
  currentScroll += (targetScroll - currentScroll) * ease;
  scrollContainer.style.transform = `translateY(-${currentScroll}px)`;
  requestAnimationFrame(smoothScroll);
}

function setBodyHeight() {
  document.body.style.height = scrollContainer.getBoundingClientRect().height + "px";
}

window.addEventListener("load", () => {
  setBodyHeight();
  smoothScroll();
});

window.addEventListener("resize", setBodyHeight);





var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  effect: "fade",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

