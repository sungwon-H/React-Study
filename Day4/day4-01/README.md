# React Study Day4  
<br/>

### styled-component

- CSS in JS 기술을 사용하는 라이브러리입니다.(JS안에CSS를 작성하는 것을 의미)
- styled-components는 현존하는 CSS in JS 관련 리액트 라이브러리 중에서 가장 인기 있는 라이브러리 입니다.
- 기존 돔을 만드는 방식인 css, scss 파일을 밖에 두고, 태그나 id, class이름으로 가져와 쓰지 않고, 동일한 컴포넌트에서 컴포넌트 이름을 쓰듯 스타일을 지정하는 것을 styled-cpmponent라고 부릅니다.
- css파일을 밖에 두지 않고, 컴포넌트 내부에 넣기 때문에, css가 전역으로 중첩되지 않도록 만들어주는 장점이 있습니다.

---

### npm 설치

```jsx
npm i styled-components
```
---
- **styled-components 예제**
    - **App.js**

        ```jsx
        import React from 'react';
        import styled from 'styled-components'; // 스타일 컴포넌트 라이브러리 

        const Circle = styled.div`
          widht: 5rem;
          height: 5rem;
          background: black;
          border-radius: 50%;
        `;

        function App(){
          return <Circle/>;
        }
        export default App;
        ```

        - 리액트 선언 및 styled-components 라이브러리 사용

            ```jsx
            import React from 'react';
            import styled from 'styled-components'; // 스타일 컴포넌트 라이브러리 
            ```

        - Circle라는 스타일 컴포넌트 생성
            - styled-components를 사용하면 이렇게 스타일을 입력함과 동시에 해당 스타일을 가진 컴포넌트를 만들 수 있다.
            - div를 꾸미고 싶으면 styled.div``, input을  꾸미고 싶다면 styled.input 사용하면된다.

            ```jsx

            const Circle = styled.div`
              widht: 5rem;
              height: 5rem;
              background: black;
              border-radius: 50%;
            `;

            ```

        - 화면에 출력되는 부분 및 외부 사용 선언

            ```jsx
            function App(){
              return <Circle/>;
            }
            export default App;
            ```
---
</br>

- **위에 코드에서** **Circle 컴포넌트에 color이라는 props 추가 예제**
    - **App.js**

        ```jsx
        import React from 'react';
        import styled from 'styled-components'; // 스타일 컴포넌트 라이브러리 

        const Circle = styled.div`
          width: 5rem;
          height: 5rem;
          background: ${props => props.color || 'black'}; // Circle 컴포넌트에서 color props 값을 설정 해줬다면 해당 값을 배경색으로 지정하고, 그렇지 않다면 검정색으로 설정 
          border-radius: 50%;
        `;

        function App(){
          return <Circle color='blue'/>;
        }
        export default App;
        ```

        - 리액트 사용 선언 및 styled-components 라이브러리 사용

            ```jsx
            import React from 'react';
            import styled from 'styled-components'; // 스타일 컴포넌트 라이브러리 
            ```

        - Circle 컴포넌트에 props추가
        - color props 값을 설정해줬으면 해당 값을 배경색으로 설정하고, 그렇지 않으면 검정색을 배경색으로 사용하도록 설정되었습니다.

            ```jsx
            const Circle = styled.div`
              width: 5rem;
              height: 5rem;
              background: ${props => props.color || 'black'}; // Circle 컴포넌트에서 color props 값을 설정 해줬다면 해당 값을 배경색으로 지정하고, 그렇지 않다면 검정색으로 설정 
              border-radius: 50%;
            `;

            ```

        - 컴포넌트 적용 및 외부 사용 선언
            - Circle color='blue'부분을 설정하지 않으면 black이다.

            ```jsx
            function App(){
              return <Circle color='blue'/>;
            }
            export default App;
            ```

       