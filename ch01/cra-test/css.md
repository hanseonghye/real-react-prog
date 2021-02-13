# css 작성 방법 결정하기

## 일반적인 CSS 파일로 작성하기
충돌이 나서 원하는 결과물이 나오지 않을 수 있다.
`npm run build`로 빌드된 .css 파일을 확인해 보자.

## css-module로 작성하기
위의 이름 충돌 문제를 해결 할 수 있다.
xxx.module.css 형식으로 css 파일을 작성.
객체 형식으로 style 을 내보낸다.

각각의 속성들은 해시값의 고유한 이름을 가지게 되는데, 이를 통해 충돌이 일어나지 않는다.

클래스 이름을 부여하는게 번거러운데, `classnames` 모듈을 사용해보자.



## sass로 작성하기
`$ npm install node-sass`


## css-in-js로 작성하기
css코드를 js 로 관리.
재사용하기 쉽고, 동적으로 관리하기 좋다.
`$ npm install styled-components`
