# 템플릿 프로젝트
> Express.js 서버를 쉽고 빠르고 구축할 템플릿 프로젝트

## 
- `express.js` 
- `winston`
    - Log 데이터를 외부로 파일을 저장해서 관리하기 위해 사용
    - `console.log`, `console.error`를 대체하기 위한 모듈
        - console 객체의 메서드는 언제 호출되었는지 파악하기 힘들고, 서버가 종료되는 순간 쌓여있던 로그들도 사라지기 때문
    - `winston-daily-rotate-file`은 로그 파일을 관리해주는 모듈
    - `.*-audit.json`은 Winston에서 로그 파일의 맵을 만드는 데 사용하는 중요한 파일이다. 만일 이 파일이 없으면 매일 날짜 갱신 기능을 사용할 수 없음
- `morgan`
    - http 요청 응답을 위한 로깅인 morgan을 winston으로 관리해 해당 로그를 외부 로그 파일에 출력
    - winston 로그 level에 http 레벨에 사용
- 모듈화 (Modularization)
- 라우팅 (Routing)



#### `package-lock.json` 파일
- `package.json`에 설치되어 있는 모든 모듈들의 버전이 트리 구조로 명시
- 해당 파일의 버전을 관리한다면, 모든 환경에서 같은 버전의 모듈로 구성할 수 있음
- 협업을 할 때, 해당 파일도 커밋해주도록 하자

#### import 확장자명 생략
- Custom Module  import 시, 확장자명(.js) 생략 불가
- 만약 react, next, vue과 같은 라이브러리 또는 프레임워크를 사용했다면 확장자를 생략하여 접근할 수 있도록 셋팅이 되어있는 것

#### dotenv 모듈로 환경 변수 관리
- `npm install dotenv`
- `.env` 파일에 `key=value` 관리하여 사용

