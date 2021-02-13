# create-react-app

- 리액트 개발 환경을 직접 구축하려면 많은 지식과 노력이 필요한데, 이걸 한방에 해준다.
- ex) webpack, babel, eslint, HMR, CSS 후처리 ...


### create-react-app vs next.js
create-react-app은 Server Side Rendering 을 기본으로 지원해 주지 않고,
설정을 변경해서 SSR을 사용하더라도 적절하지 않다고 한다.
SSR을 원한다면, nextJs를 사용하자


## 기본 명령어

### start
개발 모드로 실행할 때 사용.
기본적으로 http로 실행된다.


### build
배포시 사용. 정적파일이 생성된다.
이미지 파일의 경우, 파일의 사이즈에 따라 다르게 빌드? 된다.
큰 사이즈의 이미지는 media/ 하위에 저장, 작은 사이즈의 이미지는, js/ 하위의 .js파일에 내장된다.


### test
__tests__ 폴더 하위의 파일,
xxx.test.js 파일
xxx.spec.js 파일을 인식해서 테스트한다.


### eject
