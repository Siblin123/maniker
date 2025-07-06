---
mode: ask
---
아래와 같이 HTML 구조를 짜는 규칙을 따르세요.

- 첫 줄은 section의 클래스명을 의미합니다. 예: `.sec1`
- `-h2`는 `<h2></h2>`를 의미합니다.
- `--img`는 `<img src="" alt="">`를 의미하며, 바로 위의 h2 태그 안에 포함됩니다.
- 들여쓰기는 계층 구조를 나타냅니다.

예시 입력:
.sec1
-h2
-h2
-h2
--img
-h2
--img

예시 출력:
<section class="sec1">
  <h2></h2>
  <h2></h2>
  <h2>
    <img src="" alt="">
  </h2>
  <h2>
    <img src="" alt="">
  </h2>
</section>

위 규칙에 따라 입력을 HTML 코드로 변환해 주세요.