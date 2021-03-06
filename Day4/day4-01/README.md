# React Study Day4  
<br/>

## 목차

1. [styled-component](#styled-component)
2. [npm 설치](#npm-설치)
3. [styled-components 예제](#styled-components-예제)
4. [버튼 만들기 예제](#버튼-만들기-예제)
5. [polished의 스타일 관련 유틸 함수 사용하기](#polished의-스타일-관련-유틸-함수-사용하기)
6. [여러가지 사이즈의 버튼 생성](#여러가지-사이즈의-버튼-생성)
7. [Button버튼 컴포넌트에 outline 추가](#button버튼-컴포넌트에-outline-추가)
8. [Dialog 만들기](#dialog-만들기)
9. [Dialog.js 박스 열고 닫기](#dialog-js-박스-열고-닫기)
10. [Dialog 트랜지션 구현하기](#dialog-트랜지션-구현하기)


---
<br/>

## styled component

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
- ### styled components 예제
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

- **Circle 컴포넌트에 color props 추가 예제**
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
---
<br/>

- **Circle 컴포넌트에 huge라는 props 설정 예제**
    - **App.js**

        ```jsx
        import React from 'react';
        import styled,{ css } from 'styled-components'; // 스타일 컴포넌트 라이브러리 

        const Circle = styled.div`
          width: 5rem;
          height: 5rem;
          background: ${props => props.color || 'black'};
          border-radius: 50%;
          ${props => 
            props.huge && css`
              width: 10rem;
              height: 10rem;
            `}
        `;

        function App(){
          return <Circle color='red' huge/>;
        }
        export default App;
        ```

        - 리액트 사용 및 styled-components 라이브러리 사용 css 여러줄 사용할 경우 {css} 추가

            ```jsx
            import React from 'react';
            import styled,{ css } from 'styled-components'; // 스타일 컴포넌트 라이브러리 
            ```

        - Circle 컴포넌트
            - 여러 줄의 css 코드를 조건부로 보이고 싶다면 css를 사용해야한다.
            - css를 불러와서 사용을 해야만 그 스타일 내부에서도 다른 props를 조회 할 수 있습니다.

            ```jsx
            const Circle = styled.div`
              width: 5rem;
              height: 5rem;
              background: ${props => props.color || 'black'};
              border-radius: 50%;
              ${props => 
                props.huge && css`
                  width: 10rem;
                  height: 10rem;
                `}
            `;

            ```

            - 컴포넌트 적용 및 외부 사용 선언

                ```jsx
                function App(){
                  return <Circle color='red' huge/>;
                }
                export default App;
                ```
---

<br/>

### 버튼 만들기 예제

- 이전 Sass 를 배울 때 만들었던 재사용성 높은 Button 컴포넌트를 styled-components로 구현

---

- **src/components/Button.js**

    ```jsx
    import React from 'react';
    import styled from 'styled-components';

     // 버튼 css 
    const StyledButton = styled.button`
            /* 공통 스타일 */
            display: inline-flex;
            outline: none;
            border: none;
            border-radius: 4px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            padding-left: 1rem;
            padding-right: 1rem;

            /* 크기 */
            height: 2.25rem;
            font-size: 1rem;

            /* 색상 */
            background: #228be6;
            &:hover {
            background: #339af0;
            }
            &:active {
            background: #1c7ed6;
            }

            /* 기타 */
            & + & {
            margin-left: 1rem;
            }
    `;

    function Button({ children, ...rest}) {
        return <StyledButton {...rest}>{children}</StyledButton>;
    }

    export default Button;
    ```

    - 리액트 사용 및 styled-components 라이브러리 사용 선언

        ```jsx
        import React from 'react';
        import styled from 'styled-components';
        ```

    - styled-components를 사용한 버튼 css

        ```jsx
         // 버튼 css 
        const StyledButton = styled.button`
                /* 공통 스타일 */
                display: inline-flex;
                outline: none;
                border: none;
                border-radius: 4px;
                color: white;
                font-weight: bold;
                cursor: pointer;
                padding-left: 1rem;
                padding-right: 1rem;

                /* 크기 */
                height: 2.25rem;
                font-size: 1rem;

                /* 색상 */
                background: #228be6;
                &:hover {
                background: #339af0;
                }
                &:active {
                background: #1c7ed6;
                }

                /* 기타 */
                & + & {
                margin-left: 1rem;
                }
        `;
        ```

    - Button components 함수 및 외부 사용 선언

        ```jsx
        function Button({ children, ...rest}) {
            return <StyledButton {...rest}>{children}</StyledButton>;
        }

        export default Button;
        ```

- **App.js**

    ```jsx
    import React from 'react';
    import styled from 'styled-components'; // 스타일 컴포넌트 라이브러리 
    import Button from './components/Button';

    const AppBlock = styled.div` // 테두리 
        width: 512px;
        margin: 0 auto;
        margin-top: 4rem;
        border: 1px solid black;
        padding: 1rem;
    `;

    function App(){
      return(
        <AppBlock>
          <Button>BUTTON</Button>
        </AppBlock>
      );
    }
    export default App;
    ```

    - 리액트 모듈 선언 및 styled-components라이브러리, Button 컴포넌트 사용 선언

        ```jsx
        import React from 'react';
        import styled from 'styled-components'; // 스타일 컴포넌트 라이브러리 
        import Button from './components/Button';

        ```

    - styled-components로 만든 버튼 바깥 테두리

        ```jsx
        const AppBlock = styled.div` // 테두리 
            width: 512px;
            margin: 0 auto;
            margin-top: 4rem;
            border: 1px solid black;
            padding: 1rem;
        `;
        ```

    - App 함수 및 외부 사용 선언

        ```jsx
        function App(){
          return(
            <AppBlock>
              <Button>BUTTON</Button>
            </AppBlock>
          );
        }
        export default App;
        ```

   

---

</br>

### **polished의 스타일 관련 유틸 함수 사용하기**

</br>

- Sass를 사용 할 때에는 lighten() 또는 darken() 과 같은 유틸 함수를 사용하여 색상에 변화를 줄 수 있었다.
- CSS in JS 에서도 비슷한 유틸 함수를 사용 하려면 polished라는 라이브러리를 사용한다

---

### npm 설치

```jsx
npm i polished
```

---

</br>

- **polished 라이브러리 사용 예제**

    - **App.js**

        ```jsx
        import React from 'react';
        import styled, {ThemeProvider} from 'styled-components'; // 스타일 컴포넌트 라이브러리 
        import Button from './components/Button';

        const AppBlock = styled.div` // 테두리 
            width: 512px;
            margin: 0 auto;
            margin-top: 4rem;
            border: 1px solid black;
            padding: 1rem;
        `;

        function App(){
          return(
            <ThemeProvider
            theme={{
              palette: {
                blue: '#228be6',
                gray: '#495057',
                pink: '#f06595'
              }
            }}
            >
            <AppBlock>
              <Button>BUTTON</Button>
        			<Button color="gray">BUTTON</Button>
              <Button color="pink">BUTTON</Button>
            </AppBlock>
            </ThemeProvider>
          );
        }
        export default App;
        ```

        - 리액트 선언 및 styled-components 라이브러리 및 버튼 컴포넌트 사용
        - ThemeProvider기능은 styled-components로 만든 모든 컴포넌트에서 조회하여 사용할 수 있는 전역적인 값을 설정하는 기능

            ```jsx
            import React from 'react';
            import styled, {ThemeProvider} from 'styled-components'; // 스타일 컴포넌트 라이브러리 
            import Button from './components/Button';

            ```

        - 버튼 바깥 테두리

            ```jsx
            const AppBlock = styled.div` // 테두리 
                width: 512px;
                margin: 0 auto;
                margin-top: 4rem;
                border: 1px solid black;
                padding: 1rem;
            `;
            ```

        - App함수
        - Theme을 설정하면 ThemeProvider 내부에 랜터링된 styled-components로 만든 컴포넌트에서 palette를 조회하여 사용 할 수 있습니다.

            ```jsx
            function App(){
              return(
                <ThemeProvider
                theme={{
                  palette: {
                    blue: '#228be6',
                    gray: '#495057',
                    pink: '#f06595'
                  }
                }}
                >
                <AppBlock>
                  <Button>BUTTON</Button>
            			<Button color="gray">BUTTON</Button>
                  <Button color="pink">BUTTON</Button>
                </AppBlock>
                </ThemeProvider>
              );
            }
            export default App;
            ```

---

- **Button.js**

    ```jsx
    import React from 'react';
    import styled, { css } from 'styled-components';
    import { darken, lighten } from 'polished';

    const StyledButton = styled.button`
      /* 공통 스타일 */
      display: inline-flex;
      outline: none;
      border: none;
      border-radius: 4px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      padding-left: 1rem;
      padding-right: 1rem;

      /* 크기 */
      height: 2.25rem;
      font-size: 1rem;

      /* 색상 */
      ${props => {
        const selected = props.theme.palette[props.color];
        return css`
          background: ${selected};
          &:hover {
            background: ${lighten(0.1, selected)};
          }
          &:active {
            background: ${darken(0.1, selected)};
          }
        `;
      }}

      /* 기타 */
      & + & {
        margin-left: 1rem;
      }
    `;

    function Button({ children, ...rest }) {
      return <StyledButton {...rest}>{children}</StyledButton>;
    }

    Button.defaultProps = {
      color: 'blue'
    };

    export default Button;
    ```

    - 리액트 사용 선언 및 styled-components 및 색상변화 유틸 함수 선언

        ```jsx
        import React from 'react';
        import styled, { css } from 'styled-components';
        import {darken, lighten} from 'polished'; // 색상 변화 유틸 함수
        ```

    - Button CSS
    - ThemeProvider로 설정한 값은 styled-components에서 props.theme로 조회 할 수 있다.
    - selected 값을 Button컴포넌트가 color props를 통하여 받아오게 될 색상을 사용하게함

        ```jsx
        import React from 'react';
        import styled, { css } from 'styled-components';
        import { darken, lighten } from 'polished';

        const StyledButton = styled.button`
          /* 공통 스타일 */
          display: inline-flex;
          outline: none;
          border: none;
          border-radius: 4px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          padding-left: 1rem;
          padding-right: 1rem;

          /* 크기 */
          height: 2.25rem;
          font-size: 1rem;

          /* 색상 */
          ${props => {
            const selected = props.theme.palette[props.color];
            return css`
              background: ${selected};
              &:hover {
                background: ${lighten(0.1, selected)};
              }
              &:active {
                background: ${darken(0.1, selected)};
              }
            `;
          }}

          /* 기타 */
          & + & {
            margin-left: 1rem;
          }
        `;

        function Button({ children, ...rest }) {
          return <StyledButton {...rest}>{children}</StyledButton>;
        }

        Button.defaultProps = {
          color: 'blue'
        };

        export default Button;
        ```

---

</br>

- **Button 컴포넌트 코드 리팩토링**

    - **Button.js**

        ```jsx
        import React from 'react';
        import styled, { css } from 'styled-components';
        import { darken, lighten } from 'polished';

        const StyledButton = styled.button`
          /* 공통 스타일 */
          display: inline-flex;
          outline: none;
          border: none;
          border-radius: 4px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          padding-left: 1rem;
          padding-right: 1rem;

          /* 크기 */
          height: 2.25rem;
          font-size: 1rem;
          padding-top: 10px;

          /* 색상 */
          ${({theme, color}) => {
              const selected = theme.pallette[color];
              return css`
              background: ${selected};
              &:hover {
                background: ${lighten(0.1, selected)};
              }
              &:active {
                background: ${darken(0.1, selected)};
              }
            `;  
              
          }}

          /* 기타 */
          & + & {
            margin-left: 1rem;
          }
        `;

        function Button({ children, color, ...rest }) {
          return <StyledButton color={color} {...rest}>{children}</StyledButton>;
        }

        Button.defaultProps = {
          color: 'blue'
        };

        export default Button;
        ```

        - 리액트 사용 및 styled-components라이브러리 사용 및 polished 라이브러리 사용

            ```jsx
            import React from 'react';
            import styled, { css } from 'styled-components';
            import { darken, lighten } from 'polished';

            ```

        - styled-components라이브러리로 스타일링한 스타일버튼
        - props.theme.palette.blue 이런식으로 값을 조회하는 대신에 비구조화 할당 문법을 사용하여 가독성을 높여주었습니다

            ```jsx
            const StyledButton = styled.button`
              /* 공통 스타일 */
              display: inline-flex;
              outline: none;
              border: none;
              border-radius: 4px;
              color: white;
              font-weight: bold;
              cursor: pointer;
              padding-left: 1rem;
              padding-right: 1rem;

              /* 크기 */
              height: 2.25rem;
              font-size: 1rem;
              padding-top: 10px;

              /* 색상 */
              ${({theme, color}) => {
                  const selected = theme.pallette[color];
                  return css`
                  background: ${selected};
                  &:hover {
                    background: ${lighten(0.1, selected)};
                  }
                  &:active {
                    background: ${darken(0.1, selected)};
                  }
                `;  
                  
              }}

              /* 기타 */
              & + & {
                margin-left: 1rem;
              }
            `;
            ```

        - 버튼 함수 및 버튼 기본 색상, 외부 사용 선언

            ```jsx
            function Button({ children, color, ...rest }) {
              return <StyledButton color={color} {...rest}>{children}</StyledButton>;
            }

            Button.defaultProps = {
              color: 'blue'
            };

            export default Button;
            ```

    - 위 코드를 색상에 관련된 코드를 분리하여 사용 할 수도 있습니다 (유지보수에 좋다 )

        ```jsx
        import React from 'react';
        import styled, { css } from 'styled-components';
        import { darken, lighten } from 'polished';

        const colorStyles = css`
            ${({ theme, color }) => {
                const selected = theme.palette[color];
                return css`
                background: ${selected};
                &:hover {
                    background: ${lighten(0.1, selected)};
                }
                &:active {
                    background: ${darken(0.1, selected)};
                }
                `;
            }}
        `

        const StyledButton = styled.button`
          /* 공통 스타일 */
          display: inline-flex;
          outline: none;
          border: none;
          border-radius: 4px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          padding-left: 1rem;
          padding-right: 1rem;

          /* 크기 */
          height: 2.25rem;
          font-size: 1rem;
          padding-top: 10px;

          /* 색상 */
            ${colorStyles}
          /* 기타 */
          & + & {
            margin-left: 1rem;
          }
        `;

        function Button({ children, color, ...rest }) {
          return <StyledButton color={color} {...rest}>{children}</StyledButton>;
        }

        Button.defaultProps = {
          color: 'blue'
        };

        export default Button;
        ```
---

### 여러가지 사이즈의 버튼 생성

- sizeprops를 설정하여 다양한 크기의 버튼 생성
    - **Button.js**

        ```jsx
        import React from 'react';
        import styled, { css } from 'styled-components';
        import { darken, lighten } from 'polished';

        const colorStyles = css`
            ${({ theme, color }) => {
                const selected = theme.palette[color];
                return css`
                background: ${selected};
                &:hover {
                    background: ${lighten(0.1, selected)};
                }
                &:active {
                    background: ${darken(0.1, selected)};
                }
                `;
            }}
        `
        const sizeStyles = css` // 사이즈 스타일 생성 
            ${props =>
                props.size === 'large' && css`
                height: 3rem;
                font-size: 1.25rem;   
                padding-top: 10px;   
                `}
             ${props =>
                props.size === 'medium' && css`
                height: 2.25rem;
                font-size: 1rem;    
                padding-top: 10px;   
                `}
             ${props =>
                props.size === 'small' && css`
                height: 1.75rem;
                font-size: 0.875rem; 
                padding-top: 5px;      
                `}
        `;
        const StyledButton = styled.button`
          /* 공통 스타일 */
          display: inline-flex;
          outline: none;
          border: none;
          border-radius: 4px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          padding-left: 1rem;
          padding-right: 1rem;

          /* 크기 */
            ${sizeStyles}

          /* 색상 */
            ${colorStyles}

          /* 기타 */
          & + & {
            margin-left: 1rem;
          }
        `;

        function Button({ children, color, size, ...rest }) {
          return <StyledButton color={color} size={size} {...rest}>{children}</StyledButton>;
        }

        Button.defaultProps = {
          color: 'blue'
        };

        export default Button;
        ```

        - sizeStyles에 해당하는 코드를 따로 분리하지 않고 StyledButton의 스타일 내부에 바로 적어도 상관은 없다.

  </br>

    - **App.js(버튼 렌더링)**

        ```jsx
        import React from 'react';
        import styled, { ThemeProvider } from 'styled-components';
        import Button from './components/Button';

        const AppBlock = styled.div`
          width: 512px;
          margin: 0 auto;
          margin-top: 4rem;
          border: 1px solid black;
          padding: 1rem;
        `;

        const ButtonGroup = styled.div`
          & + & {
            margin-top: 1rem;
          }
        `;

        function App() {
          return (
            <ThemeProvider
              theme={{
                palette: {
                  blue: '#228be6',
                  gray: '#495057',
                  pink: '#f06595'
                }
              }}
            >
              <>
              <AppBlock>
              <ButtonGroup>
                  <Button size="large">BUTTON</Button>
                  <Button>BUTTON</Button>
                  <Button size="small">BUTTON</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button color="gray" size="large">BUTTON</Button>
                  <Button color="gray">BUTTON</Button>
                  <Button color="gray" size="small">BUTTON</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button color="pink" size="large">BUTTON</Button>
                  <Button color="pink">BUTTON</Button>
                  <Button color="pink" size="small">BUTTON</Button>
                </ButtonGroup>
              </AppBlock>
              </>
            </ThemeProvider>
          );
        }

        export default App;
        ```

        - ButtonGroup 이라는 컴포넌트를 만들어서 서로간의 여백을 1rem 으로 설정해주면 버튼끼리 떨어진다.

---

- **코드리팩토링**

    - **Button.js**

        ```jsx
        import React from 'react';
        import styled, { css } from 'styled-components';
        import { darken, lighten } from 'polished';

        const colorStyles = css`
            ${({ theme, color }) => {
                const selected = theme.palette[color];
                return css`
                background: ${selected};
                &:hover {
                    background: ${lighten(0.1, selected)};
                }
                &:active {
                    background: ${darken(0.1, selected)};
                }
                `;
            }}
        `;
        const sizes = {
            large: {
              height: '3rem',
              fontSize: '1.25rem'
            },
            medium: {
              height: '2.25rem',
              fontSize: '1rem'
            },
            small: {
              height: '1.75rem',
              fontSize: '0.875rem'
            }
          };

        const sizeStyles = css` // 사이즈 스타일 생성 
            ${({size})=> css`
            height: ${sizes[size].height};
            font-size: ${sizes[size].fontSize};
            
            `}
        `;
        const StyledButton = styled.button`
          /* 공통 스타일 */
          display: inline-flex;
          outline: none;
          border: none;
          border-radius: 4px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          padding-left: 1rem;
          padding-right: 1rem;

          /* 크기 */
            ${sizeStyles}

          /* 색상 */
            ${colorStyles}

          /* 기타 */
          & + & {
            margin-left: 1rem;
          }
        `;

        function Button({ children, color, size, ...rest }) {
          return <StyledButton color={color} size={size} {...rest}>
              {children}
              </StyledButton>;
        }

        Button.defaultProps = {
          color: 'blue',
          size: 'medium'
        };

        export default Button;
        ```

 ---

 <br/>

 ### Button버튼 컴포넌트에 outline 추가

 <br/>

- Button 컴포넌트에 outline 이라는 props를 설정하여 이 값이 true일 때에는 테두리만 지닌 버튼을 보여주도록 설정해보겠습니다.
- 이 작업을 할 때에는 colorStyles 만 수정하면 된다.

---

- **Button.js**

    ```jsx
    import React from 'react';
    import styled, { css } from 'styled-components';
    import { darken, lighten } from 'polished';

    const colorStyles = css`
        ${({ theme, color }) => {
            const selected = theme.palette[color];
            return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
            ${props => 
               props.outline && 
            css`
                color: ${selected};
                background: none;
                border: 1px solid ${selected};
                &:hover {
                    background: ${selected};
                    color: white;
                }
            `}
            `;
        }}
    `;
    const sizes = {
        large: {
          height: '3rem',
          fontSize: '1.25rem'
        },
        medium: {
          height: '2.25rem',
          fontSize: '1rem'
        },
        small: {
          height: '1.75rem',
          fontSize: '0.875rem'
        }
      };

    const sizeStyles = css` // 사이즈 스타일 생성 
        ${({size})=> css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
        
        `}
    `;
    const StyledButton = styled.button`
      /* 공통 스타일 */
      display: inline-flex;
      outline: none;
      border: none;
      border-radius: 4px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      padding-left: 1rem;
      padding-right: 1rem;

      /* 크기 */
        ${sizeStyles}

      /* 색상 */
        ${colorStyles}

      /* 기타 */
      & + & {
        margin-left: 1rem;
      }
    `;

    function Button({ children, color, size, outline, ...rest }) {
      return <StyledButton color={color} size={size} outline={outline} {...rest}>
          {children}
          </StyledButton>;
    }

    Button.defaultProps = {
      color: 'blue',
      size: 'medium'
    };

    export default Button;
    ```

    - colorStyles 추가된 부분과 Button 함수에도 추가

        ```jsx
         ${props => 
                   props.outline && 
                css`
                    color: ${selected};
                    background: none;
                    border: 1px solid ${selected};
                    &:hover {
                        background: ${selected};
                        color: white;
                    }
                `}

        function Button({ children, color, size, outline, ...rest }) {
          return <StyledButton color={color} size={size} outline={outline} {...rest}>
              {children}
              </StyledButton>;
        }
        ```

- **App.js(렌더링)**

    ```jsx
    import React from 'react';
    import styled, { ThemeProvider } from 'styled-components';
    import Button from './components/Button';

    const AppBlock = styled.div`
      width: 512px;
      margin: 0 auto;
      margin-top: 4rem;
      border: 1px solid black;
      padding: 1rem;
    `;

    const ButtonGroup = styled.div`
      & + & {
        margin-top: 1rem;
      }
    `;

    function App() {
      return (
        <ThemeProvider
          theme={{
            palette: {
              blue: '#228be6',
              gray: '#495057',
              pink: '#f06595'
            }
          }}
        >
          <>
          <AppBlock>
          <ButtonGroup>
              <Button size="large">BUTTON</Button>
              <Button>BUTTON</Button>
              <Button size="small">BUTTON</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="gray" size="large" outline>BUTTON</Button>
              <Button color="gray" outline>BUTTON</Button>
              <Button color="gray" size="small">BUTTON</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="pink" size="large">BUTTON</Button>
              <Button color="pink">BUTTON</Button>
              <Button color="pink" size="small">BUTTON</Button>
            </ButtonGroup>
          </AppBlock>
          </>
        </ThemeProvider>
      );
    }

    export default App;
    ```

    ---
<br/>

### Button버튼 컴포넌트에 fullWidth 추가

- 버튼의 크기가 100%인 fullWidth라는 props 생성

---

- **Button.js**

    ```jsx
    import React from 'react';
    import styled, { css } from 'styled-components';
    import { darken, lighten } from 'polished';

    const colorStyles = css`
        ${({ theme, color }) => {
            const selected = theme.palette[color];
            return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
            ${props => 
               props.outline && 
            css`
                color: ${selected};
                background: none;
                border: 1px solid ${selected};
                &:hover {
                    background: ${selected};
                    color: white;
                }
            `}
            `;
        }}
    `;
    const sizes = {
        large: {
          height: '3rem',
          fontSize: '1.25rem'
        },
        medium: {
          height: '2.25rem',
          fontSize: '1rem'
        },
        small: {
          height: '1.75rem',
          fontSize: '0.875rem'
        }
      };

    const sizeStyles = css` // 사이즈 스타일 생성 
        ${({size})=> css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
        
        `}
    `;
    const fullWidthStyle = css`
      ${props =>
        props.fullWidth &&
        css`
          width: 100%;
          justify-content: center;
          & + & {
            margin-left: 0;
            margin-top: 1rem;
          }
        `}
    `;
    const StyledButton = styled.button`
      /* 공통 스타일 */
      display: inline-flex;
      outline: none;
      border: none;
      border-radius: 4px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      padding-left: 1rem;
      padding-right: 1rem;

      /* 크기 */
        ${sizeStyles}

      /* 색상 */
        ${colorStyles}

      /* 기타 */
      & + & {
        margin-left: 1rem;
      }
     ${fullWidthStyle} 
    `;

    function Button({ children, color, size, outline, fullWidth, ...rest }) {
      return <StyledButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...rest}>
          {children}
          </StyledButton>;
    }

    Button.defaultProps = {
      color: 'blue',
      size: 'medium'
    };

    export default Button;
    ```

    - 추가된부분

        ```jsx
        const fullWidthStyle = css`
          ${props =>
            props.fullWidth &&
            css`
              width: 100%;
              justify-content: center;
              & + & {
                margin-left: 0;
                margin-top: 1rem;
              }
            `}
        `;
        ```

- **App.js**

    ```jsx
    import React from 'react';
    import styled, { ThemeProvider } from 'styled-components';
    import Button from './components/Button';

    const AppBlock = styled.div`
      width: 512px;
      margin: 0 auto;
      margin-top: 4rem;
      border: 1px solid black;
      padding: 1rem;
    `;

    const ButtonGroup = styled.div`
      & + & {
        margin-top: 1rem;
      }
    `;

    function App() {
      return (
        <ThemeProvider
          theme={{
            palette: {
              blue: '#228be6',
              gray: '#495057',
              pink: '#f06595'
            }
          }}
        >
          <AppBlock>
            <ButtonGroup>
              <Button size="large">BUTTON</Button>
              <Button>BUTTON</Button>
              <Button size="small">BUTTON</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="gray" size="large">
                BUTTON
              </Button>
              <Button color="gray">BUTTON</Button>
              <Button color="gray" size="small">
                BUTTON
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="pink" size="large">
                BUTTON
              </Button>
              <Button color="pink">BUTTON</Button>
              <Button color="pink" size="small">
                BUTTON
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="large" outline>
                BUTTON
              </Button>
              <Button color="gray" outline>
                BUTTON
              </Button>
              <Button color="pink" size="small" outline>
                BUTTON
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="large" fullWidth>
                BUTTON
              </Button>
              <Button size="large" color="gray" fullWidth>
                BUTTON
              </Button>
              <Button size="large" color="pink" fullWidth>
                BUTTON
              </Button>
            </ButtonGroup>
          </AppBlock>
        </ThemeProvider>
      );
    }

    export default App;
    ```

---

### Dialog 만들기

- **Dialog.js**

    ```jsx
    import React from 'react';
    import styled from 'styled-components';
    import Button from './Button';

    const DarkBackground = styled.div`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.8);
    `;

    const DialogBlock = styled.div`
        width: 320px;
        padding: 1.5rem;
        background: white;
        border-radius: 2px;
        h3 {
        margin: 0;
        font-size: 1.5rem;
        }
        p {
        font-size: 1.125rem;
        }
    `;

    const ButtonGroup =style.div`
        margin-top: 3rem;
        display: flex;
        justify-content: flex-end;
    `;

    function Dialog({title, children, confirmText, cancelText}){
        return(
            <DarkBackground>
                <DialogBlock>
                    <h3>{title}</h3>
                    <p>{children}</p>
                <ButtonGroup>
                    <Button color="gray">{cancelText}</Button>
                    <Button color="pink">{confirmText}</Button>
                </ButtonGroup>
                </DialogBlock>
            </DarkBackground>
        );
    }

    Dialog.defaultProps ={
        confirmText: '확인',
        cancelText:'취소'
    };

    export default Dialog;
    ```

    - 리액트 사용 선언 및 styled-components 라이브러리 사용, Button 컴포넌트 사용

        ```jsx
        import React from 'react';
        import styled from 'styled-components';
        import Button from './Button';
        ```

    - 배경화면 CSS

        ```jsx
        const DarkBackground = styled.div`
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.8);
        `;

        ```

    - 화면 블록 CSS

        ```jsx
        const DialogBlock = styled.div`
            width: 320px;
            padding: 1.5rem;
            background: white;
            border-radius: 2px;
            h3 {
            margin: 0;
            font-size: 1.5rem;
            }
            p {
            font-size: 1.125rem;
            }
        `;
        ```

    - 확인, 취소 버튼 CSS

        ```jsx
        const ButtonGroup =style.div`
            margin-top: 3rem;
            display: flex;
            justify-content: flex-end;
        `;
        ```

    - Dialog 함수

        ```jsx
        function Dialog({title, children, confirmText, cancelText}){
            return(
                <DarkBackground>
                    <DialogBlock>
                        <h3>{title}</h3>
                        <p>{children}</p>
                    <ButtonGroup>
                        <Button color="gray">{cancelText}</Button>
                        <Button color="pink">{confirmText}</Button>
                    </ButtonGroup>
                    </DialogBlock>
                </DarkBackground>
            );
        }
        ```

        - h3, p 태그는 스타일링 때 굳이 따로따로 컴퍼넌트를 주지 않고

            ```jsx
            const Title = styled.h3``;
            const Description = styled.p``;
            ```

        - styled-components 라이브러리에서도 Nested CSS 문법을 사용 할 수 있기 때문에 DialogBlock 안에 있는 h3와 p 에게 특정 스타일을 주려면 아래와 같이 작성

            ```jsx
            const DialogBlock = styled.div`
              h3 {}
              p {}
            `;
            ```

    - Dialog 기본 값 및 전역 사용 선언

        ```jsx
        Dialog.defaultProps ={
            confirmText: '확인',
            cancelText:'취소'
        };

        export default Dialog;

        ```

---

- **App.js(렌더링)**

    ```jsx
    import React from 'react';
    import styled, { ThemeProvider } from 'styled-components';
    import Button from './components/Button';
    import Dialog from './components/Dialog';

    const AppBlock = styled.div`
      width: 512px;
      margin: 0 auto;
      margin-top: 4rem;
      border: 1px solid black;
      padding: 1rem;
    `;

    const ButtonGroup = styled.div`
      & + & {
        margin-top: 1rem;
      }
    `;

    function App() {
      return (
      
        <ThemeProvider
          theme={{
            palette: {
              blue: '#228be6',
              gray: '#495057',
              pink: '#f06595'
            }
          }}
        >
            <>
          <AppBlock>
            <ButtonGroup>
              <Button size="large">BUTTON</Button>
              <Button>BUTTON</Button>
              <Button size="small">BUTTON</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="gray" size="large">
                BUTTON
              </Button>
              <Button color="gray">BUTTON</Button>
              <Button color="gray" size="small">
                BUTTON
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="pink" size="large">
                BUTTON
              </Button>
              <Button color="pink">BUTTON</Button>
              <Button color="pink" size="small">
                BUTTON
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="large" outline>
                BUTTON
              </Button>
              <Button color="gray" outline>
                BUTTON
              </Button>
              <Button color="pink" size="small" outline>
                BUTTON
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="large" fullWidth>
                BUTTON
              </Button>
              <Button size="large" color="gray" fullWidth>
                BUTTON
              </Button>
              <Button size="large" color="pink" fullWidth>
                BUTTON
              </Button>
            </ButtonGroup>
          </AppBlock>
          <Dialog
              title="정말로 삭제하시겠습니까?"
              confirmText="삭제"
              cancelText="취소"
            >
              데이터를 정말로 삭제하시겠습니까?
            </Dialog>
          </>
        </ThemeProvider>
      );
    }

    export default App;
    ```

    - Dialog 컴포넌트를 예시 내용과 함께 AppBlock 하단에 넣어주었다.
    - ThemeProvider 내부는 하나의 리액트 엘리먼트로 감싸져있어야 하기 때문에 AppBlock 과 Dialog 를 <></> 으로 감싸주었습니다.

---

### Dialog.js 박스 열고 닫기

- Dialog에서 onConfirm 과 onCancel 을 props로 받아오도록 하고 해당 함수들을 각 버튼들에게 onClick로 설정한다.
- visiable props도 받아와서 false 일 때 컴포넌트에서 null을 반환하도록 설정

---

- Dialog.js

    ```jsx
    import React from 'react';
    import styled from 'styled-components';
    import Button from './Button';

    const DarkBackground = styled.div`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.8);
    `;

    const DialogBlock = styled.div`
        width: 320px;
        padding: 1.5rem;
        background: white;
        border-radius: 2px;
        h3 {
        margin: 0;
        font-size: 1.5rem;
        }
        p {
        font-size: 1.125rem;
        }
    `;

    const ButtonGroup =styled.div`
        margin-top: 3rem;
        display: flex;
        justify-content: flex-end;
    `;

    const ShortMarginButton = styled(Button)`
        & + &{
            margin-left: 1rem;
        }
    `;

    function Dialog({
        title,
        children,
        confirmText,
        cancelText,
        onConfirm,
        onCancel,
        visible
      }) {
        if (!visible) return null;
        return (
          <DarkBackground>
            <DialogBlock>
              <h3>{title}</h3>
              <p>{children}</p>
              <ButtonGroup>
                <ShortMarginButton color="gray" onClick={onCancel}>
                  {cancelText}
                </ShortMarginButton>
                <ShortMarginButton color="pink" onClick={onConfirm}>
                  {confirmText}
                </ShortMarginButton>
              </ButtonGroup>
            </DialogBlock>
          </DarkBackground>
        );
      }

    Dialog.defaultProps ={
        confirmText: '확인',
        cancelText:'취소'
    };

    export default Dialog;

    ```

- App.js

    ```jsx
    import React, {useState} from 'react';
    import styled, { ThemeProvider } from 'styled-components';
    import Button from './components/Button';
    import Dialog from './components/Dialog';

    const AppBlock = styled.div`
      width: 512px;
      margin: 0 auto;
      margin-top: 4rem;
      border: 1px solid black;
      padding: 1rem;
    `;

    const ButtonGroup = styled.div`
      & + & {
        margin-top: 1rem;
      }
    `;

    function App() {
      const [dialog, setDialog] = useState(false);
      const onClick = () => {
        setDialog(true);
      };
      const onConfirm = () => {
        console.log('확인');
        setDialog(false);
      };
      const onCancel = () => {
        console.log('취소');
        setDialog(false);
      };
      return (
      
        <ThemeProvider
          theme={{
            palette: {
              blue: '#228be6',
              gray: '#495057',
              pink: '#f06595'
            }
          }}
        >
            <>
          <AppBlock>
            <ButtonGroup>
              <Button size="large">BUTTON</Button>
              <Button>BUTTON</Button>
              <Button size="small">BUTTON</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="gray" size="large">
                BUTTON
              </Button>
              <Button color="gray">BUTTON</Button>
              <Button color="gray" size="small">
                BUTTON
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="pink" size="large">
                BUTTON
              </Button>
              <Button color="pink">BUTTON</Button>
              <Button color="pink" size="small">
                BUTTON
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="large" outline>
                BUTTON
              </Button>
              <Button color="gray" outline>
                BUTTON
              </Button>
              <Button color="pink" size="small" outline>
                BUTTON
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="large" fullWidth>
                BUTTON
              </Button>
              <Button size="large" color="gray" fullWidth>
                BUTTON
              </Button>
              <Button size="large" color="pink" fullWidth onClick={onClick}>
                삭제
              </Button>
            </ButtonGroup>
          </AppBlock>
          <Dialog
              title="정말로 삭제하시겠습니까?"
              confirmText="삭제"
              cancelText="취소"
              onConfirm={onConfirm}
              onCancel={onCancel}
              visible={dialog}
            >
              데이터를 정말로 삭제하시겠습니까?
            </Dialog>
          </>
        </ThemeProvider>
      );
    }

    export default App;
    ```

    - 마지막 버튼을 클릭하면 Dialog가 보여지도록 하고 Dialog에 onconfirm. onCancel, visiable 값을 전달

---

### Dialog 트랜지션 구현하기

- Dialog가 나타나거나 사라질때 동작하는 효과
- 트랜지션 효과를 적용 할 때에는 CSS Keyframe을 사용하며, styled-components에서 이를 사용 할 때에는 keyframes라는 유틸을 사용합니다.
- Dialog가 나타날 때 DarkBackground 쪽에서 서서히 나타나는 fadeIn 효과를 주고, DialogBook 에는 아래에서부터 위로 올라오는 효과를 보여주는 slideUp 효과를 부여

---

- **Dialog.js**

    ```jsx
    import React, { useState, useEffect } from 'react';
    import styled, { keyframes, css } from 'styled-components';
    import Button from './Button';

    const fadeIn = keyframes`
      from {
        opacity: 0
      }
      to {
        opacity: 1
      }
    `;

    const fadeOut = keyframes`
      from {
        opacity: 1
      }
      to {
        opacity: 0
      }
    `;

    const slideUp = keyframes`
      from {
        transform: translateY(200px);
      }
      to {
        transform: translateY(0px);
      }
    `;

    const slideDown = keyframes`
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(200px);
      }
    `;

    const DarkBackground = styled.div`
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.8);

      animation-duration: 0.25s;
      animation-timing-function: ease-out;
      animation-name: ${fadeIn};
      animation-fill-mode: forwards;

      ${props =>
        props.disappear &&
        css`
          animation-name: ${fadeOut};
        `}
    `;

    const DialogBlock = styled.div`
      width: 320px;
      padding: 1.5rem;
      background: white;
      border-radius: 2px;
      h3 {
        margin: 0;
        font-size: 1.5rem;
      }
      p {
        font-size: 1.125rem;
      }

      animation-duration: 0.25s;
      animation-timing-function: ease-out;
      animation-name: ${slideUp};
      animation-fill-mode: forwards;

      ${props =>
        props.disappear &&
        css`
          animation-name: ${slideDown};
        `}
    `;

    const ButtonGroup = styled.div`
      margin-top: 3rem;
      display: flex;
      justify-content: flex-end;
    `;

    const ShortMarginButton = styled(Button)`
      & + & {
        margin-left: 0.5rem;
      }
    `;

    function Dialog({
      title,
      children,
      confirmText,
      cancelText,
      onConfirm,
      onCancel,
      visible
    }) {
      const [animate, setAnimate] = useState(false);
      const [localVisible, setLocalVisible] = useState(visible);

      useEffect(() => {
        // visible 값이 true -> false 가 되는 것을 감지
        if (localVisible && !visible) {
          setAnimate(true);
          setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisible(visible);
      }, [localVisible, visible]);

      if (!animate && !localVisible) return null;
      return (
        <DarkBackground disappear={!visible}>
          <DialogBlock disappear={!visible}>
            <h3>{title}</h3>
            <p>{children}</p>
            <ButtonGroup>
              <ShortMarginButton color="gray" onClick={onCancel}>
                {cancelText}
              </ShortMarginButton>
              <ShortMarginButton color="pink" onClick={onConfirm}>
                {confirmText}
              </ShortMarginButton>
            </ButtonGroup>
          </DialogBlock>
        </DarkBackground>
      );
    }

    Dialog.defaultProps = {
      confirmText: '확인',
      cancelText: '취소'
    };

    export default Dialog;
    ```

---