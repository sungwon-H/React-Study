## React Study Day4 
<br/>

### To do List 만들기 예제

<br/>

### [목차]

1. [배경색 지정](#페이지에-회색-배경색상-적용)
2. [Todo Template 컴포넌트 생성](#todo-template-만들기)
3. [TodoHead 만들기](#todohead-만들기)
4. [TodoList 만들기](#todolist-만들기)
--- 

### 컴포넌트 만들기

- 투두리스트의 기능을 구현하기 전에 우리 프로젝트에서 필요한 모든 컴포넌트들의 UI를 미리 만들어 보겠습니다.

---

- create-react-app로 프로젝트 생성

    ```jsx
    npx create-react-app 프로젝트명
    ```

- npm 모듈 설치

    ```jsx
    npm i styled-components
    ```

- 프로젝트 **실행**

    ```jsx
    npm start
    ```

---

### 생성할 컴포넌트

- **Todo Template :** 이 컴포넌트는 우리가 만들 투두리스트의 레이아웃을 설정하는 컴포넌트입니다. 페이지의 중앙에 그림자가 적용된 흰색 박스를 나타내준다.
- **Todo Head :** 이 컴포넌트는 오늘의 날짜와 요일을 보여주고, 앞으로 해야할 일이 몇개 남았는지 보여줍니다.
- **Todo List :** 이 컴포넌트는 할 일에 대한 정보가 들어있는 todos 배열을 내장함수 map을 사용하여 TodoItem 컴포넌트를 렌더링 해줍니다.
- **TodoItem :**  각 할 일에 대한 정보를 렌더링해주는 컴포넌트입니다. 좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle할 수 있습니다. 할 일이 완료 됐을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해집니다.
그리고, 마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제됩니다.

- **TodoCreate :** 새로운 할 일을 등록할 수 있게 해주는 컴포넌트입니다. TodoTemplate 의 하단부에 초록색 원버튼을 렌더링해주고, 이를 클릭하면 할 일을 입력 할 수 있는 폼이 나타납니다. 버튼을 다시 누르면 폼이 사라집니다.

---

### 페이지에 회색 배경색상 적용

- 먼저 페이지에 회색(#e9ecef) 배경색상을 적용해보겠습니다. 페이지의 배경 색상을 설정하려면 body 태그에 CSS를 적용해주면 되는데요. 이를 하기 위해서는 index.css 에서 해도 무방하지만, 만약에 styled-components 를 사용해서 적용을 하고 싶을땐 어떻게 할 수 있는지 알아봅시다.

- styled-components에서 특정 컴포넌트를 만들어서 스타일링 하는게 아니라 글로벌 스타일을 추가하고 싶을 땐 createGlobalStyle 이라는 것을 사용합니다. 이 함수를 사용하면 컴포넌트가 만들어지는데, 이 컴포넌트를 렌더링 하면됩니다.

---
<br>

### App.js

```jsx
import React from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body{
   background: #e9ecef
 }
`
function App(){
  return(
    <>
    <GlobalStyle/>
    <div>안녕하세요</div>
    </>
  );
}

export default App;
```

---
<br/>

### Todo Template 만들기

- Todo Template 컴포넌트를 만들어서 중앙에 정렬된 흰색 박스를 보여주는 역할 입니다.
- src 디렉토리에 components 디렉토리를 만들고 그 안에 Todo Template.js 만든다.

---

<br/>

- **Todo Template.js**

    ```jsx
    import React from 'react';
    import styled from 'styled-components';

    const TodoTemplateBlock = styled.div`
        /* 배경*/
        width : 512px;
        height : 768px;

        position : relative; // 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정
        background : white;
        border-radius: 16px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

        margin: 0 auto; // 페이지 중앙 
        
        margin-top: 96px;
        mragin-bottom: 32px;
        display : flex;
        flex-direction: column;
    `
    function TodoTemplate({children}) {
        return(
            <TodoTemplateBlock>
                {children}
            </TodoTemplateBlock>
        );
    }

    export default TodoTemplate;
    ```
</br>

- **App.js**

    ```jsx
    import React from 'react';
    import {createGlobalStyle} from 'styled-components';
    import TodoTemplate from './components/TodoTemplate'

    const GlobalStyle = createGlobalStyle`
     body{
       background: #e9ecef
     }
    `
    function App(){
      return(
        <>
        
        <GlobalStyle/>
        <TodoTemplate>
        
        </TodoTemplate>
        
        </>
      );
    }

    export default App;
    ```

   ---
   </br>

   ### TodoHead 만들기

- 이 컴포넌트는 오늘의 날짜, 요일, 그리고 남은 할 일 개수를 보여줍니다.

---

</br>

- **TodoHead.js**

    ```jsx
    import React from 'react';
    import styled from 'styled-components';

    const TodoHeadBlock = styled.div`
      padding-top: 48px;
      padding-left: 32px;
      padding-right: 32px;
      padding-bottom: 24px;
      border-bottom: 1px solid #e9ecef;
      h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
      }
      .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
      }
      .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
      }
    `;

    function TodoHead() {
      return (
        <TodoHeadBlock>
          <h1>2019년 7월 10일</h1>
          <div className="day">수요일</div>
          <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
      );
    }

    export default TodoHead;
    ```

    - 이 컴포넌트에서는 TodoHeadBlock 안에 들어있는 내용들에 대하여 일일이 컴포넌트를 만드는 대신에 그냥 일반 HTML 태그를 사용한다
    - TodoHeadBlock의 스타일에서 CSS Selector를 사용하여  스타일링 해주었다.

</br>

- **App.js**

    ```jsx
    import React from 'react';
    import { createGlobalStyle } from 'styled-components';
    import TodoTemplate from './components/TodoTemplate';
    import TodoHead from './components/TodoHead';

    const GlobalStyle = createGlobalStyle`
      body {
        background: #e9ecef;
      }
    `;

    function App() {
      return (
        <>
          <GlobalStyle />
          <TodoTemplate>
            <TodoHead />
          </TodoTemplate>
        </>
      );
    }

    export default App;
    ```

    
---
</br>

### TodoList 만들기

- 여러개의 할 일 항목을 보여주게 될 TodoList 를 만든다.

---
</br>

- **TodoList.js**

    ```jsx
    import React from 'react';
    import styled from 'styled-components';

    const TodoListBlock = styled.div`
        flex: 1;
        padding: 20px 32px;
        padding-bottom : 48px;
        overflow-y: auto;
        

    `

    function TodoList(){
        return(
            <TodoListBlock>
                TodoList
            </TodoListBlock>
        )
    }

    export default TodoList;
    ```

    - 사이즈 설정
    - flex:1은 자신이 차지 할 수 있는 영역을 꽉 채우도록 설정 완료

</br>

- **App.js**

    ```jsx
    import React from 'react';
    import { createGlobalStyle } from 'styled-components';
    import TodoTemplate from './components/TodoTemplate';
    import TodoHead from './components/TodoHead';
    import TodoList from './components/TodoList';

    const GlobalStyle = createGlobalStyle`
      body {
        background: #e9ecef;
      }
    `;

    function App() {
      return (
        <>
          <GlobalStyle />
          <TodoTemplate>
            <TodoHead />
            <TodoList />
          </TodoTemplate>
        </>
      );
    }

    export default App;
    ```

--- 